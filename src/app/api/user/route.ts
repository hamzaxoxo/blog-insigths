
import User from "@/models/User";
import { connect } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "@/helpers/verifyJWT";

connect()

export async function GET(request: NextRequest) {

    try {
        const res = verifyJWT(request);
        const user = await User.findOne({ _id: res }).select("-password").exec();
        return NextResponse.json({
            message: "User Fetched",
            success: true,
            data: user
        })


    } catch (error: any) {
        return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 })
    }

}