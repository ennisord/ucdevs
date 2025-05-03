import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function NavBar() {
  // Navigation links data
  const navLinks = [
    { href: "#projects", label: "Projects", about: "View our project portfolio." },
    { href: "#learn", label: "Learn", about: "Educational resources and guides." },
    { href: "#origins", label: "Origins", about: "Our history, executive team, and founding story." },
    { href: "#partners", label: "Partners", about: "Meet the collaborators, sponsors, and nonprofit partners we work with." }
  ];

  // Social media links
  const socialLinks = [
    { href: "https://twitter.com", label: "Twitter" },
    { href: "https://youtube.com", label: "YouTube" },
    { href: "https://discord.com", label: "Discord" }
  ];

  // State to track if mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
            className="absolute left-0 bottom-[1px] w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 bg-white"
          />
        </span>
      </a>
    );
  };

  // Determine container classes based on menu state
  const containerClasses = 
    menuOpen 
      ? 'bottom-0 px-0 py-0' 
      : 'px-4 sm:px-8 py-4 sm:py-8 md:px-16';
      
  // Determine navbar classes based on menu state
  const navbarClasses = 
    menuOpen 
      ? 'w-full h-full rounded-none border-0 pb-16 py-4 px-4'
      : 'px-4 sm:px-6 py-3 rounded-[0px] w-full sm:w-auto';
      
  // Determine menu content classes based on menu state
  const menuContentClasses = 
    menuOpen
      ? 'opacity-100 mt-4 px-4 sm:px-6'
      : 'max-h-0 opacity-0 mt-0';

  return (
    <div className={`fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-50 ${containerClasses}`}>
      {/* Mobile and desktop navbar */}
      <div className={`w-full h-full flex ${menuOpen ? 'items-start' : 'justify-center items-center'}`}>
        <div 
          className={`relative flex flex-col bg-[#191919] bg-opacity-80 backdrop-blur-md border border-white/10 transition-all duration-300 ease-in-out ${navbarClasses}`}
          style={menuOpen ? {
            background: 'linear-gradient(to top, #2176ff 0%, rgba(25, 25, 25, 0.9) 40%, rgba(25, 25, 25, 0.9) 100%)'
          } : {}}
        >
          {/* Header row with logo and menu button */}
          <div className={`flex justify-between items-center w-full ${menuOpen ? 'px-4 sm:px-6 py-3' : ''}`}>
            <div className="logo p-[5px] mt-[-1px]">
              <Image src="/image.png" alt="UCDevs logo" width={51} height={17} />
            </div>
            
            {/* Navigation links - hidden on mobile */}
            <nav className="hidden md:flex items-center ml-4 border-l border-white/10 pl-2">
              {navLinks.map((link, index) => (
                <NavLink key={index} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile menu button with flip animation - fixed width to accommodate both texts */}
            <button 
              onClick={toggleMenu} 
              className="text-white md:hidden ml-auto relative h-6 w-16 overflow-hidden text-right"
            >
              <span className={`inline-block w-full transition-transform duration-300 ${menuOpen ? 'transform -translate-y-full opacity-0' : ''}`}>
                MENU
              </span>
              <span className={`absolute inset-0 w-full transition-transform duration-300 ${menuOpen ? 'transform translate-y-0' : 'transform translate-y-full opacity-0'}`}>
                CLOSE
              </span>
            </button>
          </div>

          {/* Mobile menu - always in DOM but height/opacity animated */}
          <div 
            className={`w-full flex-grow overflow-hidden transition-all duration-300 ease-in-out md:hidden ${menuContentClasses}`}
          >
            <ul className="flex flex-col pt-2">
              {navLinks.map((link, index) => (
                <li 
                  key={index} 
                  className={`transform transition-all duration-300 ease-in-out ${
                    menuOpen
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: menuOpen ? `${(index * 75) + 100}ms` : '0ms'
                  }}
                >
                  <a 
                    href={link.href} 
                    className="block py-5 px-2 text-4xl text-white hover:bg-white/10 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                    {link.about && (
                      <span className="block mt-1 text-sm text-gray-400 font-light">
                        {link.about}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social media links row */}
            <div className={`flex px-2 space-x-8 mt-12 transition-all duration-300 ease-in-out ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: menuOpen ? '500ms' : '0ms' }}>
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-white text-xl hover:text-white/80 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
