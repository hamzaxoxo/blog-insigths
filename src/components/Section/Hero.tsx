import Image from "next/image";
import React from "react";
import hero from "../../../public/hero.png";
import Container from "../Container";
import DynamicImage from "../DynamicImage";
import Button from "../Buttons/Button";

export default function Hero() {
  return (
    <div className="mb-20 -z-10 relative text-base font-bold text-white min-h-[620px]">
      <Container>
        <Image
          alt="hero"
          src={hero}
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 brightness-50"
        // placeholder='blur'
        // blurDataURL="https://res.cloudinary.com/daeapkeh9/image/upload/v1725122679/HomePage/oyp7z2czvhjvtlzxc0br.png"
        />
        {/* <DynamicImage
          url="https://res.cloudinary.com/daeapkeh9/image/upload/v1725122679/HomePage/oyp7z2czvhjvtlzxc0br.png"
          alt="hero"
          containerClass="absolute inset-0"
        /> */}
        <div className="flex relative flex-col items-start w-full">
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
          <Button variant="secondary" className="mt-10 !px-[48px]">
            Read More &gt;
          </Button>
        </div>
      </Container>
    </div>
  );
}
