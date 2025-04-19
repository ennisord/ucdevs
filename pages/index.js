import Image from "next/image";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ background: "#101010" }}
    >
      <Head>
        <title>UCDevs</title>
        <meta name="description" content="UCDevs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/ucdevs.png"
        alt="UCDevs logo"
        width={256}
        height={256}
        priority
      />
    </div>
  );
}
