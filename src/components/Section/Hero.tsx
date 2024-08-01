import Image from "next/image";
import React from "react";
import hero from "../../../public/hero.png";

export default function Hero() {
  return (
    <div className="flex relative flex-col justify-center text-base font-bold text-white min-h-[720px]">
      <Image
        alt="hero"
        loading="lazy"
        src={hero}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-start p-20 w-full md0:px-5 md0:max-w-full">
        <div className="mt-14 font-semibold leading-5 uppercase tracking-[3px] md0:mt-10 md0:w-full">
          <span className="font-medium">Posted on</span>{" "}
          <span className="font-black">startup</span>
        </div>
        <div className="mt-9 text-6xl tracking-tighter leading-[64px] w-[803px] md0:max-w-full md0:text-4xl md0:leading-[51px]">
          Step-by-step guide to choosing great font pairs
        </div>
        <div className="mt-7 leading-7 text-amber-300 md0:max-w-full">
          By <span className="text-amber-300">James West</span> | May 23, 2022{" "}
        </div>
        <div className="mt-7 leading-7 w-[599px] md0:max-w-full">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </div>
        <button className="px-12 py-4 mt-14 mb-20 text-lg leading-6 text-gray-800 bg-amber-300 md0:px-5 md0:my-10">
          Read More &gt;
        </button>
      </div>
    </div>
  );
}

