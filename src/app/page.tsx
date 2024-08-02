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
    <>
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
    </>
  );
}
