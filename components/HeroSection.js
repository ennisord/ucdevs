import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center z-0">
        <Image 
          src="/Index.svg" 
          alt="UCDevs background" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101010] to-transparent z-10"></div>

      {/* Content */}
      <div className="absolute bottom-16 left-0 right-0 z-20 px-8 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-6">
        {/* Left side - Catch Phrase*/}
        <div className="md:max-w-[45%]">
          <div className="text-white text-7xl sm:text-8xl md:text-9xl font-bold leading-[0.95] tracking-tight">
            <div>Learn.</div>
            <div>Design.</div>
            <div>Develop.</div>
            <div>Release.</div>
          </div>
        </div>

        {/* Right side - description and buttons */}
        <div className="w-full md:w-1/2 lg:w-[55%] xl:w-3/5 md:pl-8">
          <p className="text-white text-xl md:text-2xl mb-8 max-w-3xl">
            UCDevs is the University of Calgary&apos;s society of web developers. 
            Learn design and development skills at no cost, then apply them to 
            real-world projects for nonprofits. No previous experience required.
          </p>
          {/* Button container */}
          <div className="flex space-x-3 sm:space-x-4">
            <a 
              href="#learn"
              className="bg-white text-black px-4 sm:px-8 py-3 rounded-full font-medium flex items-center hover:bg-gray-200 transition-colors text-sm sm:text-base"
            >
              Learn More
              <svg className="ml-1 sm:ml-2 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="https://discord.gg/XmXhmJ9Xx6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white border border-white px-4 sm:px-8 py-3 rounded-full font-medium flex items-center hover:bg-white hover:text-black transition-colors text-sm sm:text-base"
            >
              Join UCDevs
              <svg className="ml-1 sm:ml-2 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
