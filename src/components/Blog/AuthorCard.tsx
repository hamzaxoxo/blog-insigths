import Image from 'next/image'
import React from 'react'
import { Post } from '../Type/Types'

interface AuthorCardProps {
    post: Post;
}

export default function AuthorCard({ post }: AuthorCardProps) {
    const { author } = post;
    return (
        <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
                <div className="flex py-2">
                    <Image
                        src={author?.picture?.url || '/default-avatar.jpg'}
                        className="h-10 w-10 rounded-full mr-2 object-cover"
                        width={40}
                        height={40}
                        alt={author?.name || 'Anonymous'}
                    />
                    <div>
                        <p className="font-semibold text-gray-700 text-sm">
                            {" "}
                            {author?.name || 'Anonymous'}{" "}
                        </p>
                        <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                    </div>
                </div>
                <p className="text-gray-700 py-3">
                    {author?.biography || 'No Bio'}
                </p>
                <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                    Follow
                    <i className="bx bx-user-plus ml-2" />
                </button>
            </div>
        </div>
    )
}
