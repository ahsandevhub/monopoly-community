"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Array for navigation links
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#leaderboard", label: "Leaderboard" },
    { href: "#how-to-buy", label: "How to Buy" },
    { href: "https://t.me/monopolymemecoin", label: "Community" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="container mx-auto fixed z-50 md:top-3 top-0 left-1/2 md:rounded-lg -translate-x-1/2 bg-gradient-to-r from-purple-800/90 to-red-600/90 backdrop-blur text-white shadow-lg drop-shadow-lg overflow-hidden">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
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
          className={`md:flex md:static top-16 left-0 w-full md:w-auto bg-red-800 md:bg-transparent shadow-md md:shadow-none pr-2 md:flex-row md:gap-6 md:items-center absolute md:top-0 md:left-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "translate-y-[-300%]"
          } md:translate-y-0`}
        >
          <ul className="flex flex-col md:flex-row gap-6 font-medium md:items-center p-4 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:bg-orange-600 px-4 py-2 font-medium transition block rounded-md"
                  onClick={() => setIsOpen(false)} // Close the menu on link click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
