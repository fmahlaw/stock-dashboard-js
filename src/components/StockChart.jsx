import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const StockChart = ({ symbol, data }) => {
  const chartData = {
    labels: data.map(d => new Date(d.Date).toLocaleDateString()),
    datasets: [
      {
        label: symbol,
        data: data.map(d => d.Close),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3,
        fill: false
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">{symbol}</h3>
      <Line data={chartData} />
    </div>
  );
};

export default StockChart;