import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function StockChart({ symbol, data }) {
  const labels = data.map(item => new Date(item.Date).toISOString().split('T')[0]);
  const prices = data.map(item => item.Close);

  const chartData = {
    labels,
    datasets: [
      {
        label: `${symbol} Close`,
        data: prices,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        pointRadius: 3,
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: context => 'Rp ' + context.formattedValue
        }
      },
      title: {
        display: true,
        text: `${symbol} Closing Prices`
      }
    },
    scales: {
      x: { title: { display: true, text: 'Date' } },
      y: { title: { display: true, text: 'Closing Price (Rp)' } }
    }
  };

  return (
    <div className="bg-white shadow rounded p-4">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default StockChart;
