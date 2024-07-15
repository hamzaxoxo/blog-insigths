'use client'

import React from 'react';
import { ChevronUp } from "lucide-react";
import { animateScroll as scroll } from 'react-scroll';

const GoTop = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const toggleVisibility = () => {
        if (window.scrollY > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-20 right-20">
            {isVisible && (
                <button onClick={scrollToTop} className="border-2 border-gray-50 rounded-full bg-primary h-14 w-14 flex justify-center items-center">
                    <ChevronUp color="white" size={23} />
                </button>
            )}
        </div>
    );
}

export default GoTop;
