"use client";

import { ExternalLink } from "lucide-react";

const HowToBuy = () => {
  return (
    <section
      id="how-to-buy"
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage: "url('/monopoly-game-lobby-rry8dpiyev3ul3cw.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">🧩 How to Buy $MONO</h2>

        {/* Step-by-Step Guide */}
        <div className="max-w-3xl mx-auto text-left bg-gray-900/80 p-6 rounded-lg border border-gray-600">
          <ol className="list-decimal pl-5 space-y-4 text-sm md:text-base text-gray-200">
            <li>
              <strong>Download Phantom Wallet</strong>
              <p className="text-gray-400">
                Get the{" "}
                <a
                  href="https://phantom.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 underline"
                >
                  Phantom Wallet
                </a>{" "}
                extension or mobile app to store SOL and $MONO securely.
              </p>
            </li>
            <li>
              <strong>Buy & Send SOL</strong>
              <p className="text-gray-400">
                Purchase Solana (SOL) from an exchange like Binance, Coinbase,
                or Kraken and send it to your Phantom Wallet.
              </p>
            </li>
            <li>
              <strong>Swap for $MONO</strong>
              <p className="text-gray-400">
                Go to a decentralized exchange (DEX) like Raydium or Jupiter,
                enter the contract address for $MONO, and swap your SOL for
                $MONO tokens.
              </p>
            </li>
          </ol>
        </div>

        {/* External Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://dexscreener.com/solana/6rs2so7t41lawwtvd3cnpdrlqptfbuopuvvcqpqkmoon"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition"
          >
            View on Dexscreener <ExternalLink size={18} />
          </a>

          <a
            href="https://www.dextools.io/app/en/token/monopoly?t=1738153570039"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-600 hover:bg-lime-700 text-gray-900 font-bold py-3 px-6 rounded-lg flex items-center gap-2"
          >
            View on Dextools <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
