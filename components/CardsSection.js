import Image from "next/image";

export default function CardsSection() {
  return (
    <div className="bg-[#101010] py-16 px-8 md:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Projects Card */}
          <div className="border border-gray-700 rounded-lg p-6 flex flex-col h-full">
            <div className="flex justify-center mb-6">
              <div className="relative w-full max-w-[379px] h-[516px]">
                <Image
                  src="/index_project.svg"
                  alt="Projects illustration"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                />
              </div>
            </div>
            <h2 className="text-white text-2xl lg:text-3xl font-bold mb-3">Projects</h2>
            <p className="text-gray-300 mb-6 flex-grow">
              UCDevs takes on projects for nonprofits to help our members build experience in web development.
            </p>
            <a 
              href="#projects"
              className="bg-white text-black px-4 py-3 rounded-full font-medium flex items-center hover:bg-gray-200 transition-colors self-start text-sm sm:text-base"
            >
              Learn More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Workshops Card */}
          <div className="border border-gray-700 rounded-lg p-6 flex flex-col h-full">
            <div className="flex justify-center mb-6">
              <div className="relative w-full max-w-[379px] h-[516px]">
                <Image
                  src="/index_workshop.png"
                  alt="Workshops illustration"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                />
              </div>
            </div>
            <h2 className="text-white text-2xl lg:text-3xl font-bold mb-3">Workshops</h2>
            <p className="text-gray-300 mb-6 flex-grow">
              UCDevs holds workshops and lectures to get you up to speed with web development. No experience required.
            </p>
            <a 
              href="#workshops"
              className="bg-white text-black px-4 py-3 rounded-full font-medium flex items-center hover:bg-gray-200 transition-colors self-start text-sm sm:text-base"
            >
              Learn More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Team Card */}
          <div className="border border-gray-700 rounded-lg p-6 flex flex-col h-full md:col-span-2 lg:col-span-1">
            <div className="flex justify-center mb-6">
              <div className="relative w-full max-w-[379px] h-[516px]">
                <Image
                  src="/index_team.png"
                  alt="Team illustration"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                />
              </div>
            </div>
            <h2 className="text-white text-2xl lg:text-3xl font-bold mb-3">Team</h2>
            <p className="text-gray-300 mb-6 flex-grow">
              We&apos;re a team of polished web developers, designers, and engineers with the agency to spearhead substantial projects.
            </p>
            <a 
              href="#team"
              className="bg-white text-black px-4 py-3 rounded-full font-medium flex items-center hover:bg-gray-200 transition-colors self-start text-sm sm:text-base"
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
  );
}
