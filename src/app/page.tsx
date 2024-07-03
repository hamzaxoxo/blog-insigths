import Featured from "@/components/Section/Featured";
import Footer from "@/components/Section/Footer";
import Hero from "@/components/Section/Hero";
import Newsletter from "@/components/Section/Newsletter";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="max-w-[1600px] mx-auto px-8 sm:px-20 space-y-20">
        <Hero />
        <Featured />
        <Newsletter />
      </div>
      <div className="border-t border-gray-200 my-5" />
      <div className="max-w-[1600px] mx-auto px-8 sm:px-20">
        <Footer />
      </div>
    </>
  );
}
