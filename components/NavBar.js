import Image from "next/image";
import React from "react";

export default function NavBar() {
  // Custom NavLink component with a white animated underline effect
  const NavLink = ({ href, children }) => {
    return (
      <a 
        href={href} 
        className="text-white px-4 relative group inline-block"
      >
        <span className="relative inline-block">
          {children}
          <span 
            className="absolute left-0 bottom-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 bg-white"
          />
        </span>
      </a>
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 px-8 py-8 md:px-16 flex justify-center items-center z-50">
      
      <div className="hidden md:flex items-center ml-[0%]">
        <nav className="flex bg-[#191919] bg-opacity-80  px-6 py-3 rounded-[0px] border border-white/10 backdrop-blur-md">
        <div className="logo p-[5px] mt-[-1px] mr-2 pr-5 border-r border-white/10">
        <Image src="/image.png" alt="UCDevs logo" width={51} height={17} />
      </div>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#learn">Learn</NavLink>
          <NavLink href="#origins">Origins</NavLink>
          <NavLink href="#partners">Partners</NavLink>
        </nav>
      </div>
      
    </div>
  );
}
