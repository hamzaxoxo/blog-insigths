import { connect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        const existingEmailUser = await User.findOne({ email });
        if (existingEmailUser) {
            return NextResponse.json({ status: "error", message: "Email already exists" }, { status: 400 });
        }

        const existingUsernameUser = await User.findOne({ username });
        if (existingUsernameUser) {
            return NextResponse.json({ status: "error", message: "Username already exists" }, { status: 400 });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        const refreshToken = jwt.sign(
            { _id: newUser._id, email },
            process.env.NEXT_PUBLIC_JWT_SECRET!,
            { expiresIn: '5m' }
        );

        newUser.refreshToken = refreshToken;

        const savedUser = await newUser.save()
        const userResponse = savedUser.toJSON();
        await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

        return NextResponse.json({
            message: "User created successfully",
            status: "success",
            data: userResponse
        });
    } catch (error: any) {
        return NextResponse.json({ status: "error", message: error.message }, { status: 500 });
    }
}
