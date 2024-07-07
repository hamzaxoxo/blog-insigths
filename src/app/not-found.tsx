import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Error() {
    return (
        <div className="h-[70vh] sm:p-0 px-10 mx-auto container flex justify-between items-center">
            <div>
                <div className="text-primary font-semibold mb-2 uppercase">404 error</div>
                <div className="font-bold text-4xl mb-2">Page not found</div>
                <div className="text-grayscale-500 mb-6">
                    Sorry, we couldn’t find the page you’re looking for.
                </div>
                <Link
                    href="/"
                    className="flex items-center gap-2 text-primary font-semibold capitalize"
                >
                    Go Back Home
                    <FaArrowRight />
                </Link>
            </div>
            <div></div>
        </div>

    )
}
