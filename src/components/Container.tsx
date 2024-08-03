import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={`max-w-[1268px] mx-auto ${className || ''}`}>
            {children}
        </div>
    );
};

export default Container;
