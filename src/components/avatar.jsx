import React from 'react';

export function Avatar({ children, className }) {
  return (
    <div className={`relative w-12 h-12 rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt = "avatar" }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}

export function AvatarFallback({ children }) {
  return (
    <div className="flex justify-center items-center w-full h-full bg-gray-300 text-white font-semibold">
      {children}
    </div>
  );
}
