import Image from "next/image";
import Head from "next/head";
import { League_Spartan } from "next/font/google";

// Using League Spartan font
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "900"],
});

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#101010] ${leagueSpartan.className}`}>
      <Head>
        <title>UCDevs</title>
        <meta name="description" content="UCDevs - University of Calgary's society of web developers" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="UCDevs" />
        <meta property="og:description" content="Join UCDevs, an up-and-coming club at the University of Calgary focused on web development projects for nonprofits." />
        <meta property="og:image" content="/UCDevs.png" />
        <meta property="og:url" content="https://ucdevs.org" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Fixed Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 px-8 py-8 md:px-16 flex justify-between items-center z-50">
        <div className="logo">
          <Image src="/CornerLogo.png" alt="UCDevs logo" width={90} height={30} />
        </div>
        
        <div className="hidden md:flex items-center">
          <nav className="flex bg-[#191919] px-6 py-3 rounded-[15px]">
            <a href="/projects" className="text-white hover:text-gray-300 transition-colors px-4">Projects</a>
            <a href="/learn" className="text-white hover:text-gray-300 transition-colors px-4">Learn</a>
            <a href="/origins" className="text-white hover:text-gray-300 transition-colors px-4">Origins</a>
            <a href="/partners" className="text-white hover:text-gray-300 transition-colors px-4">Partners</a>
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

      {/* Main Content */}
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
        <div className="absolute bottom-4 left-0 right-0 z-20 px-8 md:px-16 flex flex-col md:flex-row justify-between md:items-end gap-12 md:gap-6">
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
          <div className="w-full md:w-1/2 lg:w-[55%] xl:w-3/5 md:pl-8 pb-7 flex flex-col justify-end">
            <div>
              <p className="text-white text-xl md:text-2xl max-w-3xl">
                UCDevs is the University of Calgary&apos;s society of web developers. 
                Learn design and development skills at no cost, then apply them to 
                real-world projects for nonprofits. No previous experience required.
              </p>
            </div>
            {/* Button container */}
            <div className="flex space-x-3 sm:space-x-4 mt-4 md:mt-6">
              <a 
                href="#learn"
                className="bg-white text-black px-4 sm:px-8 py-3 rounded-[15px] font-medium flex items-center hover:bg-gray-200 transition-colors text-sm sm:text-base"
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
                className="bg-white text-black px-4 sm:px-8 py-3 rounded-[15px] font-medium flex items-center hover:bg-gray-200 transition-colors text-sm sm:text-base"
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
    </div>
  );
}
