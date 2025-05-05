import ArrowButton from "../ArrowButton";

export default function DesktopErrorContent() {
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
        we couldn't find the page youre looking for
      </div>
      
      <ArrowButton href="/" text="return" className="text-3xl px-10 py-2" />
    </div>
  );
}
