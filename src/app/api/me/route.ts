import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/db/db'
import User from '@/models/user.model'
import '@/models/response.model'

await connectDB();

export async function POST(req: NextRequest) {
  try {

    const { email } = await req.json();
    console.log('received email : ', email);

    if (!email) {
      return NextResponse.json({
        success: false,
        message: 'Email is required.'
      }, { status: 400 });
    }

    const user = await User.findOne({ email }).populate('summaries')


    if (!user) {
      return NextResponse.json({
        success: false,
        message: 'No user found.'
      }, { status: 400 });
    }


    return NextResponse.json({
      success: true,
      message: "User fetched successfully.",
      user: {
        _id: user._id,
        email: user.email,
        freeLimit: user.freeLimit,
        currentPlan: user.currentPlan,
        createdAt: user.createdAt,
        summaries: user.summaries
      }
    }, { status: 201 });
  } catch (error) {
    console.log("error in fetching user : ", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error."
    }, { status: 500 });
  }
}
