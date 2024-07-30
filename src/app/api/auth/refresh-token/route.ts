import { NextRequest, NextResponse } from 'next/server';
import { connect } from "@/lib/mongodb";
import User from "@/models/User";
import jwt from 'jsonwebtoken';

connect();

export async function POST(req: NextRequest) {
    try {
        const { refreshToken } = await req.json();

        if (!refreshToken) {
            return NextResponse.json({ status: "error", message: "Refresh token is required" }, { status: 400 });
        }

        let decoded;
        try {
            decoded = jwt.verify(refreshToken, process.env.NEXT_PUBLIC_JWT_SECRET!) as any;
        } catch (error) {
            return NextResponse.json({ status: "error", message: "Invalid refresh token" }, { status: 400 });
        }

        const user = await User.findById(decoded._id).select('+refreshToken');
        if (!user) {
            return NextResponse.json({ status: "error", message: "User not found" }, { status: 404 });
        }

        if (user.refreshToken !== refreshToken) {
            return NextResponse.json({ status: "error", message: "Invalid refresh token" }, { status: 400 });
        }

        const accessToken = jwt.sign({
            _id: user._id,
            email: user.email,
        }, process.env.NEXT_PUBLIC_JWT_SECRET!, { expiresIn: '1h' });

        const newRefreshToken = jwt.sign({
            _id: user._id,
            email: user.email,
        }, process.env.NEXT_PUBLIC_JWT_SECRET!, { expiresIn: '30d' });

        user.refreshToken = newRefreshToken;
        await user.save();

        return NextResponse.json({
            status: "success",
            data: {
                accessToken,
                refreshToken: newRefreshToken,
            },
        });
    } catch (error: any) {
        return NextResponse.json({ status: "error", message: error.message }, { status: 500 });
    }
}
