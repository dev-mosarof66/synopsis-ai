import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { aj } from './lib/arcjet';
import { NextResponse } from 'next/server';


const isProtectedRoute = createRouteMatcher(['/upload', '/your-summaries', '/signin']);



export default clerkMiddleware(async (auth, req) => {
    const decision = await aj.protect(req, { requested: 5 })
    if (decision.isDenied()) {
        if (decision.reason.isBot()) {
            return NextResponse.json(
                { message: "No bots allowed", reason: decision.reason },
                { status: 403 },)
        }
        return NextResponse.json(
            { message: "Too Many Requests, please try again later" },
            { status: 429 });
    }
    if (isProtectedRoute(req)) await auth.protect()
});


export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};