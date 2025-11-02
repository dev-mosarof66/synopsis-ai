/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server'
import ImageKit from "imagekit"
import { connectDB } from '@/db/db'



await connectDB()


const imagekit = new ImageKit({
    publicKey: process.env.NEXT_IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.NEXT_IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.NEXT_IMAGEKIT_URL!,
})


export async function POST(req: NextRequest) {
    try {
        console.log('inside upload', req)
        const formData = await req.formData()
        const file = formData.get("file") as File;

        console.log(file)

        if (!file) {
            return NextResponse.json({
                success: false,
                message: 'No file found.'
            }, { status: 401 })
        }

        const FileBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(FileBuffer)

        const upload = await imagekit.upload({
            folder: "synopsis-ai",
            file: buffer,
            fileName: file.name

        })

        if (!upload) {
            return NextResponse.json({
                success: false,
                message: 'Error while uploading file to imagekit.'
            }, { status: 401 })
        }
        return NextResponse.json({
            success: true,
            message: 'File uploaded successfully.',
            upload
        }, { status: 201 })
    } catch (error: any) {
        console.log('error in uploading file : ', error)
        return NextResponse.json({
            success: false,
            message: 'Internal server error.'
        }, { status: 500 })
    }
}
