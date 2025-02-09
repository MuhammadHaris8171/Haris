import React from 'react';

export function Card({ children, className }) {
  return (
    <div className={`p-4 rounded-xl shadow-md ${className}`}>
      {children}
    </div>
  );
}

// Card subcomponents

export function CardHeader({ children }) {
  return <div className="border-b-2 pb-2 mb-4">{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="mt-4">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-2xl font-semibold text-gray-800">{children}</h2>;
}

export function CardDescription({ children }) {
  return <p className="text-lg text-gray-600">{children}</p>;
}
