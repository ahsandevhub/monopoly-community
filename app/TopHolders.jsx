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
    <div className="bg-gray-800 relative">
      <div id="leaderboard" className="absolute -top-10"></div>
      <div className="container max-w-4xl mx-auto sm:py-20 py-10 px-4">
        <h2 className="md:col-span-2 text-center sm:text-4xl text-2xl text-slate-100 font-bold mb-4">
          Top Holders
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {/* Holders Table */}
          <table className="table-auto sm:text-base text-xs w-full text-center text-slate-100 border-collapse">
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
                  className="hover:bg-slate-600 *:px-1 *:py-2 *:sm:p-2 *:border *:border-slate-500"
                >
                  <td>{index + 1}</td>
                  <td className="sm:w-32 w-16">
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
        </div>
      </div>
    </div>
  );
};

export default TopHolders;
