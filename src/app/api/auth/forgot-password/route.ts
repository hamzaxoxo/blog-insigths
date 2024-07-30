import { sendEmail } from "@/helpers/mailer";
import { connect } from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    const token = jwt.sign({ _id: user._id }, process.env.NEXT_PUBLIC_JWT_SECRET!, { expiresIn: "5min" });
    console.log(token)

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;

    await user.save();

    await sendEmail({ email, emailType: "RESET", userId: user._id })

    return NextResponse.json({
      message: "Email sent",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
