import Image from "next/image";
import * as React from "react";
import featured from '../../../public/featured.png'
export default function Featured() {
    return (
        <div className="flex flex-col">
            <div className="p-5 lg:p-20 w-full bg-[#F4F0F8]">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col items-start self-stretch my-auto w-full font-medium text-gray-800 max-md:mt-10 ">
                            <div className="text-base leading-none uppercase tracking-[3px]">
                                Featured Post
                            </div>
                            <h1 className="self-stretch mt-7 text-4xl font-bold tracking-tighter leading-10 ">
                                Step-by-step guide to choosing great font pairs
                            </h1>
                            <div className="mt-5 text-sm leading-none text-violet-800">
                                By <span className="text-violet-800">John Doe</span> l May 23,
                                2022{" "}
                            </div>
                            <div className="self-stretch mt-6 text-base leading-7 text-zinc-500 ">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident.
                            </div>
                            <div className="gap-3 px-12 py-4 mt-9 text-lg font-bold leading-none bg-amber-300 max-md:px-5">
                                Read More &gt;
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                        <Image
                            alt="featured"
                            loading="lazy"
                            src={featured}
                            className="object-contain grow w-full aspect-[1.43] max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}