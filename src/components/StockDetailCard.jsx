import React from 'react';

const StockDetailCard = ({ detail }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">{detail.name} ({detail.symbol})</h2>
      <p className="text-gray-700">Sector: {detail.sector}</p>
      <p className="text-gray-700">Price: {detail.price}</p>
      {/* Add more financial info here */}
    </div>
  );
};

export default StockDetailCard;
