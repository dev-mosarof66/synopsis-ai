import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/db/db'
import User from '@/models/user.model'

export async function POST(req: NextRequest) {
  try {
    await connectDB(); // ✅ Call INSIDE handler

    const { email } = await req.json();
    console.log('received email : ', email);

    if (!email) {
      return NextResponse.json({
        success: false,
        message: 'Email is required.'
      }, { status: 400 });
    }

    const user = await User.findOne({ email }).populate("summaries"); // ✅ "Response" is already imported


    return NextResponse.json({
      success: true,
      message: "User fetched successfully.",
      user
    }, { status: 200 });
  } catch (error) {
    console.log("error in fetching user : ", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error."
    }, { status: 500 });
  }
}
