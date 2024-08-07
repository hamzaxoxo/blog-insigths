import Image from "next/image";
import React from "react";
import hero from "../../../public/hero.png";
import Container from "../Container";

export default function Hero() {
  return (
    <div className="mb-20 -z-10 relative text-base font-bold text-white min-h-[620px]">
      <Container>
        <Image
          alt="hero"
          src={hero}
          layout="fill"
          objectFit="cover"
          priority={true}
          className="absolute inset-0 brightness-50"
        />
        <div className="flex relative flex-col items-start p-5 w-full">
          <div className="text-xl mt-10 font-semibold leading-5 uppercase tracking-[3px] md:mt-14 w-full">
            <span className="font-medium">Posted on</span>{" "}
            <span className="font-black">startup</span>
          </div>
          <div className="mt-9 tracking-tighter max-w-full md:w-[803px] leading-[51px] lg:text-7xl md:text-6xl text-4xl  sm:leading-[40px]">
            Step-by-step guide to choosing great font pairs
          </div>
          <div className="text-xl mt-7 leading-7 text-amber-300 md:max-w-full  sm:leading-6">
            By <span className="text-amber-300">James West</span> | May 23, 2022{" "}
          </div>
          <div className="mt-7 w-[599px] max-w-full text-xl leading-6 text-wrap">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident.
          </div>
          <button className="px-12 py-4 mt-14 mb-20 text-lg leading-6 text-gray-800 bg-amber-300 md:px-5 md:my-10 sm:px-4 sm:py-2 sm:text-base">
            Read More &gt;
          </button>
        </div>
      </Container>
    </div>
  );
}
