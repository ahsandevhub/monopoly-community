"use client";

import Coin from "@/public/coin.png";
import { motion } from "framer-motion";
import { Check, Copy, TicketCheckIcon, Trophy } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const HeroSection = () => {
  const [isSpinning, setIsSpinning] = useState(true);
  const [copied, setCopied] = useState(false);

  const contractAddress = "6RS2so7t41LAWWtvD3CnPdRLQPtfBuoPUVVCQpQKmoon";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <section
      id="home"
      className="relative bg-white text-center min-h-screen py-[100px] sm:py-0 flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/monopoly-board.jpg')" }}
      >
        <div className="bg-gray-900/80 h-full w-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 container flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
        <div className="left z-10 bg-gray-900/30 border-4 border-green-500 backdrop-blur-sm sm:p-10 p-4 rounded-lg flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-600 drop-shadow-lg">
            Own the Board, Rule the Crypto World!
          </h1>
          <p className="text-lg md:text-xl text-gray-50 mt-4 max-w-3xl">
            The game where your holdings decide your empire. Build wealth,
            dominate the board, and flex your assets.
          </p>

          {/* Contract Address with Copy Icon */}
          <div
            className={`mt-6 flex flex-col md:flex-row items-center justify-center gap-2 md:text-xl text-base text-slate-50 cursor-pointer transition ${
              copied ? "bg-purple-500/80" : "bg-blue-400/80"
            } p-4 overflow-hidden rounded`}
            onClick={handleCopy}
          >
            <span className="break-all fira-code">CA: {contractAddress}</span>
            <div className="bg-orange-500 rounded h-full p-3">
              {copied ? (
                <Check className="text-white" />
              ) : (
                <Copy className="text-white" />
              )}
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
            <a
              href="https://dexscreener.com/solana/6rs2so7t41lawwtvd3cnpdrlqptfbuopuvvcqpqkmoon"
              target="_blank"
              className="bg-green-600 flex justify-center items-center gap-2 text-white px-5 py-3 rounded-md shadow-lg font-semibold hover:bg-green-700 transition"
            >
              <TicketCheckIcon /> Buy Now
            </a>
            <a
              href="#leaderboard"
              className="bg-red-600 flex justify-center items-center gap-2 text-white px-5 py-3 rounded-md shadow-lg font-semibold hover:bg-red-700 transition"
            >
              <Trophy /> Explore Leaderboard
            </a>
          </div>
        </div>

        {/* Spinning Coin Animation */}
        <div className="relative flex justify-center w-full md:max-w-[40%] mb-10 md:mb-0">
          {/* Monopoly Board */}
          <div className="absolute md:-top-[180px] -top-20 transform md:h-[200%] md:w-[200%]">
            <Image
              src="/monopoly-board.png"
              alt="Monopoly Board"
              width={500}
              height={500}
              className="object-contain md:h-full md:w-full drop-shadow-[0_20px_40px_rgb(0,0,0)]"
            />
          </div>

          {/* Spinning Coin */}
          <motion.div
            className="relative z-10 cursor-pointer"
            animate={isSpinning ? { rotateY: [0, 180, 0] } : { rotateY: 0 }}
            transition={{
              repeat: isSpinning ? Infinity : 0,
              repeatType: "mirror",
              duration: 10,
              ease: "linear",
            }}
            onTap={() => setIsSpinning((prev) => !prev)}
            whileHover={{ scale: 1.1 }}
            onHoverStart={() => setIsSpinning(false)}
            onHoverEnd={() => setIsSpinning(true)}
          >
            <Image
              src={Coin}
              alt="Monopoly Coin"
              className="w-40 h-40 md:w-80 md:h-80 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
