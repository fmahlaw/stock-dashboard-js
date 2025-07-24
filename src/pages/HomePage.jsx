import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [symbol, setSymbol] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!symbol.trim()) return;
    navigate(`/stock/${symbol.toUpperCase()}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">IDX Dashboard</h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Search for an Indonesian stock by its symbol (e.g. BBRI, BMRI)
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter stock symbol"
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
