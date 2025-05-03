import Image from "next/image";
import ArrowButton from "./ArrowButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  // Reference to the section container
  const containerRef = useRef(null);
  
  // Get scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Transform the Y position based on scroll progress
  // This creates the parallax effect - background moves slower than foreground
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  
  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#101010] overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative w-full h-screen">
        {/* Background image with parallax effect */}
        <motion.div 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ y: backgroundY }}
        >
          {/* This container is positioned to show the right side on mobile */}
          <div className="absolute inset-0 md:left-0 -left-[100%] w-[200%] md:w-full h-full">
            <Image 
              src="/hero.png" 
              alt="UCDevs background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] to-transparent z-10"></div>

        {/* Content */}
        <div className="absolute bottom-16 left-0 right-0 z-20 px-4 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-6">
          {/* Left side - Catch Phrase*/}
          <div className="md:max-w-[45%]">
            <div className="text-white mb-[-32px] sm:mb-[-24px] text-6xl sm:text-8xl md:text-8xl font-bold leading-[0.95]">
              <div>Learn.</div>
              <div>Design.</div>
              <div>Develop.</div>
              <div>Release.</div>
            </div>
          </div>

          {/* Right side - description and buttons */}
          <div className="w-full md:w-1/2 lg:w-[55%] xl:w-4/5 md:pl-8">
            <p className="text-white text-lg md:text-2xl mb-4 sm:mb-4 max-w-2xl leading-tight">
              UCDevs is the University of Calgary&apos;s society of web developers. 
              Learn design and development skills at no cost, then apply them to 
              real-world projects for nonprofits. No previous experience required.
            </p>
            {/* Updated button container to keep buttons side by side on all screens */}
            <div className="flex space-x-3 sm:space-x-4">
              <ArrowButton 
                href="#learn"
                text="Learn More"
                className="hidden md:flex"
              />
              <ArrowButton
                href="https://discord.gg/XmXhmJ9Xx6"
                text="Join UCDevs"
                external={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
