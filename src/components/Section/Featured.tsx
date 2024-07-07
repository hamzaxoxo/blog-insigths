import Image from "next/image";
import Link from "next/link";
import blog1 from "../../../public/blog1.jpg";

import Author from "../Author";
import ThumbRight from "../PostThumnail/ThumbRight";

export default function Featured() {
  return (
    <section className="max-w-6xl mx-auto relative overflow-hidden">
      <div className="relative">
        <div className="mx-auto">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <span className="mb-4 inline-block rounded-full bg-gray-300 px-3 py-1 text-xs font-semibold text-primary">
              OUR BLOG
            </span>
            <h1 className="leading-10 font-display text-3xl font-extrabold text-primary lg:text-5xl xl:text-6xl">
              Discover Fresh Insights with Our Featured Blog Posts
            </h1>
            <p className="mt-4 text-lg tracking-tight text-gray-500">
              Discover valuable blogging insights on our blog page, where we
              share expert tips, strategies, and trends to help you succeed in
              the world of blogging
            </p>
          </div>
          <div className="my-18 -mx-4 flex flex-wrap">
            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
              <div className="group block w-full">
                <Image
                  className="block w-full rounded-lg object-cover"
                  src={blog1}
                  alt="blog1"
                />
                <div className="flex flex-col gap-2 mt-2">
                  <Link
                    href="/"
                    className="w-fit bg-primary hover:bg-gray-900 text-xs rounded text-gray-50 font-medium px-2 py-0.5 inline-block"
                  >
                    #playwright
                  </Link>
                  <h4 className="sm:text-3xl text-xl font-semibold text-gray-900">
                    Unlocking Success: Essential Blogging Insights for Aspiring
                    Bloggers
                  </h4>
                  <Author />
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <ThumbRight />
              <ThumbRight />
              <ThumbRight />
            </div>
          </div>
          <div className="mt-14 text-center">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-xl border-2 border-primary bg-primary px-6 py-3 text-center font-medium text-white duration-200 hover:border-primary hover:bg-transparent hover:text-primary focus:outline-none focus-visible:outline-primary focus-visible:ring-primary lg:w-auto"
            >
              View All Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
