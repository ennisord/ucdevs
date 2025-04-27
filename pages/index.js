import Image from "next/image";
import Head from "next/head";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`flex items-center flex-col justify-center min-h-screen ${leagueSpartan.variable}`}
      style={{ background: "#101010" }}
    >
      <Head>
        <title>UCDevs</title>
        <meta name="description" content="UCDevs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/UCDevs.png"
        alt="UCDevs logo"
        width={256}
        height={256}
        priority
      />
      <p className="text-white text-center text-lg max-w-2xl" style={{ fontFamily: 'var(--font-league-spartan)' }}>
        We&apos;re an up-and-coming club at the University of Calgary. Our primary focus will be web development, particularly working on projects for nonprofits. Stay tuned!
      </p>
      <a
        className="bg-white text-black font-semibold px-6 py-2 rounded-xl mt-4 inline-block text-center"
        style={{ fontFamily: 'var(--font-league-spartan)', cursor: 'pointer' }}
        href="https://discord.gg/XmXhmJ9Xx6"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join Us
      </a>
    </div>
  );
}
