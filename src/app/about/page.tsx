import Banner from "@/components/Section/Banner";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bloginsights.com/about"),
  title: "About Us",
  description: "Learn about Blog Insights, our mission, values, and team. Discover why we are passionate about programming and web development education.",
  keywords: [
    "About Us",
    "Blog Insights mission, values, team, company information, history, background",
    "programming education, web development passion",
  ]
}

export default function page() {
  return (
    <>
      <Banner title="About Us" />
    </>
  )
}
