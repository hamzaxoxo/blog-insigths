import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import Avatar from '../../../public/user.png';
import Container from "../Container";
export default function Testimonials() {
    return (
        <Container>
            <div className="bg-orange-50 md:px-40 md:py-20 p-10 flex md:flex-row sm:flex-col flex-col gap-5 justify-between w-full mx-auto">
                <div className="flex flex-col items-start self-start mt-3 text-base text-gray-800">
                    <div className="font-semibold leading-none uppercase tracking-[3px]">
                        TESTIMONIALs
                    </div>
                    <div className="mt-6 text-4xl font-bold tracking-tighter leading-10">
                        What people say about our blog
                    </div>
                    <div className="self-stretch mt-7 leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor.
                    </div>
                </div>

                <div className="hidden md:block shrink-0 w-px bg-zinc-500 h-[310px]" />

                <div className="flex flex-col mt-1.5 max-md:max-w-full">
                    <div className="self-start text-2xl font-bold leading-8 text-gray-800 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="flex flex-wrap gap-5 justify-between items-start mt-28 w-full max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-4 mt-2">
                            <Image
                                alt="Jonathan Vallem"
                                loading="lazy"
                                src={Avatar}
                                className="object-contain shrink-0 self-start w-12 rounded-full aspect-square"
                            />
                            <div className="flex flex-col">
                                <div className="text-2xl font-bold leading-none text-gray-800">
                                    Jonathan Vallem
                                </div>
                                <div className="self-start text-base leading-7 text-zinc-500">
                                    New york, USA
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex items-center space-x-3">
                            <div className="flex flex-col justify-center items-center h-10 w-10 bg-[#fff] rounded-full">
                                <MoveLeft color="#232536" size={20} />
                            </div>
                            <div className="flex flex-col justify-center items-center h-16 w-16 bg-[#232536] rounded-full">
                                <MoveRight color="#FFF7ED" size={26} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </Container>
    );
}