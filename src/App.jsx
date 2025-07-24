// App.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StockPage from "./pages/StockPage";
import ComparePage from "./pages/ComparePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stock/:symbol" element={<StockPage />} />
      <Route path="/compare" element={<ComparePage />} />
    </Routes>
  );
}

export default App;
