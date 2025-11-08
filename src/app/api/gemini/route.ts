import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/db/db";
import { GeminiAI } from "@/app/utils/gemini-ai";
import { imagekit } from "@/lib/imagekit";
import { convertPDFToText } from "@/lib/langchain";
import User from "@/models/user.model";
import Response from "@/models/response.model";

await connectDB();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const email = formData.get("email") as string;

    if (!(file instanceof File)) {
      return NextResponse.json({ success: false, message: "Invalid file." }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required." }, { status: 400 });
    }

    // Upload PDF
    const buffer = Buffer.from(await file.arrayBuffer());
    const upload = await imagekit.upload({
      file: buffer,
      fileName: file.name,
      folder: "/synopsis-ai",
    });

    if (!upload.url) {
      return NextResponse.json({ success: false, message: "Error uploading file." }, { status: 500 });
    }

    // Extract text
    const pdfText = await convertPDFToText(upload.url);

    // AI Summary
    const aiResponse = await GeminiAI(pdfText);
    if (!aiResponse) {
      return NextResponse.json({ success: false, message: "Error generating summary." }, { status: 500 });
    }

    console.log('aiResponse : ', aiResponse)

    const response = new Response({
      title: aiResponse.title,
      description: aiResponse.description,
      summaries: aiResponse.summaries,
      fileId: upload.fileId,
      url: upload.url,
      originalName: file.name
    })


    await response.save();

    console.log('response saved in db : ', response)

    // Find or create user
    let user = await User.findOne({ email });

    if (user) {
      user.summaries = user.summaries || [];
      user.summaries.push(response?._id);
      user.dayLimit = Math.max(0, user.dayLimit - 1);
    } else {
      user = new User({ email, summaries: [response._id], dayLimit: 2 });
    }

    await user.save();

    return NextResponse.json({
      success: true,
      message: "Summary generated successfully.",
      response,
      user
    }, { status: 201 });

  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}
