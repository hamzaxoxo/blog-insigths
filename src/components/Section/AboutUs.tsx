import * as React from "react";
import Container from "../Container";

export default function AboutUs() {
    return (
        <Container className="p-10 flex flex-col justify-end w-full">
            <div className="flex object-contain self-end lg:w-[1061px] w-full">
                <div className="h-[20px] bg-[#FFD050] w-2/3" />
                <div className="h-[20px] bg-[#592EA9] w-1/3" />
            </div>
            <div className="lg:px-10 p-5 w-full bg-[#F4F0F8] md0:px-5 md0:max-w-full">
                <div className="flex gap-5 lg:flex-row flex-col">
                    <div className="flex flex-col w-full">
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
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col mt-6 text-base text-gray-800 md0:mt-10 md0:max-w-full">
                            <div className="font-semibold uppercase tracking-[3px] md0:max-w-full">
                                Our mission
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
        </Container>
    );
}
