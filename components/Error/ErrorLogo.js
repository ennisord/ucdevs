import Image from "next/image";
import Link from "next/link";

export default function ErrorLogo({ size = "default" }) {
  // Size variants
  const sizes = {
    default: { width: 80, height: 26 },
    mobile: { width: 120, height: 40 },
    desktop: { width: 150, height: 50 }
  };
  
  const { width, height } = sizes[size] || sizes.default;
  
  return (
    <Link href="/" passHref legacyBehavior>
      <a className="cursor-pointer block">
        <Image 
          src="/image.png" 
          alt="UCDevs logo" 
          width={width} 
          height={height} 
          className="hover:opacity-80 transition-opacity" 
        />
      </a>
    </Link>
  );
}