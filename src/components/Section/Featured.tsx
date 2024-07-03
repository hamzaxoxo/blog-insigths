import Image from "next/image";
import React from "react";
import blog1 from "../../../public/blog1.jpg";
import blog2 from "../../../public/blog2.png";
import blog3 from "../../../public/blog3.png";
import blog4 from "../../../public/blog4.png";
import { Timer, TimerIcon } from "lucide-react";

export default function Featured() {
  return (
    <section className="mx-auto relative overflow-hidden">
      <div className="relative">
        <div className="mx-auto">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-gray-300 px-3 py-1 text-xs font-semibold text-black">
              OUR BLOG
            </span>
            <h1 className="text-5xl font-bold">
              Learn Something New with Our Blog Posts
            </h1>
            <p className="mt-4 text-lg tracking-tight text-gray-500">
              Discover useful tips and best practices for using Tailwind in our
              informative blog posts. Get inspired to create stunning landing
              pages and dashboards.
            </p>
          </div>
          <div className="my-18 -mx-4 flex flex-wrap px-4">
            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
              <a className="group block w-full" href="#">
                <Image
                  className="mb-5 block w-full rounded-lg object-cover"
                  src={blog1}
                  alt=""
                />
                <span className="mb-5 block text-gray-500">Jul 20, 2023</span>
                <h4 className="mb-5 text-3xl font-semibold text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h4>
                <p className="max-w-xl text-lg text-gray-500">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  xercitation veniam consequat sunt nostrud amet.
                </p>
              </a>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <a
                className="group mb-8 md:flex flex-row flex gap-5 items-center"
                href="#"
              >
                <Image
                  className="h-40 w-48 rounded-lg object-cover"
                  src={blog2}
                  alt=""
                />
                <div className="my-4 pt-2 md:ml-6 md:mt-0 flex flex-col justify-center">
                  <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </h4>
                  <span className="mt-2 block text-gray-500">4 min read</span>
                </div>
              </a>
              <a
                className="group mb-8 md:flex flex-row flex gap-5 items-center"
                href="#"
              >
                <Image
                  className="h-40 w-48 rounded-lg object-cover"
                  src={blog3}
                  alt=""
                />
                <div className="my-4 pt-2 md:ml-6 md:mt-0 flex flex-col justify-center">
                  <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </h4>
                  <span className="mt-2 block text-gray-500">4 min read</span>
                </div>
              </a>
              <a
                className="group mb-8 md:flex flex-row flex gap-5 items-center"
                href="#"
              >
                <Image
                  className="h-40 w-48 rounded-lg object-cover"
                  src={blog4}
                  alt=""
                />
                <div className="my-4 pt-2 md:ml-6 md:mt-0 flex flex-col justify-center">
                  <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </h4>
                  <span className="mt-2 block text-gray-500">6 min read</span>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-14 text-center">
            <button
              type="button"
              className="w-full items-center justify-center rounded-xl border-2 border-black bg-black px-6 py-3 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
            >
              View All Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
