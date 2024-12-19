CREATE DATABASE portfolio;
USE portfolio;

CREATE TABLE stock (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  ticker VARCHAR(50),
  quantity INT,
  buy_price DECIMAL(10, 2)
);
