import Featured from "@/components/Section/Featured";
import Hero from "@/components/Section/Hero";
import Newsletter from "@/components/Section/Newsletter";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <Featured />
        <Newsletter />
      </div>
    </>
  );
}
