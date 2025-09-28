package com.example.common.dto; // Places the DTO in the shared DTO package

import java.math.BigDecimal; // Imports BigDecimal for monetary precision
import java.time.Instant; // Imports Instant for timestamps

/**
 * TradeDto represents trade data used for API requests and responses.
 */
public class TradeDto { // Declares the DTO class used across services

  private String id; // Unique identifier of the trade
  private String baseCurrency; // Base currency code (ISO 4217)
  private String quoteCurrency; // Quote currency code (ISO 4217)
  private BigDecimal amount; // Trade amount in base currency
  private BigDecimal rate; // FX rate applied to the trade
  private Instant createdAt; // UTC timestamp when the trade was created

  public TradeDto() {} // No-args constructor for serialization frameworks

  public TradeDto(String id, String baseCurrency, String quoteCurrency, BigDecimal amount, BigDecimal rate, Instant createdAt) {
    this.id = id; // Initializes the trade identifier
    this.baseCurrency = baseCurrency; // Initializes base currency
    this.quoteCurrency = quoteCurrency; // Initializes quote currency
    this.amount = amount; // Initializes amount
    this.rate = rate; // Initializes rate
    this.createdAt = createdAt; // Initializes timestamp
  }

  public String getId() { // Getter for id
    return id; // Returns trade id
  }

  public void setId(String id) { // Setter for id
    this.id = id; // Sets trade id
  }

  public String getBaseCurrency() { // Getter for baseCurrency
    return baseCurrency; // Returns base currency
  }

  public void setBaseCurrency(String baseCurrency) { // Setter for baseCurrency
    this.baseCurrency = baseCurrency; // Sets base currency
  }

  public String getQuoteCurrency() { // Getter for quoteCurrency
    return quoteCurrency; // Returns quote currency
  }

  public void setQuoteCurrency(String quoteCurrency) { // Setter for quoteCurrency
    this.quoteCurrency = quoteCurrency; // Sets quote currency
  }

  public BigDecimal getAmount() { // Getter for amount
    return amount; // Returns amount
  }

  public void setAmount(BigDecimal amount) { // Setter for amount
    this.amount = amount; // Sets amount
  }

  public BigDecimal getRate() { // Getter for rate
    return rate; // Returns rate
  }

  public void setRate(BigDecimal rate) { // Setter for rate
    this.rate = rate; // Sets rate
  }

  public Instant getCreatedAt() { // Getter for createdAt
    return createdAt; // Returns timestamp
  }

  public void setCreatedAt(Instant createdAt) { // Setter for createdAt
    this.createdAt = createdAt; // Sets timestamp
  }
}

