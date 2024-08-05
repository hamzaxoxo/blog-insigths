import Banner from "@/components/Section/Banner";
import Image from "next/image";
import React from "react";
import contact from '../../../public/contact.svg';
import { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bloginsights.com/contact"),
  title: "Contact Us",
  description: "Contact Blog Insights for inquiries, feedback, or support. Reach out to us to learn more about our services and solutions.",
  keywords: [
    "Contact Us",
    "get in touch with Blog Insights",
    "support",
    "customer service",
    "feedback",
    "inquiries",
    "business communication",
    "reach out",
  ]
};

export default function Page() {
  return (
      <Container className="my-[129px]">
        <div className="flex flex-col items-center text-center m-5">
          <p className="text-[16px] !font-extrabold leading-">
            CONTACT US
          </p>
          <p className="md:text-[48px] text-[28px] font-bold tracking-tighter leading-none w-full sm:text-4xl pt-2 pb-[32px]">
            Let’s Start a Conversation
          </p>
          <p className="self-stretch w-full leading-7 text-zinc-500 md:max-w-2xl mx-auto">
            We’re here to help and answer any question you might have. We look forward to hearing from you and will get back to you as soon as possible.
          </p>
        </div>
        <header>
          <h1 className="sr-only">Contact Blog Insights</h1>
        </header>
        <section className="max-w-screen-lg mx-5 lg:mx-auto mt-[64px]">
          <div className="flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center gap-4 p-10 sm:p-[64px] bg-violet-800">
            <div className="flex flex-col md:w-1/2 w-full">
              <div className="flex flex-col grow items-start text-xl leading-relaxed text-white max-md:mt-10">
                <h3 className="text-[14px] leading-none opacity-80 !font-normal">Working hours</h3>
                <div className="shrink-0 self-stretch mt-4 h-px bg-white opacity-80 w-[200px] sm:w-[294px]" />
                <div className="space-y-2">
                  <h3 className="mt-6">Monday To Friday</h3>
                  <h3>9:00 AM to 8:00 PM </h3>
                  <p className="font-thin text-base leading-7  opacity-80">
                    Our Support Team is available 24/7
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:w-1/2 w-full">
              <div className="flex flex-col grow items-start text-xl leading-relaxed text-white max-md:mt-10">
                <h3 className="text-[14px] leading-none opacity-80 !font-normal">Contact Us</h3>
                <div className="shrink-0 self-stretch mt-4 h-px bg-white opacity-80 w-[200px] sm:w-[294px]" />
                <div className="space-y-2">
                  <h3 className="mt-6">020 7993 2905</h3>
                  <p className="font-thin text-base leading-7 opacity-80">
                    hello@bloginsigths.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] mt-[32px]">
            <input className="p-[24px] placeholder-secondary border border-secondary focus:outline-none text-[16px]" placeholder="Full Name" />
            <input className="p-[24px] placeholder-secondary border border-secondary focus:outline-none text-[16px]" placeholder="Email" />
            <textarea className="h-[144px] p-[24px] placeholder-secondary border border-secondary focus:outline-none text-[16px]" placeholder="Message" />
            <div className="p-[24px] w-full text-[24px] font-bold leading-none bg-amber-300 text-center text-secondary">
              Send Message
            </div>
          </div>
        </section>
      </Container>
  );
}
