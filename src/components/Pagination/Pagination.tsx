import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

export default function Pagination() {
    return (
        <div className="flex justify-center my-10">
            {/* Buttons */}
            <button className="flex items-center justify-center px-3 h-8 text-lg font-medium text-secondary">
                <ChevronLeft size={16}/>
                Prev
            </button>
            <button className="flex items-center justify-center px-3 h-8 text-xl  font-bold text-[#23253]">
                Next
                <ChevronRight fontWeight={600} size={20}/>
            </button>
        </div>

    )
}
