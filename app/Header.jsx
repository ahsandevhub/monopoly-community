"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-red-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/monopoly-logo.jpg"
            alt="Monopoly Logo"
            className="w-12 h-12"
          />
          <h1 className="text-2xl font-bold">Monopoly Community</h1>
        </div>

        {/* Menu Icon (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Navigation */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-red-600 md:bg-transparent shadow-md md:shadow-none md:flex ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-6 text-lg font-medium md:items-center md:gap-8 p-4 md:p-0">
            <li>
              <a href="/" className="hover:text-green-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#tokenomics" className="hover:text-green-400 transition">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="#roadmap" className="hover:text-green-400 transition">
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#leaderboard"
                className="hover:text-green-400 transition"
              >
                Leaderboard
              </a>
            </li>
            <li>
              <a href="#how-to-buy" className="hover:text-green-400 transition">
                How to Buy
              </a>
            </li>
            <li>
              <a href="#community" className="hover:text-green-400 transition">
                Community
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-green-400 transition">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
