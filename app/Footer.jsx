import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative text-white py-10 sm:py-12">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute -z-10 inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/suppdort.webp')" }}
      >
        <div className="bg-gradient-to-b from-orange-600/90 to-red-800/90 h-full w-full"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center">
        {/* Monopoly Banner */}
        <div className="mb-6 sm:mb-8">
          <Image
            height={50}
            width={800}
            src={"/monopoly-banner.png"}
            alt="Monopoly Banner"
            className="mx-auto w-64 sm:w-80 h-auto"
          />
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
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
                className="rounded-md w-10 h-10 sm:w-12 sm:h-12 shadow-lg hover:scale-105 transition-all border-2 border-white/20 hover:border-yellow-400"
              />
            </Link>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-200 max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
          For entertainment purposes only. Not financial advice. Invest
          responsibly.
        </p>

        {/* Copyright Notice */}
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Monopoly Community. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
