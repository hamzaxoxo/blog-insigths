import Image from "next/image";
import React from "react";
import hero from "../../../public/hero.svg";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="max-w-2xl pt-12 md:w-1/2 lg:py-4 lg:pt-32">
          <div className="text-center md:text-left">
            <h1 className="font-display text-3xl font-extrabold text-primary lg:text-5xl xl:text-6xl">
              Unlocking Blog Insights: A Journey Through Words
            </h1>
            <p className="mt-4 max-w-2xl text-lg tracking-tight text-gray-500">
              Learn how to create stunning landing pages and dashboards using
              Tailwind with our fast-paced, easy-to-follow video collection.
              Start building professional-quality websites today.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              className="inline-flex w-full items-center justify-center rounded-xl border-2 border-primary bg-primary px-6 py-3 text-center font-medium text-white duration-200 hover:border-primary hover:bg-transparent hover:text-primary focus:outline-none focus-visible:outline-primary focus-visible:ring-primary lg:w-auto"
            >
              Browse now
            </button>
          </div>
        </div>
        <div className="max-w-4xl pt-12 md:mx-0 md:w-1/2 lg:pt-24">
          <Image
            alt="hero"
            loading="lazy"
            className="mx-auto w-full rounded-3xl"
            // width={700}
            // height={700}
            src={hero}
          />
        </div>
      </div>
    </div>
  );
}
