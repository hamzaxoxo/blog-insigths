import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/auth/login' || path === '/auth/signup' || path === '/auth/verifyemail' || path === '/blogs'

    const isSlugPath = path.startsWith('/blogs')

    const token = request.cookies.get('token')?.value || ''

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if (isSlugPath && !token) {
        return NextResponse.redirect(new URL('/auth/login', request.nextUrl))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/auth/login', '/auth/signup', '/auth/verifyemail'],
}
