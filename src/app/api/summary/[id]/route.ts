//api/summary/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import Response from "@/models/response.model";
import { imagekit } from "@/lib/imagekit";


export const GET = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
        const { id } = await params;
        console.log('params from summary : ', id)

        const summary = await Response.findById(id)

        if (!summary) {
            return NextResponse.json({
                success: false,
                message: "No summary found"
            }, { status: 402 })
        }

        return NextResponse.json({
            success: true,
            summary
        }, { status: 201 })
    } catch (error) {
        console.log('error in fetching summary : ', error)
        return NextResponse.json({
            success: false,
            message: "Internal Server Error"
        }, { status: 201 })
    }
}

export const DELETE = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
        const { id } = await params;

        const summary = await Response.findById(id)

        if (!summary) {
            return NextResponse.json({
                success: false,
                message: "No summary found"
            }, { status: 402 })
        }

        const deletePDF = await imagekit.deleteFile(summary.fileId)

        if (!deletePDF) {
            return NextResponse.json({
                success: false,
                message: "Error while deleting the pdf from imagekit."
            }, { status: 500 })
        }
        await Response.findByIdAndDelete(summary._id)
        return NextResponse.json({
            success: true,
            message: "Summary deleted successfully."
        }, { status: 201 })
    } catch (error) {
        console.log('internal server error while deleting summary : ', error)
        return NextResponse.json({
            success: false,
            message: "Internal server error."
        }, { status: 500 })
    }
}