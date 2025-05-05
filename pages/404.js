import Head from "next/head";
import { VT323 } from "next/font/google";
import FinalFooter from "../components/FinalFooter";
import ErrorLogo from "../components/Error/ErrorLogo";
import ErrorBackground from "../components/Error/Background";
import MobileErrorContent, { DesktopErrorContent } from "../components/Error/ErrorContent";

// Using the same VT323 font as the index page
const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Custom404() {
  return (
    <div className={`${vt323.className} bg-[#101010]`}>
      <Head>
        <title>404 - Page Not Found | UCDevs</title>
        <meta name="description" content="Page not found - UCDevs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main content container */}
      <div>
        {/* Mobile layout */}
        <div className="lg:hidden min-h-screen bg-[#101010] relative overflow-hidden">
          <ErrorBackground />
          
          {/* UCDevs logo at top */}
          <div className="absolute top-5 left-5 z-20">
            <ErrorLogo size="mobile" />
          </div>
          
          <MobileErrorContent />
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:block min-h-screen bg-[#101010] relative overflow-hidden">
          <ErrorBackground />
          
          {/* UCDevs logo at top */}
          <div className="absolute top-10 left-10 z-20">
            <ErrorLogo size="desktop" />
          </div>
          
          <DesktopErrorContent />
        </div>

        {/* Footer displayed after the 404 page content */}
        <FinalFooter />
      </div>
    </div>
  );
}
