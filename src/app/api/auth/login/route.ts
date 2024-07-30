import { connect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect()

export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return NextResponse.json({ status: "error", message: "User does not exist" }, { status: 400 });
        }

        // Check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ status: "error", message: "Invalid password" }, { status: 400 });
        }

        // Create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };
        const token = jwt.sign(tokenData, process.env.NEXT_PUBLIC_JWT_SECRET!, { expiresIn: "5m" });

        user.refreshToken = token;
        user.updateOne({ last_login: Date.now() });
        user.toJSON();

        // Create token

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            data: user
        });
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });
        return response;

    } catch (error: any) {
        return NextResponse.json({ status: "error", message: "Something went wrong" }, { status: 500 });
    }
}
