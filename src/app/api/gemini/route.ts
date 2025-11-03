/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/db/db'
import { GeminiAI } from '@/app/utils/gemini-ai'



await connectDB()



export async function POST(req: NextRequest) {
    try {

        const formData = await req.formData()
        const file = formData.get("file") as File;


        if (!file) {
            return NextResponse.json({
                success: false,
                message: 'No PDF found.'
            }, { status: 401 })
        }

        const response = await GeminiAI(file)

        if (!response) {
            return NextResponse.json({
                success: false,
                message: 'Error while generating response.'
            }, { status: 401 })
        }

        return NextResponse.json({
            success: true,
            message: 'File uploaded successfully.',
            response
        }, { status: 201 })
    } catch (error: any) {
        console.log('error in uploading file : ', error)
        return NextResponse.json({
            success: false,
            message: 'Internal server error.'
        }, { status: 500 })
    }
}
