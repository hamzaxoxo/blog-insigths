import { Instagram } from 'lucide-react';
import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';

const Author = () => {
    return (
        <div className="sm:m-0 my-20 w-full flex items-center justify-center px-4">
            {/* Author card */}
            <div className="border-2 border-primary relative w-full max-w-2xl my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 shadow-lg rounded-lg">
                <span className="bg-gray-400 absolute text-xs font-medium top-1 left-1 rounded-br-lg rounded-tl-lg px-2 py-1 border-gray-400">
                    Author
                </span>
                <div className="w-full flex justify-center sm:justify-start sm:w-auto">
                    <img
                        className="object-cover w-20 h-20 mt-3 mr-3 rounded-full"
                        src="https://lh3.googleusercontent.com/a/AEdFTp70cvwI5eevfcr4LonOEX5gB2rzx7JnudOcnYbS1qU=s96-c"
                    />
                </div>
                <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
                    <p
                        className="font-display mb-2 text-2xl font-semibold"
                        itemProp="author"
                    >
                        Prajwal Hallale
                    </p>
                    <div className="mb-4 md:text-lg text-gray-400">
                        <p>
                            Prajwal is a versatile content writer with a strong background in web
                            development.
                        </p>
                    </div>
                    <div className="flex gap-4 items-center justify-center">
                        <a href="#" className="hover:text-blue-700 transition duration-300">
                            <BsInstagram size={20} />
                        </a>
                        <a href="#" className="hover:text-blue-600 transition duration-300">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="hover:text-pink-600 transition duration-300">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Author;
