
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    const currentPath = request.nextUrl.pathname;

    const isPublic = currentPath === "/auth/login" || currentPath === "/auth/signup";
    const token = request.cookies.get("token")?.value || "";
    if (isPublic && token.length > 0) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    if (!isPublic && token.length === 0) {
        return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
    }
}

export const config = {
    matcher: ["/", "/auth/login", "/auth/signup"],
};