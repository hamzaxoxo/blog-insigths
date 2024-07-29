import Featured from "@/components/Section/Featured";
import Hero from "@/components/Section/Hero";
import Newsletter from "@/components/Section/Newsletter";
import Testimonials from "@/components/Testimonials/Testimonials";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <Featured />
        {/* <Newsletter /> */}
        <Testimonials />
      </div>
    </>
  );
}
