import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export function verifyJWT(request: NextRequest) {
    try {
        const token: any = request.cookies.get("token");
        if (token) {
            const decoded: any = jwt.verify(token.value, process.env.NEXT_PUBLIC_JWT_SECRET!);
            return decoded?.id;
        } else {
            throw new Error('No token provided');
        }
    } catch (error) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
}
