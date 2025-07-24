import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchStockChart } from '../services/api';
import StockChart from '../components/StockChart';

const ComparePage = () => {
  const [searchParams] = useSearchParams();
  const symbols = searchParams.get('stocks')?.split(',') || [];
  const [chartDataMap, setChartDataMap] = useState({});

  useEffect(() => {
    symbols.forEach(symbol => {
      fetchStockChart(symbol).then(data => {
        setChartDataMap(prev => ({ ...prev, [symbol]: data }));
      });
    });
  }, [symbols]);

  return (
    <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2">
      {symbols.map(symbol => (
        <StockChart key={symbol} symbol={symbol} data={chartDataMap[symbol] || []} />
      ))}
    </div>
  );
};

export default ComparePage;