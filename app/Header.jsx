"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container mx-auto fixed z-50 md:top-3 top-0 left-1/2 md:rounded-lg -translate-x-1/2 bg-gradient-to-r from-purple-800/90 to-red-600/90 backdrop-blur text-white shadow-lg drop-shadow-lg overflow-hidden">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 px-3 py-2">
          <Image
            src="/monopoly-logo.jpg"
            alt="Monopoly Logo"
            height={50}
            width={50}
            className="md:w-12 w-10 md:h-12 h-10 rounded-sm"
          />
          <h1 className="md:text-xl text-lg text-slate-100 font-bold">
            Monopoly Community
          </h1>
        </div>

        {/* Menu Icon (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navigation */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-red-800 md:bg-transparent shadow-md md:shadow-none pr-2 md:flex ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-6 font-medium md:items-center md:gap-0 p-4 md:p-0">
            <li>
              <Link
                href="#home"
                className="hover:bg-orange-600 px-4 py-8 font-medium transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:bg-orange-600 px-4 py-8 font-medium transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#tokenomics"
                className="hover:bg-orange-600 px-4 py-8 font-medium transition"
              >
                Tokenomics
              </Link>
            </li>
            <li>
              <Link
                href="#roadmap"
                className="hover:bg-orange-600 px-4 py-8 font-medium transition"
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                href="#leaderboard"
                className="hover:bg-orange-600 px-4 py-8 font-medium transition"
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <Link
                href="#how-to-buy"
                className="hover:bg-orange-600 px-4 py-8 font-medium transition"
              >
                How to Buy
              </Link>
            </li>
            <li>
              <Link
                href="#community"
                className="hover:bg-orange-600 px-4 py-8 font-medium transition"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="hover:bg-orange-600 px-4 py-8 font-medium transition"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
