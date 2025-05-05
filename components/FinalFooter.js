import Image from "next/image";
import { League_Spartan } from "next/font/google";

// Import League Spartan font with bold weight
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["700"], // 700 is bold
});

export default function FinalFooter() {
  return (
    <div className="w-full bg-[#101010] relative pt-2 pb-0">
      {/* Copyright text - positioned closer to top */}
      <div 
        className={`absolute top-2 left-4 md:top-4 md:right-8 text-[rgba(234,234,234,0.2)] text-3xl ${leagueSpartan.className}`}
      >
        © UCDevs 2025
      </div>
      
      {/* Fixed centering with responsive padding */}
      <div className="w-full px-[3%] sm:px-[5%]">
        {/* Logo container with improved centering */}
        <div className="mx-auto max-w-6xl w-full h-[200px] md:h-[250px] lg:h-[350px] relative z-20">
          <Image
            src="/UCDevs.svg" 
            alt="UCDevs"
            fill
            style={{
              objectFit: 'contain',
              objectPosition: 'center bottom',
              // Removed the additional margin that was affecting centering
            }}
            sizes="(max-width: 768px) 94vw, (max-width: 1200px) 90vw, 1100px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
