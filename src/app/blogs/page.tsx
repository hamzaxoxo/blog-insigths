/* eslint-disable @next/next/no-img-element */

import BlogPost from "@/components/Blog/BlogPost";
import { tags } from "@/components/defaultData/tags";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Discover our New Blogs',
  description: 'Discover how to start a blog with our comprehensive step-by-step guide. Learn about choosing a niche, setting up your blog, creating content, and driving traffic.',
  keywords: ['how to start a blog', 'blogging for beginners', 'step-by-step blogging guide', 'start a blog', 'blogging tips'],
}
export default function Page() {
  return (
    <div className="max-w-7xl mx-auto my-8 pt-10 px-8">
      <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-center lg:max-w-screen-md lg:mx-auto lg:leading-[3.5rem] capitalize">
        Our Blog{" "}
      </h1>
      <div className="text-grayscale-500 md:text-xl text-center mb-12 lg:max-w-screen-md lg:mx-auto">
        <p>
          We are happy to share knowledge. This is the Software testing blog
          featuring key technology updates, tutorials, resources, test
          management insights and best practices.
        </p>
      </div>
      <div className="mb-10 text-center">
        {tags.map((tag) => (
          <a
            key={tag.name}
            className="bg-indigo-100 hover:bg-indigo-200 text-base rounded text-indigo-600 py-0.5 px-3 inline-block mr-2 mb-2"
            href={tag.href}
          >
            #{tag.name}
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 md0:grid-cols-3 gap-8">
        <BlogPost />
      </div>
    </div>
  );
}
