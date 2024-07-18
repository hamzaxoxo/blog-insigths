import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Post } from '../Type/Types'

export default function BlogPostSection({ post }: any) {
    return (
        <div className='pb-20 mx-auto md:max-w-[1600px] gap-2xl grid grid-cols-1 items-center lg:grid-cols-2'>
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-4">
                    {post?.tags?.map((tag: any) => (
                        <Link
                            key={tag.name}
                            href={`/tag/${tag?.name.toLowerCase()}`}
                            className="inline-block bg-gray-100 text-gray-600 text-xs font-medium py-1 px-2 rounded-sm"
                        >
                            #{tag?.name}
                        </Link>
                    ))
                    }
                </div>
                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                    {post?.title}
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    {post?.excerpt}.
                </p>
                <div className="flex items-center">
                    <img
                        className="w-12 h-12 rounded-full mr-4"
                        src={post?.author?.picture?.url || '/default-avatar.jpg'}
                        alt={post?.author?.name || 'Anonymous'}
                    />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">Written by {post?.author?.name || 'Anonymous'}</p>
                        <p className="text-gray-600">on {post?.publishedAt}1</p>
                    </div>
                </div>
            </div>
            <div className='max-w-3xl'>
                <Image
                    alt="Working with the Rich Text Field"
                    width="560"
                    height="315"
                    decoding="async"
                    className="rounded"
                    style={{ color: 'transparent' }}
                    src={post?.coverImage?.url}
                />
            </div>
        </div>
    )
}
