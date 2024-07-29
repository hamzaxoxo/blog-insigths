import React from 'react'
import Author from './Author'

export default function ListOfAuthor() {
    return (
        <div className="flex flex-col px-5">
            <div className="self-center text-4xl font-bold tracking-tighter leading-10 text-gray-800">
                List of Authors
            </div>
            <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                </div>
            </div>
        </div>
    )
}
