import Featured from "@/components/Section/Featured";
import Hero from "@/components/Section/Hero";
import Newsletter from "@/components/Section/Newsletter";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="px-8 sm:px-20 space-y-20 ">
        <Hero />
        <Featured />
        <Newsletter />
      </div>
    </>
  );
}
