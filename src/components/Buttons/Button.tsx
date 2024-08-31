import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  type = 'button',
  children,
  ...rest
}) => {

  const variantStyles = {
    primary: 'px-12 py-3 h-[46px] text-lg font-bold leading-6 text-gray-800 whitespace-nowrap bg-white md:px-5',
    secondary: 'px-12 py-3 h-[46px] w-fit text-[18px] font-bold leading-6 text-gray-800 whitespace-nowrap bg-amber-300 md:px-5',
  };

  const combinedClassName = `${variantStyles[variant]} ${className}`;

  return (
    <button type={type} className={combinedClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
