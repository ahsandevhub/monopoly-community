"use client";

import { useEffect, useState } from "react";

const TokenStats = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await fetch(
          "https://api.dexscreener.com/token-pairs/v1/solana/6RS2so7t41LAWWtvD3CnPdRLQPtfBuoPUVVCQpQKmoon"
        );
        const json = await response.json();
        setData(json[0]); // API returns an array, use the first object
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchTokenData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Failed to load data.
      </div>
    );
  }

  const {
    priceUsd,
    txns,
    volume,
    priceChange,
    info: { socials, websites },
  } = data;

  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-6 text-yellow-500">
          🎩 MONOPOLY Token Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Price (USD) */}
          <div className="p-4 bg-gray-800 rounded shadow border border-yellow-500">
            <h3 className="text-lg font-semibold text-green-400">
              Price (USD)
            </h3>
            <p className="text-2xl font-bold text-yellow-400">${priceUsd}</p>
          </div>

          {/* Transactions */}
          <div className="p-4 bg-gray-800 rounded shadow border border-green-500">
            <h3 className="text-lg font-semibold text-red-400">
              Transactions (Last 24h)
            </h3>
            <p className="text-xl">
              <span className="text-green-400">Buys:</span> {txns.h24.buys} |{" "}
              <span className="text-red-400">Sells:</span> {txns.h24.sells}
            </p>
          </div>

          {/* Volume */}
          <div className="p-4 bg-gray-800 rounded shadow border border-yellow-500">
            <h3 className="text-lg font-semibold text-blue-400">
              Volume (Last 24h)
            </h3>
            <p className="text-xl text-yellow-400">
              ${volume.h24.toLocaleString()}
            </p>
          </div>

          {/* Price Change */}
          <div className="p-4 bg-gray-800 rounded shadow border border-red-500">
            <h3 className="text-lg font-semibold">Price Change (24h)</h3>
            <p
              className={`text-2xl font-bold ${
                priceChange.h24 > 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {priceChange.h24 > 0 ? "+" : ""}
              {priceChange.h24}%
            </p>
          </div>
        </div>

        {/* Socials and Website */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold mb-2 text-yellow-400">
            🎲 Connect with MONOPOLY:
          </h3>
          <div className="flex items-center justify-center flex-wrap gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-yellow-500 transition"
              >
                {social.type}
              </a>
            ))}
            {websites.map((website, index) => (
              <a
                key={index}
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-yellow-500 transition"
              >
                Official Website
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenStats;
