import * as React from "react";
import Container from "../Container";
import Image from "next/image";
import DiscoverPost from "../../../public/discover.png";
export default function DiscoverOurStory() {
    return (
        <Container className="font-bold text-gray-800 pb-20">
            <div className="relative h-screen w-full">
                <div>
                    <Image
                        alt="DiscoverPost"
                        loading="lazy"
                        src={DiscoverPost}
                        className="object-cover lg:w-[849px] lg:h-[607px] w-full h-full"
                    />
                </div>
                <div className="p-5 w-[calc(100%-2rem)] lg:w-[45rem] absolute top-1/2 lg:left-64 lg:-bottom-40 left-1/2 transform lg:translate-x-28 -translate-x-1/2 lg:-translate-y-1/2 -translate-y-1/2 flex flex-col gap-4 justify-center bg-white">
                    <div className="font-semibold leading-none text-gray-800 uppercase tracking-[3px]">
                        Why we started
                    </div>
                    <div className="lg:text-[60px] lg:leading-[64px] text-[28px] leading-7">
                        It started out as a simple idea and evolved into <span className="hidden lg:inline-block">&nbsp;</span> our passion
                    </div>
                    <div className="leading-7 text-zinc-500 md:w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip.
                    </div>
                    <div className="gap-3 self-start px-12 py-4 text-md leading-none bg-amber-300 md:px-5">
                        Discover our story &gt;
                    </div>
                </div>
            </div>



        </Container>
    );
}