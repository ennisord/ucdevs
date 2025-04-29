import Head from "next/head";
import { League_Spartan } from "next/font/google";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import CardsSection from "../components/CardsSection";
import PartnershipSection from "../components/PartnershipSection";
import Footer from "../components/Footer";

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

      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Cards Section */}
      <CardsSection />

      {/* Partnership Section */}
      <PartnershipSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
