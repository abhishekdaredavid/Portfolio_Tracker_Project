import React from 'react';

const StockTable = ({ stocks, updateStock, deleteStock }) => {
  return (
    <div>
      <h3>Stock Holdings</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>${stock.buyPrice.toFixed(2)}</td>
              <td>
                <button onClick={() => updateStock(stock)}>Edit</button>
                <button onClick={() => deleteStock(stock.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
