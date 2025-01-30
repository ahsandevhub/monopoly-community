import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative text-white py-10">
      <div
        className="absolute -z-10 inset-0 bg-cover bg-center"
        // style={{ backgroundImage: "url('/modern-train.avif')" }}
        style={{ backgroundImage: "url('/suppdort.webp')" }}
      >
        <div className="bg-gradient-to-b from-orange-600 to-red-800 h-full w-full"></div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <Image
          height={50}
          width={800}
          src={"/monopoly-banner.png"}
          alt="monopoly banner"
          className="mx-auto w-96 h-auto"
        />

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-6 text-lg">
          {[
            {
              href: "https://dexscreener.com/solana/6rs2so7t41lawwtvd3cnpdrlqptfbuopuvvcqpqkmoon",
              src: "/icons/dex-screener.png",
              alt: "Dex Screener",
            },
            {
              href: "https://t.me/monopolymemecoin",
              src: "/icons/telegram.jpg",
              alt: "Telegram",
            },
            {
              href: "https://x.com/Collect2PassGo",
              src: "/icons/logo-x-icon.avif",
              alt: "Twitter/X",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              className="hover:text-yellow-400 transition flex flex-col gap-1 justify-center items-center"
            >
              <Image
                height={48}
                width={48}
                src={item.src}
                alt={item.alt}
                className="rounded-md w-12 shadow-lg hover:scale-105 transition-all border-2 h-12 sm:size-14 aspect-square"
              />
            </Link>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-300 max-w-2xl mx-auto">
          For entertainment purposes only. Not financial advice. Invest
          responsibly.
        </p>

        {/* Copyright Notice */}
        <p className="mt-4 text-white text-sm">
          &copy; {new Date().getFullYear()} Monopoly Community. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
