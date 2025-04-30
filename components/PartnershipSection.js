import Image from "next/image";
import ArrowButton from "./ArrowButton";

export default function PartnershipSection() {
  return (
    <div className="relative w-full">
      {/* Container - half height on mobile, aspect ratio on desktop */}
      <div className="relative w-full h-[75vh] md:h-auto md:aspect-[16/10]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/index_partnership.svg"
            alt="Partnership background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        {/* Top gradient overlay - black to transparent */}
        <div className="absolute top-0 left-0 right-0 h-40 md:h-60 bg-gradient-to-b from-[#101010] to-transparent z-[1]"></div>
        
        {/* Bottom gradient overlay - transparent to black */}
        <div className="absolute bottom-0 left-0 right-0 h-40 md:h-60 bg-gradient-to-t from-[#101010] to-transparent z-[1]"></div>

        {/* Content container with left padding */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-8 md:px-16 relative z-10">
            <div className="max-w-xl">
              <h2 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-none">
                Explore Partnerships
              </h2>
              <p className="text-white text-xl mb-8">
                UCDevs is always looking for new partners, whether you&apos;re a business 
                looking to sponsor us or a nonprofit in need of a new online presence.
              </p>
              <ArrowButton 
                href="#partnerships"
                text="Learn More"
                className="w-44 justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
