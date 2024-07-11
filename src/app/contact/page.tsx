import Banner from "@/components/Section/Banner";
import Image from "next/image";
import React from "react";
import contact from '../../../public/contact.svg'
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bloginsights.com/contact"),  // Update with your base URL
  title: "Contact Us",
  description: "Contact Blog Insights for inquiries, feedback, or support. Reach out to us to learn more about our services and solutions.",
  keywords: [
    "Contact Us",
    "get in touch with Blog Insights, support, customer service, feedback, inquiries",
    "business communication, reach out",
  ]
}

export default function page() {

  return (
    <>
      <Banner title="Contact Us" />
      <div className="max-w-6xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 rounded-lg">
        <div className="flex flex-col justify-between items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
            <div className="text-gray-700 my-3">
              Hate forms? Send us an <span className="underline">email</span> instead.
            </div>
          </div>
          <Image src={contact} alt="Contact" width={400} />
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input className="form-inputs"
              type="text" placeholder="" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input className="form-inputs"
              type="text" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              className="form-inputs min-h-32"></textarea>
          </div>
          <div className="mt-8">
            <button className="uppercase text-sm font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
