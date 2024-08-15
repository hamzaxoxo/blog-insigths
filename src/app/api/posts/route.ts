import { verifyJWT } from '@/helpers/verifyJWT';
import { connect } from '@/lib/mongodb';
import Post from '@/models/Posts';
import { NextRequest, NextResponse } from 'next/server';

connect()

export async function GET(request: NextRequest) {
    try {
        const decoded = verifyJWT(request);
        if (decoded instanceof NextResponse) {
            return decoded;
        }

        const posts = await Post.find();
        return NextResponse.json({ data: posts }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
