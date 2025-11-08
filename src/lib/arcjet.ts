/* eslint-disable @typescript-eslint/no-explicit-any */
import arcjet, { detectBot, tokenBucket, shield } from '@arcjet/next';
import { isSpoofedBot } from '@arcjet/inspect'
import { NextResponse } from 'next/server';

export const aj = arcjet({
    key: process.env.ARCJET_KEY!,
    rules: [
        shield({ mode: "LIVE" }),
        detectBot({
            mode: "LIVE",
            allow: [
                'CATEGORY:SEARCH_ENGINE',
                'CATEGORY:MONITOR',
                'CURL'
            ]
        }),
        tokenBucket({
            mode: "LIVE",
            refillRate: 5,
            interval: 10,
            capacity: 10
        })
    ]
})


export const ArcJET = async (req: any) => {
    const decision = await aj.protect(req, { requested: 5 })
    console.log('arcjet decision : ', decision)

    if (decision.isDenied()) {
        if (decision.reason.isRateLimit()) {
            return NextResponse.json(
                { error: "Too Many Requests", reason: decision.reason },
                { status: 429 },
            );
        } else if (decision.reason.isBot()) {
            return NextResponse.json(
                { error: "No bots allowed", reason: decision.reason },
                { status: 403 },
            );
        } else {
            return NextResponse.json(
                { error: "Forbidden", reason: decision.reason },
                { status: 403 },
            );
        }
    }

    //bots

    if (decision.ip.isHosting()) {
        return NextResponse.json(
            { error: "Forbidden", reason: decision.reason },
            { status: 403 },
        );
    }

    if (decision.results.some(isSpoofedBot)) {
        return NextResponse.json(
            { error: "Forbidden", reason: decision.reason },
            { status: 403 },
        );
    }

    return NextResponse.next()
}