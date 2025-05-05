import Image from "next/image";

export default function ErrorBackground() {
  return (
    <>
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 md:left-0 -left-[100%] w-[200%] md:w-full h-full">
          <Image 
            src="/303030header.png" 
            alt="UCDevs background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-[#101010] opacity-100 z-10"></div>
    </>
  );
}
