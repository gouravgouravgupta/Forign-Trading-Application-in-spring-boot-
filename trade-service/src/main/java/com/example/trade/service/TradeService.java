package com.example.trade.service; // Declares the service package containing business logic

import com.example.common.dto.TradeDto; // Imports shared TradeDto for API data transfer
import com.example.common.events.TradeCreatedEvent; // Imports event model to emit on trade creation
import com.example.trade.domain.Trade; // Imports Trade entity for persistence
import com.example.trade.repository.TradeRepository; // Imports repository for data access
import java.math.BigDecimal; // BigDecimal used for money and rates
import java.time.Instant; // Instant for timestamps
import java.util.List; // List for returning collections of DTOs
import java.util.UUID; // UUID to generate trade identifiers
import org.springframework.kafka.core.KafkaTemplate; // KafkaTemplate for publishing events
import org.springframework.stereotype.Service; // Marks class as service bean
import org.springframework.transaction.annotation.Transactional; // Wraps operations in transactions

/**
 * TradeService encapsulates business logic for creating and retrieving trades.
 */
@Service // Registers this class as a Spring-managed service
public class TradeService { // Defines the service class for trade operations

  private final TradeRepository tradeRepository; // Holds repository dependency
  private final RatesClient ratesClient; // Holds client for fetching FX rates
  private final KafkaTemplate<String, Object> kafkaTemplate; // Publishes events to Kafka topics

  public TradeService(TradeRepository tradeRepository, RatesClient ratesClient, KafkaTemplate<String, Object> kafkaTemplate) { // Constructor injection of dependencies
    this.tradeRepository = tradeRepository; // Assigns repository
    this.ratesClient = ratesClient; // Assigns rates client
    this.kafkaTemplate = kafkaTemplate; // Assigns Kafka template
  }

  @Transactional // Ensures atomicity of create operation
  public TradeDto createTrade(String base, String quote, BigDecimal amount) { // Creates a new trade given currencies and amount
    BigDecimal rate = ratesClient.getRate(base, quote); // Obtains latest rate from rates-service
    Trade trade = new Trade( // Constructs a new Trade entity
        UUID.randomUUID().toString(), // Generates a unique identifier
        base, // Sets base currency
        quote, // Sets quote currency
        amount, // Sets traded amount
        rate, // Stores executed rate
        Instant.now() // Records current time
    );
    Trade saved = tradeRepository.save(trade); // Persists the Trade entity to PostgreSQL
    TradeDto dto = new TradeDto(saved.getId(), saved.getBaseCurrency(), saved.getQuoteCurrency(), saved.getAmount(), saved.getRate(), saved.getCreatedAt()); // Maps entity to DTO
    TradeCreatedEvent event = new TradeCreatedEvent(dto.getId(), dto.getBaseCurrency(), dto.getQuoteCurrency(), dto.getAmount(), dto.getRate(), dto.getCreatedAt()); // Builds event payload
    kafkaTemplate.send("trade.events", dto.getId(), event); // Publishes the event keyed by trade id
    return dto; // Returns the created trade DTO
  }

  @Transactional(readOnly = true) // Marks method as read-only for better performance
  public List<TradeDto> listTrades() { // Returns all stored trades
    return tradeRepository.findAll().stream() // Loads all trades from the repository
        .map(t -> new TradeDto(t.getId(), t.getBaseCurrency(), t.getQuoteCurrency(), t.getAmount(), t.getRate(), t.getCreatedAt())) // Maps entity to DTO
        .toList(); // Collects results to a list
  }
}

