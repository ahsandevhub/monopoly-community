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
        console.error("Error fetching CSV data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopHoldersData();
  }, []);

  const formatAccount = (account) => {
    // Extract the first 3 and last 3 characters, and add "..."
    return account.slice(0, 3) + "..." + account.slice(-3);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/C11u31-uHnS._SX1920_QL65_FMwebp_.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800/80"></div>

      {/* Content */}
      <div className="relative container mx-auto sm:py-20 py-10 px-4">
        <h2 className="md:col-span-2 md:mb-12 mb-8 text-center md:text-4xl text-3xl text-slate-100 font-bold">
          Top Holders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Holders Table */}
          <table className="table-auto bg-slate-800/50 backdrop-blur sm:text-base text-xs w-full text-center md:rounded-xl rounded-md border border-slate-200 overflow-hidden text-slate-100 border-collapse">
            <thead>
              <tr className="bg-slate-700 *:px-1 *:py-2 *:sm:p-4 *:border *:border-slate-500">
                <th>#</th>
                <th>Image</th>
                <th>Property</th>
                <th>Account</th>
                <th>Quantity</th>
                <th className="break-all">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {holders.map((holder, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-600/50 *:px-1 *:py-2 *:sm:p-2 *:border *:border-slate-500"
                >
                  <td>{index + 1}</td>
                  <td className="sm:w-20 w-16">
                    <Image
                      src={`/properties/${propertiesData[index]?.property}.jpg`}
                      height={300}
                      width={300}
                      alt={propertiesData[index]?.property}
                      className="size-full mx-auto rounded-md"
                    />
                  </td>
                  <td>{propertiesData[index]?.property}</td>
                  <td>{formatAccount(holder.Account)}</td>
                  <td>{holder.Quantity.toLocaleString()}</td>
                  <td>{holder.Percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Properties owned by */}
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
            {holders.map((holder, index) => (
              <div
                key={index}
                className="relative bg-gray-800 rounded-lg border border-gray-400 shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <Image
                  src={`/properties/${propertiesData[index]?.property}.jpg`}
                  height={500}
                  width={500}
                  alt={propertiesData[index]?.property}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-2">
                  <p className="text-center sm:text-lg text-base font-semibold text-slate-100">
                    {propertiesData[index]?.property}
                  </p>
                  <p className="text-center text-sm text-slate-400">
                    Owner: {formatAccount(holder.Account)}
                  </p>
                </div>
                <div className="absolute top-2 left-2 border-2 text-white border-slate-50 z-10 h-8 w-8 flex items-center justify-center bg-red-600 shadow-lg rounded-full">
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
