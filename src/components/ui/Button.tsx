/**
 * Guardian Angel - Button Component
 * 
 * Reusable button component with multiple variants and sizes
 * Updated to match the design guidelines with new colors and styling
 * Updated class styles to support lowercase text
 */

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
}) => {
  const baseStyles = 'font-medium rounded-lg inline-flex items-center justify-center transition-all duration-300 transform hover:scale-102';
  
  const variantStyles = {
    primary: 'bg-accent-500 hover:bg-accent-400 text-white hover:shadow-glow',
    secondary: 'bg-primary-800 text-white hover:bg-primary-700',
    outline: 'bg-transparent border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white',
    text: 'bg-transparent text-primary-800 hover:text-primary-700 hover:underline',
  };
  
  const sizeStyles = {
    small: 'text-sm py-2 px-4',
    medium: 'text-base py-3 px-6',
    large: 'text-lg py-4 px-8 font-semibold',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;