import React, { useState } from "react";

/**
 * ArrowButton Component
 * 
 * A reusable button with an arrow icon that can be used throughout the application.
 * Features a random hover color effect from a predefined set of colors.
 * 
 * @param {Object} props
 * @param {string} props.href - URL for the button link
 * @param {string} props.text - Button text
 * @param {boolean} props.external - Whether the link should open in a new tab
 * @param {string} props.className - Additional CSS classes to apply
 */
export default function ArrowButton({ href, text, external = false, className = "" }) {
  // Color options for random hover effect
  const hoverColors = [
    "#FF9400", // Orange
    "#FF46CA", // Pink
    "#64D7FF", // Blue
    "#91FF5E"  // Green
  ];
  
  // State to track the current hover color
  const [hoverColor, setHoverColor] = useState("");
  
  // External link attributes
  const externalProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  // Function to select a random color on hover
  const handleMouseEnter = () => {
    const randomIndex = Math.floor(Math.random() * hoverColors.length);
    setHoverColor(hoverColors[randomIndex]);
  };

  // Clear hover color when mouse leaves
  const handleMouseLeave = () => {
    setHoverColor("");
  };

  return (
    <a
      href={href}
      className={`bg-white text-black px-4 sm:px-8 py-3 rounded-[15px] font-medium flex items-center transition-colors duration-200 text-sm sm:text-base ${className}`}
      style={{ 
        backgroundColor: hoverColor || "white",
        color: "black"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...externalProps}
    >
      {text}
      <svg className="ml-1 sm:ml-2 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  );
} 