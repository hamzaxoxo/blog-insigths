
import { sendEmail } from "@/helpers/mailer";
import { connect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 })
        }

        await sendEmail({ email, emailType: "RESET", userId: user._id, name: user.fullName });

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}