import React, { useState } from 'react';

const StockForm = ({ addStock }) => {
  const [stock, setStock] = useState({ name: '', ticker: '', quantity: 1, buyPrice: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock({ ...stock, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStock({ ...stock, id: Date.now() });
    setStock({ name: '', ticker: '', quantity: 1, buyPrice: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add/Edit Stock</h3>
      <input
        type="text"
        name="name"
        placeholder="Stock Name"
        value={stock.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="ticker"
        placeholder="Ticker"
        value={stock.ticker}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={stock.quantity}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="buyPrice"
        placeholder="Buy Price"
        value={stock.buyPrice}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Stock</button>
    </form>
  );
};

export default StockForm;
