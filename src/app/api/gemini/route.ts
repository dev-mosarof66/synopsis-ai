/* eslint-disable @typescript-eslint/no-explicit-any */
import { GeminiAI } from '@/app/utils/gemini-ai'
import { NextRequest, NextResponse } from 'next/server'


export async function GET(req: NextRequest) {
    try {
        const res = await GeminiAI('Should i include langchain to send you pdf for getting a json response.')
        console.log('gemini response : ', res)
        return NextResponse.json({
            success: true,
            message: 'File uploaded successfully.',
            res
        }, { status: 201 })
    } catch (error: any) {
        console.log('error in uploading file : ', error)
        return NextResponse.json({ 
            success: false,
            message: 'Internal server error.'
        }, { status: 500 })
    }
}
