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
        <div className="fixed bottom-10 right-10">
            {isVisible && (
                <button onClick={scrollToTop} className="rounded-full bg-amber-300 hover:bg-amber-400 h-14 w-14 flex justify-center items-center">
                    <ChevronUp color="#111827" size={23} />
                </button>
            )}
        </div>
    );
}

export default GoTop;
