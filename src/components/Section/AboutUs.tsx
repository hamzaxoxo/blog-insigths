import * as React from "react";
import Container from "../Container";

export default function AboutUs() {
    return (
        <Container className="pb-20 flex flex-col justify-end w-full">
            <div className="flex object-contain self-end lg:w-[1061px] w-full">
                <div className="h-[20px] bg-[#FFD050] w-2/3" />
                <div className="h-[20px] bg-[#592EA9] w-1/3" />
            </div>
            <div className="lg:px-20 px-5 py-10 w-full bg-[#F4F0F8] md0:px-5 md0:max-w-full">
                <div className="flex gap-20 lg:flex-row flex-col">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col items-start my-auto text-base text-gray-800 md0:mt-10 md0:max-w-full">
                            <div className="font-semibold uppercase tracking-[3px] md0:max-w-full">
                                ABOUT US
                            </div>
                            <div className="mt-9 text-[36px] leading-10 md0:max-w-full font-bold">
                                We are a community of content writers who share their learnings
                            </div>
                            <div className="mt-7 leading-7 text-zinc-500 md0:max-w-full text-[16px]">
                                We are a community of content writers who share insights, grow together, and elevate each other&#39;s creative journeys.
                            </div>
                            <div className="mt-8 text-lg leading-8 text-violet-800 md0:max-w-full font-bold">
                                Read More &gt;
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col items-start text-base text-gray-800 md0:mt-10 md0:max-w-full">
                            <div className="font-semibold uppercase tracking-[3px] md0:max-w-full">
                                Our mission
                            </div>
                            <div className="mt-9 text-3xl font-bold tracking-tighter leading-10 md0:max-w-full">
                                Creating valuable content for creatives all around the world
                            </div>
                            <div className="mt-4 leading-7 text-zinc-500 md0:max-w-full text-[16px]">
                                We believe that everyone has a story to tell, and we are here to help you share yours. Our mission is to create valuable content that inspires, educates, and entertains creatives all around the world.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
