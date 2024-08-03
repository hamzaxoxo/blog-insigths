import ListOfAuthor from "@/components/Author/ListOfAuthor";
import { AboutUs } from "@/components/Section/AboutUs";
import DiscoverOurStory from "@/components/Section/DiscoverOurStory";
import Featured from "@/components/Section/Featured";
import Hero from "@/components/Section/Hero";
import JoinTeam from "@/components/Section/JoinTeam";
import LogoComponent from "@/components/Section/LogoComponent";
import Newsletter from "@/components/Section/Newsletter";
import Testimonials from "@/components/Section/Testimonials";
import React from "react";

export default function Home() {
  return (
    <div className="relative">
      <svg className="opacity-20 absolute inset-0 -z-10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" strokeWidth="0.5" />
          </pattern>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="url(#smallGrid)" />
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <Hero />
      <DiscoverOurStory />
      <ListOfAuthor />
      <LogoComponent />
      <Testimonials />
      <JoinTeam />
      {/* <Featured /> */}
      {/* <AboutUs /> */}
      {/* <Newsletter /> */}
      {/* <Testimonials /> */}
    </div>

  );
}
