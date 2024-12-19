CREATE TABLE stocks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  ticker VARCHAR(10),
  quantity INT,
  buy_price DECIMAL(10, 2)
);