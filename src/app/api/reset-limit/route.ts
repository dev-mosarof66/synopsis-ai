import { NextResponse } from 'next/server'
import User from '@/models/user.model'
import { connectDB } from '@/db/db'


await connectDB();



export async function GET() {
    try {

        console.log('reset limit called..')

        await User.updateMany({}, { $set: { dayLimit: 3 } })
        console.log('reset limit done..')
        return NextResponse.json({
            message: "All users day limit reseted successfully. ",
            success: true
        }, { status: 201 })

    } catch (error) {
        console.log("error while calling this reset limit function : ", error)
        return NextResponse.json({
            message: "Internal server error ",
            success: false
        }, { status: 500 })
    }
}