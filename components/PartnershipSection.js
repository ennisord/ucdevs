import Image from "next/image";
import ArrowButton from "./ArrowButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function PartnershipSection() {
  // Reference to the section container
  const sectionRef = useRef(null);
  // State to store the initial offset position
  const [initialOffset, setInitialOffset] = useState(0);
  
  // Effect to calculate the section's position on the page
  useEffect(() => {
    if (sectionRef.current) {
      const calculateOffset = () => {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offsetTop = rect.top + scrollTop;
        // Get position as percentage of total page height
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const positionPercentage = offsetTop / pageHeight;
        setInitialOffset(positionPercentage * -20); // Adjust offset factor as needed
      };
      
      calculateOffset();
      // Recalculate on resize
      window.addEventListener('resize', calculateOffset);
      return () => window.removeEventListener('resize', calculateOffset);
    }
  }, []);
  
  // Get scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Transform the Y position based on scroll progress with position offset
  const backgroundY = useTransform(
    scrollYProgress, 
    [0, 1], 
    [`${initialOffset}%`, `${initialOffset + 40}%`]
  );
  
  return (
    <div 
      ref={sectionRef}
      className="relative w-full overflow-hidden"
    >
      {/* Container - half height on mobile, aspect ratio on desktop */}
      <div className="relative w-full h-[100vh] md:h-auto md:aspect-[16/10]">
        {/* Background image with parallax effect */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <Image
            src="/mackimmie.png"
            alt="Partnership background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>
        
        {/* Top gradient overlay - black to transparent */}
        <div className="absolute top-0 left-0 right-0 h-40 md:h-60 bg-gradient-to-b from-[#101010] to-transparent z-[1]"></div>
        
        {/* Bottom gradient overlay - transparent to black */}
        <div className="absolute bottom-0 left-0 right-0 h-40 md:h-60 bg-gradient-to-t from-[#101010] to-transparent z-[1]"></div>

        {/* Content container with left padding */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-16 relative z-10">
            <div className="max-w-xl">
              <h2 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-1 leading-none">
                Explore Partnerships
              </h2>
              <p className="text-white text-sm md:text-xl mb-4 sm:mb-4 max-w-2xl">
                UCDevs is always looking for new partners, whether you&apos;re a business 
                looking to sponsor us or a nonprofit in need of a new online presence.
              </p>
              <div className="flex">
              <ArrowButton 
                href="#partnerships"
                text="Learn More"
                className="w-auto justify-center"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
