"use client";

import { Check, Copy } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "6RS2so7t41LAWWtvD3CnPdRLQPtfBuoPUVVCQpQKmoon";

  const handleCopy = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage: "url('/MON_NY2121_theme_header-1024x448.webp')",
      }}
    >
      <div id="tokenomics" className="absolute -top-10"></div>
      {/* Red Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800/80 to-black/80"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">🪙 Tokenomics</h2>

        {/* Token Supply */}
        <p className="text-lg md:text-xl font-semibold mb-4">
          Total Supply: <span className="text-yellow-300">1 Billion $MONO</span>
        </p>

        {/* Token Address */}
        <div className="flex justify-center items-center bg-gray-800/80 px-4 py-2 rounded-lg w-fit mx-auto mb-6">
          <span className="text-sm md:text-base break-all">{tokenAddress}</span>
          <button
            onClick={handleCopy}
            className="ml-3 text-yellow-300 hover:text-yellow-500"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>

        {/* Meteora Link Button */}
        <div className="flex flex-col w-max justify-center items-center mx-auto gap-4">
          <a
            href="https://solscan.io/account/vsVnPtSzYpgAVsLp7U5FKnk4o2xCsyHqgXJG39dqfTw"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition"
          >
            View on LP
          </a>
          <a
            href="https://docs.moonshot.cc/faq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 flex items-center gap-2 text-gray-900 font-bold px-3 py-2 rounded-lg transition"
          >
            <Image
              width={50}
              height={50}
              src={"/moonshot.avif"}
              alt="moonshot"
              className="size-8"
            />{" "}
            View on Moonshot
          </a>
        </div>

        {/* Airdrop Schedule */}
        <div className="mt-12 text-left max-w-4xl mx-auto bg-gray-900/80 p-6 rounded-lg border border-gray-600">
          <h3 className="text-2xl font-bold text-yellow-300 mb-4">
            Airdrop Schedule
          </h3>
          <ul className="space-y-3 text-sm md:text-base text-gray-200">
            <li>
              🎲 <strong>The first airdrop</strong> happens within 3 hours of
              bonding.
            </li>
            <li>
              ⏳ <strong>Afterward</strong>, airdrops occur randomly every 24
              hours (mean interval ~12 hours) to prevent gaming.
            </li>
            <li>
              🌙 <strong>Eligibility:</strong> Only for coins bonded to
              @Meteora.
            </li>
            <li>
              💰 <strong>Meteora LP reward fees:</strong>
              <ul className="list-disc pl-5">
                <li>
                  Start: <span className="text-yellow-300">3%</span>
                </li>
                <li>
                  +4 hrs: <span className="text-yellow-300">1.5%</span>
                </li>
                <li>
                  +24 hrs: <span className="text-yellow-300">0.25%</span>
                </li>
              </ul>
              Learn more in Meteora’s docs.
            </li>
            <li>
              🔍 <strong>Exclusions:</strong> Any off-curve accounts (e.g.,
              PDAs) are removed from the top 50 to ensure real holders get
              rewards.
            </li>
            <li>
              💵 <strong>Minimum airdrop:</strong> ~$1 (depending on Solana gas
              fees).
            </li>
            <li>
              📉 <strong>Liquidity Impact:</strong> Airdrops reduce pool
              liquidity as LP fees are stored in the pool. AirLock can be
              disabled on request.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
