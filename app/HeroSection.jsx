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
      <div className="relative z-10 mx-auto px-4 container flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-20">
        <div className="left z-10 flex flex-col items-center border-orange-400 md:border-l-4 border-t-4 md:border-t-0 sm:ps-6 px-3 sm:px-0 md:bg-gradient-to-r bg-gradient-to-b from-gray-800/50 to-transparent pb-5 pt-3 rounded-lg md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg leading-[1.2] md:leading-[1.1]">
            Own the Board, Rule the Crypto World!
          </h1>
          <p className="text-lg md:text-xl text-gray-50 mt-4 max-w-3xl">
            The game where your holdings decide your empire. Build wealth,
            dominate the board, and flex your assets.
          </p>

          {/* Contract Address with Copy Icon */}
          <div
            className={`mt-6 flex flex-col md:flex-row items-center justify-center gap-0 md:text-xl text-base text-slate-50 cursor-pointer transition-all duration-300 ${
              copied
                ? "border-green-400 bg-green-500/20"
                : "border-purple-400 bg-purple-500/20"
            } p-0 overflow-hidden rounded-lg border-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:shadow-lg`}
            onClick={handleCopy}
          >
            {/* "CA:" Label with Background Color */}
            <div
              className={`px-4 sm:py-4 py-2 ${
                copied ? "bg-green-500/80" : "bg-purple-500/80"
              } font-bold w-full sm:w-auto`}
            >
              CA:
            </div>

            {/* Contract Address Text */}
            <span className="break-all fira-code px-4 sm:py-4 py-2 flex-1">
              {contractAddress}
            </span>

            {/* Copy Icon Container */}
            <div
              className={`rounded-lg sm:mr-2 mb-2 sm:mb-0 h-full p-3 transition-all duration-300 ${
                copied ? "bg-green-500" : "bg-purple-500"
              } shadow-inner hover:shadow-md`}
            >
              {copied ? (
                <Check className="text-white w-5 h-5" />
              ) : (
                <Copy className="text-white w-5 h-5" />
              )}
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 w-full sm:w-auto flex flex-col md:flex-row justify-center gap-6">
            <a
              href="https://dexscreener.com/solana/6rs2so7t41lawwtvd3cnpdrlqptfbuopuvvcqpqkmoon"
              target="_blank"
              className="bg-green-600 hover:gap-3 transition-all flex justify-center items-center gap-2 text-white px-5 py-3 rounded-md shadow-lg font-semibold hover:bg-green-700"
            >
              <TicketCheckIcon /> Buy Now
            </a>
            <a
              href="#leaderboard"
              className="bg-red-600 hover:gap-3 transition-all flex justify-center items-center gap-2 text-white px-5 py-3 rounded-md shadow-lg font-semibold hover:bg-red-700"
            >
              <Trophy /> Explore Leaderboard
            </a>
          </div>
        </div>

        {/* Spinning Coin Animation */}
        <div className="relative flex justify-center w-full md:max-w-[40%] mb-16 md:mb-20">
          {/* Monopoly Board */}
          <div className="absolute md:-top-12 -top-8 transform md:h-[200%] md:w-[200%]">
            <Image
              src="/monopoly board 3d only.png"
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
