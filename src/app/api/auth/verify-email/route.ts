import { connect } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";

connect()
export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json()
        const { token } = reqBody

        const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } });

        if (!user) {
            return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 })
        }

        user.isVerfied = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({
            message: "Email verified successfully",
            status: "success"
        }, { status: 200 })


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}