import React from 'react'
import { Check } from 'lucide-react'
import cover from '../../../public/cover.avif'
import Image from 'next/image'


function CoverPage() {
    return (
        <>
            <div className="hidden relative md:flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24 min-h-screen">

                <div className="absolute inset-0">
                    <Image
                        className="h-full w-full object-cover object-top"
                        src={cover}
                        alt=""
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="relative">
                    <div className="w-full xl:mx-auto xl:w-full xl:max-w-xl">
                        <h3 className="text-4xl font-bold text-white">
                            Empower Your Coding: Latest Tech, In-Depth Guides, Interactive Tutorials, Community
                        </h3>
                        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                            <li className="flex items-center space-x-3">
                                <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500">
                                    <Check className="h-3.5 w-3.5 text-white" />
                                </div>
                                <span className="text-lg font-medium text-white"> Latest Tech Insights </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500">
                                    <Check className="h-3.5 w-3.5 text-white" />
                                </div>
                                <span className="text-lg font-medium text-white"> Expert Programming Tips </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500">
                                    <Check className="h-3.5 w-3.5 text-white" />
                                </div>
                                <span className="text-lg font-medium text-white"> 120Interactive Tutorials </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500">
                                    <Check className="h-3.5 w-3.5 text-white" />
                                </div>
                                <span className="text-lg font-medium text-white"> Community Support </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoverPage