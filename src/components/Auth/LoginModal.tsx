'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import googleIcon from '../../../public/icons/google.svg';
import appleIcon from '../../../public/icons/apple.svg';
import microsoftIcon from '../../../public/icons/microsoft.svg';
import twitterIcon from '../../../public/icons/twitter.svg';
import facebookIcon from '../../../public/icons/facebook.svg';
import dribbbleIcon from '../../../public/icons/dribbble.svg';
import spotifyIcon from '../../../public/icons/spotify.svg';


import { login } from '@/actions/auth';

interface LoginModalProps {
    open: boolean
    onCloseModal: () => void
}
export default function LoginModal({
    open,
    onCloseModal
}: LoginModalProps) {

    const socialButtons = [
        {
            name: "Google",
            provider: "google",
            icon: googleIcon
        },
        {
            name: "Spotify",
            provider: "spotify",
            icon: spotifyIcon
        },
        {
            name: "Facebook",
            provider: "facebook",
            icon: facebookIcon
        },
        {
            name: "Microsoft",
            provider: "microsoft",
            icon: microsoftIcon
        },
        {
            name: "Twitter",
            provider: "twitter",
            icon: twitterIcon
        },
        {
            name: "Dribble",
            provider: "dribbble",
            icon: dribbbleIcon
        },
    ];

    return (
        <Dialog open={open} onClose={onCloseModal} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="sm:w-96 mx-auto py-10 sm:px-0 px-5">
                            <h2 className='mb-10'>Welcome back.</h2>
                            <div className="space-y-4">
                                {
                                    socialButtons.map((button, index) => (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                login('spotify')
                                            }}
                                            className="cursor-pointer flex gap-2 w-full items-center justify-between rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                        >
                                            <Image src={button.icon} alt={button.name} width={20} height={20} />
                                            <span>Signin with {button.name}</span>
                                            <span></span>
                                        </div>
                                    ))
                                }
                            </div>
                            <p className='text-center text-sm mt-10'>
                                By continuing, you agree to our{' '}
                                <a href="#" className="text-blue-600">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-blue-600">
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
