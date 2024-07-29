/* eslint-disable @next/next/no-img-element */
import React from "react";
export default function Author() {
  return (
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center px-11 py-10 w-full bg-zinc-100 leading-[143%] max-md:px-5 max-md:mt-8">
            <img
              loading="lazy"
              srcSet="..."
              className="w-32 max-w-full rounded-full aspect-square"
            />
            <div className="self-stretch mt-7 text-3xl font-bold tracking-tighter text-gray-800">
              Leslie Alexander
            </div>
            <div className="mt-4 text-sm text-center text-zinc-500">
              Content Writer @Company
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b72f63db24c3c784fd49b0a479184191f8995d0cf444b98cac25ebd9b8f23af1?"
              className="mt-6 w-28 max-w-full aspect-[6.67]"
            />
          </div>
        </div>
  );
}
