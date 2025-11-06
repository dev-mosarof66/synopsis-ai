//api/summary/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import "@/models/response.model";
import User from "@/models/user.model";


export const GET = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
        const { id } = await params;
        console.log('params from summary : ', id)

        const user = await User.findById(id).populate('summaries')

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "No user found"
            }, { status: 402 })
        }

        return NextResponse.json({
            success: true,
            summaries: user.summaries
        }, { status: 201 })
    } catch (error) {
        console.log('error in fetching summary : ', error)
        return NextResponse.json({
            success: false,
            message: "Internal Server Error"
        }, { status: 201 })
    }
}

