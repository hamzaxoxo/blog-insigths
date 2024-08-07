import { NextResponse } from "next/server"

export function middleware(request: NextResponse) {

    const user = ''

    if (!user) {
        return NextResponse.redirect(
            new URL('/', request.url)
        )
    }



    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard']
    // not
}


