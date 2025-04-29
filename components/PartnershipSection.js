import Image from "next/image";

export default function PartnershipSection() {
  return (
    <div className="relative w-full">
      {/* Aspect ratio container to maintain 1440x900 ratio */}
      <div className="relative w-full aspect-[16/10]"> {/* Close to 1440x900 aspect ratio */}
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/index_partnership.svg"
            alt="Partnership background"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        
        {/* Top gradient overlay - black to transparent */}
        <div className="absolute top-0 left-0 right-0 h-60 md:h-80 bg-gradient-to-b from-[#101010] to-transparent z-[1]"></div>
        
        {/* Bottom gradient overlay - transparent to black */}
        <div className="absolute bottom-0 left-0 right-0 h-60 md:h-80 bg-gradient-to-t from-[#101010] to-transparent z-[1]"></div>

        {/* Content container with left padding */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-8 md:px-16 relative z-10">
            <div className="max-w-xl">
              <h2 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Explore Partnerships
              </h2>
              <p className="text-white text-xl mb-8">
                UCDevs is always looking for new partners, whether you're a business 
                looking to sponsor us or a nonprofit in need of a new online presence.
              </p>
              <a 
                href="#partnerships"
                className="bg-white text-black px-6 py-3 rounded-full font-medium inline-flex items-center hover:bg-gray-200 transition-colors"
              >
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
