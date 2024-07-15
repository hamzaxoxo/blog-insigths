import React from 'react'
interface buttonProps {
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset' | undefined
}
export default function Button({ children, type = 'button', ...props }: buttonProps) {
    return (
        <button
            type={type}
            className="w-full items-center justify-center rounded-md border-2 border-primary bg-primary px-6 py-1 text-center font-medium text-white duration-200 hover:border-primary hover:bg-transparent hover:text-primary focus:outline-none focus-visible:outline-primary focus-visible:ring-primary lg:w-auto"
            {...props}
        >
            {children}
        </button>
    )
}
