import React from 'react';

// Button Component
export function Button({ variant = "primary", children, className, ...props }) {
  const baseStyles = "px-6 py-2 rounded-md text-white font-semibold focus:outline-none transition-colors duration-300";
  
  // Variant styles
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    secondary: "bg-green-500 hover:bg-green-600",
  };

  const variantClass = variants[variant] || variants.primary;

  return (
    <button className={`${baseStyles} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
