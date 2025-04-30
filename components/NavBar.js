import Image from "next/image";
import React, { useState } from "react";

export default function NavBar() {
  // Color options for random hover effect (same as ArrowButton)
  const underlineColors = [
    "#FF9400", // Orange
    "#FF46CA", // Pink
    "#64D7FF", // Blue
    "#91FF5E"  // Green
  ];
  
  // Custom NavLink component with a cleaner animated underline effect
  const NavLink = ({ href, children }) => {
    const [underlineColor, setUnderlineColor] = useState("");
    
    const handleMouseEnter = () => {
      const randomIndex = Math.floor(Math.random() * underlineColors.length);
      setUnderlineColor(underlineColors[randomIndex]);
    };
    
    const handleMouseLeave = () => {
      // Keep the color, just hide the underline
    };
    
    return (
      <a 
        href={href} 
        className="text-white px-4 relative group inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="relative inline-block">
          {children}
          <span 
            className="absolute left-0 bottom-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100"
            style={{ 
              backgroundColor: underlineColor || underlineColors[0]
            }}
          />
        </span>
      </a>
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 px-8 py-8 md:px-16 flex justify-between items-center z-50">
      <div className="logo p-[5px]">
        <Image src="/image.png" alt="UCDevs logo" width={90} height={30} />
      </div>
      
      <div className="hidden md:flex items-center ml-7">
        <nav className="flex bg-[#191919] px-6 py-3 rounded-[15px]">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#learn">Learn</NavLink>
          <NavLink href="#origins">Origins</NavLink>
          <NavLink href="#partners">Partners</NavLink>
        </nav>
      </div>
      
      <a 
        href="https://discord.gg/XmXhmJ9Xx6"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-6 py-3 rounded-[15px] font-medium hover:bg-gray-200 transition-colors"
      >
        Get involved
      </a>
    </div>
  );
}
