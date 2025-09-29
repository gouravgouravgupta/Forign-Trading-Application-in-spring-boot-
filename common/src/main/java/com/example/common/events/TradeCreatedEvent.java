package com.example.common.events; // Defines the package for event classes shared across services

import java.math.BigDecimal; // Imports BigDecimal for precise monetary values
import java.time.Instant; // Imports Instant to timestamp events with UTC time

/**
 * TradeCreatedEvent represents the domain event emitted when a trade is created.
 */
public class TradeCreatedEvent { // Declares the public class for the event payload

  private String tradeId; // Holds the unique identifier of the created trade
  private String baseCurrency; // Stores the base currency code (e.g., "USD")
  private String quoteCurrency; // Stores the quote currency code (e.g., "EUR")
  private BigDecimal amount; // Represents the traded amount in base currency
  private BigDecimal executedRate; // Captures the FX rate used for execution
  private Instant createdAt; // Records the creation timestamp of the trade

  public TradeCreatedEvent() {} // Default constructor required for serialization/deserialization

  public TradeCreatedEvent( // All-args constructor to conveniently instantiate the event
      String tradeId,
      String baseCurrency,
      String quoteCurrency,
      BigDecimal amount,
      BigDecimal executedRate,
      Instant createdAt) {
    this.tradeId = tradeId; // Assigns the trade identifier
    this.baseCurrency = baseCurrency; // Assigns the base currency code
    this.quoteCurrency = quoteCurrency; // Assigns the quote currency code
    this.amount = amount; // Assigns the trade amount
    this.executedRate = executedRate; // Assigns the executed FX rate
    this.createdAt = createdAt; // Assigns the creation timestamp
  }

  public String getTradeId() { // Getter for tradeId
    return tradeId; // Returns the trade identifier
  }

  public void setTradeId(String tradeId) { // Setter for tradeId
    this.tradeId = tradeId; // Updates the trade identifier field
  }

  public String getBaseCurrency() { // Getter for baseCurrency
    return baseCurrency; // Returns the base currency code
  }

  public void setBaseCurrency(String baseCurrency) { // Setter for baseCurrency
    this.baseCurrency = baseCurrency; // Updates the base currency field
  }

  public String getQuoteCurrency() { // Getter for quoteCurrency
    return quoteCurrency; // Returns the quote currency code
  }

  public void setQuoteCurrency(String quoteCurrency) { // Setter for quoteCurrency
    this.quoteCurrency = quoteCurrency; // Updates the quote currency field
  }

  public BigDecimal getAmount() { // Getter for amount
    return amount; // Returns the amount
  }

  public void setAmount(BigDecimal amount) { // Setter for amount
    this.amount = amount; // Updates the amount field
  }

  public BigDecimal getExecutedRate() { // Getter for executedRate
    return executedRate; // Returns the executed FX rate
  }

  public void setExecutedRate(BigDecimal executedRate) { // Setter for executedRate
    this.executedRate = executedRate; // Updates the executed rate field
  }

  public Instant getCreatedAt() { // Getter for createdAt
    return createdAt; // Returns the creation timestamp
  }

  public void setCreatedAt(Instant createdAt) { // Setter for createdAt
    this.createdAt = createdAt; // Updates the creation timestamp field
  }
}

