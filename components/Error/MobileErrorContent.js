import ArrowButton from "../ArrowButton";

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
