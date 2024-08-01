import * as React from "react";

export function AboutUs() {
    return (
        <div className="flex flex-col">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/627d2a9060a58e57743fd2ca77d9e603d46471484aa98c2d2cef6c1a7913d319?apiKey=0262c9a8fe64483788a22fad731b4e53&&apiKey=0262c9a8fe64483788a22fad731b4e53"
                className="self-center ml-28 aspect-[50] max-w-[1061px] w-[1061px] md0:max-w-full"
            />
            <div className="p-20 w-full bg-gray-100 md0:px-5 md0:max-w-full">
                <div className="flex gap-5 md0:flex-col">
                    <div className="flex flex-col w-6/12 md0:ml-0 md0:w-full">
                        <div className="flex flex-col self-stretch my-auto text-base font-bold text-gray-800 md0:mt-10 md0:max-w-full">
                            <div className="font-semibold uppercase tracking-[3px] md0:max-w-full">
                                ABOUT US
                            </div>
                            <div className="mt-9 text-4xl tracking-tighter leading-10 md0:max-w-full">
                                We are a community of content writers who share their learnings
                            </div>
                            <div className="mt-7 leading-7 text-zinc-500 md0:max-w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div className="mt-8 text-lg leading-8 text-violet-800 md0:max-w-full">
                                Read More &gt;
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 md0:ml-0 md0:w-full">
                        <div className="flex flex-col mt-6 text-base text-gray-800 md0:mt-10 md0:max-w-full">
                            <div className="font-semibold uppercase tracking-[3px] md0:max-w-full">
                                Our mision
                            </div>
                            <div className="mt-9 text-3xl font-bold tracking-tighter leading-10 md0:max-w-full">
                                Creating valuable content for creatives all around the world
                            </div>
                            <div className="mt-9 leading-7 text-zinc-500 md0:max-w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}