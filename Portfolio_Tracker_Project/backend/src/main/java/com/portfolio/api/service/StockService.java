package com.portfolio.api.service;

import com.portfolio.api.model.Stock;
import com.portfolio.api.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public Stock updateStock(Long id, Stock updatedStock) {
        Stock stock = stockRepository.findById(id).orElseThrow(() -> new RuntimeException("Stock not found"));
        stock.setName(updatedStock.getName());
        stock.setTicker(updatedStock.getTicker());
        stock.setQuantity(updatedStock.getQuantity());
        stock.setBuyPrice(updatedStock.getBuyPrice());
        return stockRepository.save(stock);
    }

    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public Double calculatePortfolioValue() {
        return stockRepository.findAll().stream()
                .mapToDouble(stock -> stock.getQuantity() * stock.getBuyPrice())
                .sum();
    }
}
