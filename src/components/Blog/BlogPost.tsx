'use client'

import { fetchPosts } from '@/conf/postService';
import Image from 'next/image';
import React from 'react';
import { Post } from '../Type/Types';
import Link from 'next/link';
import { format } from "date-fns";
import parse from 'html-react-parser';

const BlogPost = () => {
    const [posts, setPosts] = React.useState<Post[]>([]);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const loadPosts = async () => {
            try {
                const fetchedPosts: Post[] = await fetchPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error('Error loading posts:', error);
                setError('Failed to load posts');
            }
        };

        loadPosts();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            {posts.map((blog) => {
                return (
                    <article className="group" key={blog?.slug}>
                        <Link href={`/post/${blog?.slug}`}>
                            <Image
                                alt={blog.title || "Blog Image"}
                                src={blog?.coverImage?.url}
                                width={500}
                                height={300}
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />
                        </Link>
                        <div className="mt-5 p-4">
                            <Link href={`/post/${blog?.slug}`}>
                                <h3 className="text-lg font-medium text-gray-900">{blog?.title}</h3>
                            </Link>

                            <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
                                {parse(blog?.content?.html || '')}
                            </p>
                            <Link
                                href={`/post/${blog?.slug}`}
                                className="underline font-semibold text-primary-600 text-xs"
                            >
                                Read more
                            </Link>
                        </div>

                        <div className="flex items-center p-4 border-t border-gray-200">
                            <img
                                src={blog?.author?.picture?.url}
                                alt={blog?.author?.name}
                                className="w-12 h-12 object-cover rounded-full border-2 border-white"
                            />
                            <div className="ml-3 flex flex-col gap-2">
                                <Link
                                    href={blog?.author?.name}
                                    className="text-sm font-semibold text-gray-800 hover:text-gray-600"
                                >
                                    {blog?.author?.name}
                                </Link>
                                <time
                                    className="text-xs text-gray-500"
                                >
                                    {blog?.publishedAt ? format(new Date(blog?.publishedAt), "MMMM d, yyyy") : 'Invalid date'}
                                </time>
                            </div>
                        </div>
                    </article >
                )
            }

            )}
        </>
    );
}

export default BlogPost;
