import Image from "next/image";
import React from "react";

interface CoverProps {
    url?: string;
    setUrl?: (_: string) => void;
}

const CoverImage: React.FC<CoverProps> = ({ url, setUrl }) => {
    return (
        <div
            className={`relative w-full h-[35vh] bg-neutral-300 ${!url ? "hidden" : ""
                }`}
        >
            {!!url && (
                <>
                    <Image
                        src={url}
                        alt="Cover"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </>
            )}
        </div>
    );
};

export default CoverImage;