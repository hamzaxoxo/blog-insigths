import Image from "next/image";
import * as React from "react";
import Container from "../Container";
import { blogData } from "../defaultData/blogData";
import Pagination from "../Pagination/Pagination";
export default function Post() {
  return (
    <Container className="lg:px-10 px-5">
      <h1 className="self-stretch my-10 text-4xl font-bold tracking-tighter leading-10 ">
        All Posts
      </h1>
      <div className="space-y-16">
        {blogData.map((blog) => (
          <div key={blog.id} className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <Image
                alt={blog.imgAlt}
                loading="lazy"
                src={blog.imgSrc}
                className="object-contain grow w-full aspect-[1.54] max-md:mt-8 max-md:max-w-full"
                width={400}
                height={250}
              />
            </div>
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch my-auto text-base max-md:max-w-full">
                <div className="font-semibold leading-none text-violet-800 uppercase tracking-[3px]">
                  {blog.category}
                </div>
                <div className="mt-4 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                  {blog.title}
                </div>
                <div className="self-stretch mt-7 leading-7 text-zinc-500 max-md:max-w-full">
                  {blog.summary}
                </div>
              </div>
            </div>
          </div>
        )
        )}
      </div>
      <Pagination />
    </Container>
  );
}