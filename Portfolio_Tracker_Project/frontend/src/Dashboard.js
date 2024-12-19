import React from 'react';

const Dashboard = ({ stocks }) => {
  const totalValue = stocks.reduce((sum, stock) => sum + stock.quantity * stock.buyPrice, 0);
  const topPerforming = stocks.reduce(
    (max, stock) => (stock.buyPrice > max.buyPrice ? stock : max),
    { buyPrice: 0 }
  );

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Portfolio Value: ${totalValue.toFixed(2)}</p>
      <p>Top-Performing Stock: {topPerforming.name || 'N/A'}</p>
    </div>
  );
};

export default Dashboard;
