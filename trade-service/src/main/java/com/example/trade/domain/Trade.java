package com.example.trade.domain; // Declares the domain package containing JPA entities

import jakarta.persistence.Column; // Imports JPA annotation to configure column details
import jakarta.persistence.Entity; // Imports JPA annotation to mark the class as an entity
import jakarta.persistence.Id; // Imports JPA annotation to mark the primary key field
import jakarta.persistence.Table; // Imports JPA annotation to specify the table name
import java.math.BigDecimal; // Imports BigDecimal for precise monetary values
import java.time.Instant; // Imports Instant to store timestamps in UTC

/**
 * Trade represents a foreign exchange trade persisted in PostgreSQL.
 */
@Entity // Instructs JPA/Hibernate to map this class to a database table
@Table(name = "trades") // Defines the table name in the database schema
public class Trade { // Declares the Trade entity class

  @Id // Marks the primary key column for this entity
  @Column(name = "id", nullable = false, updatable = false) // Configures column properties for the id field
  private String id; // Holds the unique identifier (UUID string) for the trade

  @Column(name = "base_currency", nullable = false, length = 3) // Stores the ISO 4217 base currency code
  private String baseCurrency; // Field for base currency

  @Column(name = "quote_currency", nullable = false, length = 3) // Stores the ISO 4217 quote currency code
  private String quoteCurrency; // Field for quote currency

  @Column(name = "amount", nullable = false, precision = 19, scale = 4) // Persists the traded amount with scale
  private BigDecimal amount; // Field for amount traded

  @Column(name = "rate", nullable = false, precision = 19, scale = 8) // Persists the FX rate used to execute
  private BigDecimal rate; // Field for executed rate

  @Column(name = "created_at", nullable = false) // Stores the trade creation timestamp
  private Instant createdAt; // Field for creation time in UTC

  public Trade() {} // Default constructor required by JPA

  public Trade(String id, String baseCurrency, String quoteCurrency, BigDecimal amount, BigDecimal rate, Instant createdAt) { // All-args constructor for convenience
    this.id = id; // Sets id
    this.baseCurrency = baseCurrency; // Sets base currency
    this.quoteCurrency = quoteCurrency; // Sets quote currency
    this.amount = amount; // Sets amount
    this.rate = rate; // Sets rate
    this.createdAt = createdAt; // Sets created timestamp
  }

  public String getId() { // Getter for id
    return id; // Returns id
  }

  public void setId(String id) { // Setter for id
    this.id = id; // Updates id
  }

  public String getBaseCurrency() { // Getter for baseCurrency
    return baseCurrency; // Returns base currency
  }

  public void setBaseCurrency(String baseCurrency) { // Setter for baseCurrency
    this.baseCurrency = baseCurrency; // Updates base currency
  }

  public String getQuoteCurrency() { // Getter for quoteCurrency
    return quoteCurrency; // Returns quote currency
  }

  public void setQuoteCurrency(String quoteCurrency) { // Setter for quoteCurrency
    this.quoteCurrency = quoteCurrency; // Updates quote currency
  }

  public BigDecimal getAmount() { // Getter for amount
    return amount; // Returns amount
  }

  public void setAmount(BigDecimal amount) { // Setter for amount
    this.amount = amount; // Updates amount
  }

  public BigDecimal getRate() { // Getter for rate
    return rate; // Returns rate
  }

  public void setRate(BigDecimal rate) { // Setter for rate
    this.rate = rate; // Updates rate
  }

  public Instant getCreatedAt() { // Getter for createdAt
    return createdAt; // Returns timestamp
  }

  public void setCreatedAt(Instant createdAt) { // Setter for createdAt
    this.createdAt = createdAt; // Updates timestamp
  }
}

