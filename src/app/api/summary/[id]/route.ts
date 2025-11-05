//api/summary/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import Response from "@/models/response.model";


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