import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative text-white py-20">
      <div
        className="absolute -z-10 inset-0 bg-cover bg-center"
        // style={{ backgroundImage: "url('/modern-train.avif')" }}
        style={{ backgroundImage: "url('/support.webp')" }}
      >
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 h-full w-full"></div>
      </div>
      <div className="container mx-auto px-4 text-center">
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4 text-lg">
          <Link
            href="https://dexscreener.com/solana/6rs2so7t41lawwtvd3cnpdrlqptfbuopuvvcqpqkmoon"
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            Dexscreener
          </Link>
          <Link
            href="https://t.me/monopolymemecoin"
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            Telegram
          </Link>
          <Link
            href="https://x.com/Collect2PassGo"
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            Twitter
          </Link>
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
