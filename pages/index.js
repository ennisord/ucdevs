import Head from "next/head";
import Image from "next/image";
import { VT323 } from "next/font/google";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import CardsSection from "../components/CardsSection";
import PartnershipSection from "../components/PartnershipSection";
import Footer from "../components/Footer";

// Using VT323 font
const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#101010] ${vt323.className}`}>
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

      <NavBar />

       {/* Hero Section */}
       <HeroSection />
 
       {/* Cards Section */}
       <CardsSection />
 
       {/* Partnership Section */}
       <PartnershipSection />
 
       {/* Footer Section - now includes FinalFooter internally */}
       <Footer />
    </div>
  );
}
