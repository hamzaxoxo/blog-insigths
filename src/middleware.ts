
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function middleware(request: NextRequest) {
    const token = request.headers.get('authorization')?.split(' ')[1];

    if (!token) {
        return NextResponse.json({ status: 'error', message: 'Access denied. No token provided.' }, { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET!);
        // request.user = decoded; 
        return NextResponse.next();
    } catch (error) {
        return NextResponse.json({ status: 'error', message: 'Invalid token.' }, { status: 400 });
    }
}

export const config = {
    matcher: '/api/auth/user/:path*', // Apply this middleware to all API routes
};
