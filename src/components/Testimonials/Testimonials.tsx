import React from 'react'

export default function Testimonials() {
  return (
    <div className="flex justify-center items-center py-20 pl-16 bg-orange-50 max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-w-[1057px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-start mt-4 text-base text-gray-800">
          <div className="font-semibold uppercase tracking-[3px]">
            TESTIMONIALs
          </div>
          <div className="mt-7 text-4xl font-bold tracking-tighter leading-10">
            What people say about our blog
          </div>
          <div className="mt-7 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </div>
        </div>
        <div className="shrink-0 w-px border border-solid bg-zinc-500 border-zinc-500 h-[310px] max-sm:hidden" />
        <div className="flex flex-col my-auto -mr-0.5 max-md:max-w-full">
          <div className="text-2xl font-bold leading-8 text-gray-800 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="flex gap-5 justify-between mt-28 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-4 items-start self-start mt-2">
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 w-12 rounded-full aspect-square"
              />
              <div className="flex flex-col mt-2">
                <div className="text-2xl font-bold leading-8 text-gray-800">
                  Jonathan Vallem
                </div>
                <div className="mt-2.5 text-base leading-7 text-zinc-500">
                  New york, USA
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f5ae0b05f88175949425804e6e1196fc776b109748d2aa18fea9d1861879d4?"
                className="shrink-0 my-auto w-12 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b676eb085c0c013528d5ff088726665c65f255584b47cb51e5c4e4b02268d0?"
                className="shrink-0 aspect-square w-[62px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
