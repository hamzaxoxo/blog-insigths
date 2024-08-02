import * as React from "react";
import Container from "../Container";

export default function JoinTeam() {
    return (
        <Container className="py-20 flex flex-col items-center font-bold text-gray-800 max-w-[407px]">
            <div className="self-stretch w-full text-4xl tracking-tighter leading-10 text-center">
                Join our team to be a part of our story
            </div>
            <div className="mt-7 text-base leading-7 text-center text-zinc-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt.
            </div>
            <div className="gap-3 px-12 py-4 mt-9 text-lg leading-none bg-amber-300">
                Join Now
            </div>
        </Container>
    );
}