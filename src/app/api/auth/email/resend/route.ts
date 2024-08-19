
import User from "@/models/User";
import { connect } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

connect()

export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json()
        const { email } = reqBody
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 400 })
        }

        if (user.isVerified) {
            return NextResponse.json({ error: "User already verified" }, { status: 400 })
        }

        await sendEmail({ email, emailType: "VERIFY", userId: user?._id, name: user?.username })

        return NextResponse.json({
            message: "Verification email sent",
            success: true
        })


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}