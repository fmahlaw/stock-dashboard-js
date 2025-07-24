import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchStockChart } from "../services/api"; // this should call your backend
import StockChart from "../components/StockChart";

const StockPage = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchStockChart(symbol); // Replace with your real API call
        setChartData(data);
      } catch (error) {
        console.error("Error loading chart:", error);
        navigate("/"); // redirect home if stock not found
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [symbol, navigate]);

  if (loading) return <div className="p-6">⏳ Loading {symbol} data...</div>;

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Stock: {symbol}</h1>
      {chartData ? (
        <StockChart symbol={symbol} data={chartData} />
      ) : (
        <p>No chart data found.</p>
      )}
    </div>
  );
};

export default StockPage;
