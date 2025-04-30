import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 px-8 py-8 md:px-16 flex justify-between items-center z-50">
      <div className="logo p-[5px]">
        <Image src="/image.png" alt="UCDevs logo" width={90} height={30} />
      </div>
      
      <div className="hidden md:flex items-center">
        <nav className="flex bg-[#191919] px-6 py-3 rounded-[15px]">
          <a href="#projects" className="text-white hover:text-gray-300 transition-colors px-4">Projects</a>
          <a href="#learn" className="text-white hover:text-gray-300 transition-colors px-4">Learn</a>
          <a href="#origins" className="text-white hover:text-gray-300 transition-colors px-4">Origins</a>
          <a href="#partners" className="text-white hover:text-gray-300 transition-colors px-4">Partners</a>
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
  );
}
