"use client";

import Coin from "@/public/coin.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const HeroSection = () => {
  const [isSpinning, setIsSpinning] = useState(true);

  return (
    <section className="relative bg-white text-center min-h-screen py-[100px] sm:py-0 flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/monopoly-board.jpg')" }}
      >
        <div className="bg-gray-900/80 h-full w-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 container flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
        <div className="left z-10 bg-gray-900/30 border-4 border-orange-400/50 backdrop-blur-sm p-10 rounded-lg flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-red-600 drop-shadow-lg">
            Own the Board, Rule the Crypto World!
          </h1>
          <p className="text-lg md:text-xl text-gray-50 mt-4 max-w-3xl">
            The game where your holdings decide your empire. Build wealth,
            dominate the board, and flex your assets.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
            <a
              href="https://pancakeswap.finance"
              target="_blank"
              className="bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg text-lg font-semibold hover:bg-green-700 transition"
            >
              Buy Now
            </a>
            <a
              href="#leaderboard"
              className="bg-red-600 text-white px-8 py-3 rounded-xl shadow-lg text-lg font-semibold hover:bg-red-700 transition"
            >
              Explore Leaderboard
            </a>
          </div>
        </div>

        {/* Spinning Coin Animation */}
        <div className="relative flex justify-center w-full md:max-w-[40%]">
          {/* Monopoly Board */}
          <div className="absolute md:-top-[180px] -top-20 transform md:h-[200%] md:w-[200%]">
            <Image
              src="/monopoly-board.png"
              alt="Monopoly Board"
              width={500}
              height={500}
              className="object-contain md:h-full md:w-full"
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
