import type { NextApiRequest, NextApiResponse } from 'next';
import { connect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from 'next/server';

connect();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const users = await User.find().select('-password');
        return NextResponse.json({ status: "success", data: users }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ status: "error", message: error.message }, { status: 500 });
    }
};

