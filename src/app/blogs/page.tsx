/* eslint-disable @next/next/no-img-element */
import { blogData } from "@/components/defaultData/blogData";
import { tags } from "@/components/defaultData/tags";
import Image from "next/image";
import React from "react";

export default function page() {
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
        {blogData.map((blog) => (
          <article className="group"  key={blog.id}>
            <a href={blog.postLink}>
              <img
                alt={blog.imgAlt}
                src={blog.imgSrc}
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />
            </a>
            <div className="mt-5 p-4">
              <a href={blog.postLink}>
                <h3 className="text-lg font-medium text-gray-900">{blog.title}</h3>
              </a>

              <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
                {blog.summary}
              </p>
              <a
                href={blog.postLink}
                className="underline font-semibold text-primary-600 text-xs"
              >
                Read more
              </a> . . .
            </div>

            <div className="flex items-center p-4 border-t border-gray-200">
              <img
                src={blog.authorImgSrc}
                alt={blog.author}
                className="w-12 h-12 object-cover rounded-full border-2 border-white"
              />
              <div className="ml-3">
                <a
                  href={blog.authorLink}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-600"
                >
                  {blog.author}
                </a>
                <time
                  dateTime={blog.date}
                  className="text-xs text-gray-500"
                >
                  {new Date(blog.date).toLocaleDateString()}
                </time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
