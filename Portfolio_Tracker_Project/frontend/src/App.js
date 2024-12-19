import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import StockForm from './components/StockForm';
import StockTable from './components/StockTable';

const App = () => {
  const [stocks, setStocks] = useState([]);

  const addStock = (newStock) => {
    setStocks([...stocks, newStock]);
  };

  const updateStock = (updatedStock) => {
    setStocks(
      stocks.map((stock) => (stock.id === updatedStock.id ? updatedStock : stock))
    );
  };

  const deleteStock = (id) => {
    setStocks(stocks.filter((stock) => stock.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Portfolio Tracker</h1>
      <Dashboard stocks={stocks} />
      <StockForm addStock={addStock} />
      <StockTable stocks={stocks} updateStock={updateStock} deleteStock={deleteStock} />
    </div>
  );
};

export default App;
