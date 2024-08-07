
import { sendEmail } from "@/helpers/mailer";
import { connect } from "@/lib/mongodb";
import User from "@/models/User";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


connect()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { fullName, email, password } = reqBody

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id, name: fullName })

        return NextResponse.json({
            message: "User Registeref Successfully",
            verifyMessage: "Verification Email Sent",
            success: true,
            savedUser
        })


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}