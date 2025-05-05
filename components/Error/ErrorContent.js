import ArrowButton from "../ArrowButton";

export function DesktopErrorContent() {
  return (
    <div className="relative h-[calc(100vh-150px)] flex flex-col items-center justify-center z-20 px-4 mt-24">
      {/* Large pixelated 404 */}
      <div className="text-[20rem] leading-none font-bold mb-0 text-white">
        404
      </div>
      
      {/* Horizontal line under 404 */}
      <div className="w-1/2 border-b-2 border-white mb-8 mt-2"></div>
      
      {/* page. not. found. text */}
      <div className="text-7xl font-bold mb-4 text-white">
        page. not. found.
      </div>
      
      {/* Description */}
      <div className="text-4xl mb-12 text-white">
        we couldn&apos;t find the page you&apos;re looking for
      </div>
      
      <ArrowButton href="/" text="return" className="text-3xl px-10 py-2" />
    </div>
  );
}

export default function MobileErrorContent() {
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col justify-center z-20 relative pl-4 mt-20">
      <div className="flex flex-row">
        {/* 404 on the left */}
        <div className="pr-8 flex flex-col items-end ml-4">
          <div className="text-[12rem] leading-[0.85] font-bold text-white">4</div>
          <div className="text-[12rem] leading-[0.85] font-bold text-white">0</div>
          <div className="text-[12rem] leading-[0.85] font-bold text-white">4</div>
        </div>
        
        {/* Vertical line in the middle */}
        <div className="border-l-2 border-white h-full"></div>
        
        {/* Content on the right */}
        <div className="pl-8">
          <div className="text-white text-6xl font-bold mt-3 mb-1">page.</div>
          <div className="text-white text-6xl font-bold mb-1">not.</div>
          <div className="text-white text-6xl font-bold mb-3">found.</div>
          
          <div className="text-white text-2xl mb-8 pr-6">
            we couldn&apos;t find the page you&apos;re looking for
          </div>
          
          <ArrowButton href="/" text="return" className="inline-block" />
        </div>
      </div>
    </div>
  );
}
