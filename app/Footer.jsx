import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative text-white py-20">
      <div
        className="absolute -z-10 inset-0 bg-cover bg-center"
        // style={{ backgroundImage: "url('/modern-train.avif')" }}
        style={{ backgroundImage: "url('/5.webp')" }}
      >
        <div className="bg-green-600/90 h-full w-full"></div>
      </div>
      <div className="container mx-auto px-4 text-center">
        {/* Monopoly-themed Elements */}
        <div className="flex justify-center items-center gap-6 mb-4">
          <img src="/icons/rail.png" alt="Train Icon" className="w-10 h-10" />
          <img src="/icons/money.png" alt="Money Icon" className="w-10 h-10" />
          <img src="/icons/dice.png" alt="Dice Icon" className="w-10 h-10" />
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4 text-lg">
          <Link
            href="https://discord.com"
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            Discord
          </Link>
          <Link
            href="https://telegram.org"
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            Telegram
          </Link>
          <Link
            href="https://twitter.com"
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
