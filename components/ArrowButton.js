import React from "react";

/**
 * ArrowButton Component
 * 
 * A reusable button with an arrow icon that can be used throughout the application.
 * Features a horizontal slide animation to grey on hover.
 * 
 * @param {Object} props
 * @param {string} props.href - URL for the button link
 * @param {string} props.text - Button text
 * @param {boolean} props.external - Whether the link should open in a new tab
 * @param {string} props.className - Additional CSS classes to apply
 */
export default function ArrowButton({ href, text, external = false, className = "" }) {
  // External link attributes
  const externalProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <a
      href={href}
      className={`relative bg-white text-black px-4 sm:px-6 py-[10px] rounded-[0px] font-medium flex items-center text-sm sm:text-lg group ${className}`}
      {...externalProps}
    >
      <span className="absolute left-0 top-0 w-full h-full bg-gray-300 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
      <span className="flex items-center relative z-10">
        {text}
        <svg className="ml-1 sm:ml-2 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </a>
  );
} 