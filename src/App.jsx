// App.jsx
import React, { useEffect, useState } from 'react';
import StockChart from './components/StockChart';

function App() {
  const [stockData, setStockData] = useState({});

 useEffect(() => {
  fetch('http://localhost:3000/api/idx')
    .then(res => res.json())
    .then(data => {
      console.log('Received data:', data);
      setStockData(data);
    })
    .catch(err => console.error('Fetch error:', err));
}, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">IDX Multi-Stock Charts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(stockData).map(([symbol, data]) => (
          <StockChart key={symbol} symbol={symbol} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;

/*
TODO
- perbaiki graphic biar ciamik
- bikin NM
- bikin field input

*/