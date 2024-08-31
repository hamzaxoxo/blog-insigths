'use client';
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import logo from '../../../public/logos/main_logo.webp';
export default function Logo() {
    return (
        <Link
            className="inline-flex items-center gap-3 text-primary lg:pr-8 active"
            href="/"
            aria-current="page"
        >
            <Image src={logo} alt="AstroSaas" className="w-40" />
        </Link>
    )
}
