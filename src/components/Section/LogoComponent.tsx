import * as React from "react";
import Container from "../Container";
import Image from "next/image";
import logo1 from "../../../public/logos/1.png";
import logo2 from "../../../public/logos/2.png";
import logo3 from "../../../public/logos/3.png";
import logo4 from "../../../public/logos/4.png";
import logo5 from "../../../public/logos/5.png";


const logos = [logo1, logo2, logo3, logo4, logo5];
export default function LogoComponent() {
    return (
        <Container className="flex items-center justify-center flex-col gap-5 text-zinc-500 p-10">
            <div className="flex flex-col">
                <div className="self-start text-sm leading-none">We are</div>
                <div className="mt-1.5 text-2xl font-bold leading-none">
                    Featured in
                </div>
            </div>
            <div className="opacity-70 flex flex-wrap items-center justify-center gap-4">
                {
                    logos.map((logo, index) => (
                        <Image key={index} src={logo} alt="logo" className="opacity-80" />
                    ))
                }
            </div>

        </Container>
    );
}