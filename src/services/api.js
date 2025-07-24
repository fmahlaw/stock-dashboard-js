export async function fetchStockChart(symbol) {
  // TODO: Replace with real fetch from backend
  const dummy = {
    BBRI: [
      { Date: 1752624000000, XLabel: "20", Close: 4400 },
      { Date: 1752710400000, XLabel: "21", Close: 4450 },
      { Date: 1752796800000, XLabel: "22", Close: 4470 },
      { Date: 1752883200000, XLabel: "23", Close: 4420 },
      { Date: 1752969600000, XLabel: "24", Close: 4460 },
      { Date: 1753056000000, XLabel: "25", Close: 4500 },
    ],
  };

  const upper = symbol.toUpperCase();
  if (!dummy[upper]) throw new Error("Symbol not found");
  return dummy[upper];
}
