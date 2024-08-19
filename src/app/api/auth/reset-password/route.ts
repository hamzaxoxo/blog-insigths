import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/User';

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { token, password } = reqBody;

        const user = await User.findOne({ forgotPasswordToken: token, forgotPasswordTokenExpiry: { $gt: Date.now() } });
        if (!user) {
            return NextResponse.json({ error: 'User does not exist' }, { status: 400 });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        user.password = hashedPassword;
        user.forgotPasswordToken = undefined;
        user.forgotPasswordTokenExpiry = undefined;
        await user.save();


        return NextResponse.json({ message: 'Password reset successful' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
