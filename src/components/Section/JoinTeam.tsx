import * as React from "react";
import Container from "../Container";
import Button from "../Buttons/Button";

export default function JoinTeam() {
    return (
        <Container className="pb-20 px-5 flex flex-col gap-5 items-center  max-w-[490px]">
            <div className="self-stretch w-full text-4xl tracking-tighter leading-10 text-center font-bold text-gray-800">
                Join our team to be a part of our story
            </div>
            <div className="text-base font-normal leading-7 text-center text-zinc-500">
                We are always looking for passionate individuals who are ready to make a difference in the world. If you are a content writer, designer, or developer, we would love to hear from you!
            </div>
            <Button variant="secondary" className="!px-[48px]">
                Join Me
            </Button>
        </Container>
    );
}