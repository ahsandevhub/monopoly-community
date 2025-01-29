"use client";

import propertiesData from "@/app/data/properties.json";
import Image from "next/image";
import { useEffect, useState } from "react";

const TopHolders = () => {
  const [holders, setHolders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopHoldersData = async () => {
      try {
        const response = await fetch("/api/top-holders");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setHolders(data.topHolders);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopHoldersData();
  }, []);

  const formatAccount = (account) => {
    return account.slice(0, 3) + "..." + account.slice(-3);
  };

  if (loading) {
    return (
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: "url('/monopoly-board.jpg')", // Updated background
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-gray-900/80 to-black/80"></div>
        <div className="relative container mx-auto sm:py-20 py-10 px-6">
          <div className="text-center py-10">
            <div className="animate-pulse space-y-8">
              {/* Top Heading Skeleton */}
              <div className="h-8 bg-slate-600/60 rounded w-1/3 mx-auto mb-6"></div>

              <div className="flex justify-between space-x-6">
                {/* Left Side: Table Skeleton */}
                <div className="w-1/2 space-y-4">
                  <div className="h-8 bg-slate-600/60 rounded w-full mx-auto"></div>
                  {[...Array(22)].map((_, index) => (
                    <div
                      key={index}
                      className="h-6 bg-slate-600/60 rounded w-full mx-auto"
                    ></div>
                  ))}
                </div>

                {/* Right Side: Grid of 3 Cards Skeleton */}
                <div className="w-1/2 grid grid-cols-3 gap-6">
                  {[...Array(12)].map((_, index) => (
                    <div key={index} className="space-y-4">
                      <div className="h-8 bg-slate-600/60 rounded w-full mx-auto"></div>
                      <div className="h-40 bg-slate-600/60 rounded w-full mx-auto"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/monopoly-board.jpg')", // Updated background
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-gray-900/80 to-black/80"></div>

      <div id="leaderboard" className="absolute -top-10"></div>

      {/* Content */}
      <div className="relative container mx-auto sm:py-20 py-10 sm:px-6 px-4">
        <h2 className="text-center text-4xl font-bold text-white md:mb-10 mb-6">
          🏆 Top Holders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Holders Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-600 bg-gray-900/90 backdrop-blur-lg shadow-lg">
            <table className="w-full h-full min-w-[500px] text-center text-white border-collapse">
              <thead>
                <tr className="bg-red-600 text-white text-sm sm:text-base *:px-2 sm:*:px-3 *:py-2 sm:*:py-3 *:border-b *:border-gray-500">
                  <th className="whitespace-nowrap">#</th>
                  <th className="whitespace-nowrap">Image</th>
                  <th className="whitespace-nowrap">Property</th>
                  <th className="whitespace-nowrap">Account</th>
                  <th className="whitespace-nowrap">Quantity</th>
                  <th className="whitespace-nowrap">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {holders.map((holder, index) => (
                  <tr
                    key={index}
                    className="text-sm sm:text-base *:px-2 sm:*:px-3 *:py-2 sm:*:py-3 *:border-b *:border-gray-600 odd:bg-gray-800/50 even:bg-gray-900/50 hover:bg-gray-700 transition"
                  >
                    <td className="font-bold">{index + 1}</td>
                    <td className="w-10 sm:w-24">
                      <Image
                        src={`/properties/${propertiesData[index]?.property}.jpg`}
                        height={300}
                        width={300}
                        alt={propertiesData[index]?.property}
                        className="rounded-md w-10 sm:w-full"
                      />
                    </td>
                    <td className="font-semibold whitespace-nowrap">
                      {propertiesData[index]?.property}
                    </td>
                    <td
                      className="text-blue-400 whitespace-nowrap"
                      title={holder.Account}
                    >
                      {formatAccount(holder.Account)}
                    </td>
                    <td className="font-semibold whitespace-nowrap">
                      {holder.Quantity.toLocaleString()}
                    </td>
                    <td className="font-semibold whitespace-nowrap">
                      {holder.Percentage}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Properties Owned by Holders */}
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
            {holders.map((holder, index) => (
              <div
                key={index}
                className="relative bg-gray-800 rounded-lg border border-gray-500 shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
              >
                <Image
                  src={`/properties/${propertiesData[index]?.property}.jpg`}
                  height={300}
                  width={300}
                  alt={propertiesData[index]?.property}
                  className="w-full aspect-square object-cover"
                />
                <div className="py-2 text-center">
                  <p className="text-lg font-bold text-white">
                    {propertiesData[index]?.property}
                  </p>
                  <p className="text-sm text-gray-400">
                    Owner: {formatAccount(holder.Account)}
                  </p>
                </div>
                <div className="absolute top-2 left-2 border-2 text-white border-gray-200 bg-red-600 shadow-lg rounded-full h-8 w-8 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHolders;
