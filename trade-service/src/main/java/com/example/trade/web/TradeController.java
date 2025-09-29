package com.example.trade.web; // Declares the controller package for HTTP endpoints

import com.example.common.dto.TradeDto; // Imports TradeDto for request/response payloads
import com.example.trade.service.TradeService; // Imports service encapsulating business logic
import java.math.BigDecimal; // BigDecimal for amount passed in request
import java.util.List; // List collection for responses
import org.springframework.http.ResponseEntity; // Wrapper for HTTP status and body
import org.springframework.web.bind.annotation.GetMapping; // Maps GET requests
import org.springframework.web.bind.annotation.PostMapping; // Maps POST requests
import org.springframework.web.bind.annotation.RequestBody; // Binds request body JSON
import org.springframework.web.bind.annotation.RequestMapping; // Sets base path for controller
import org.springframework.web.bind.annotation.RestController; // Marks controller as RESTful

/**
 * TradeController exposes endpoints to create and list trades.
 */
@RestController // Identifies this class as a REST controller
@RequestMapping("/api/trades") // Prefixes endpoints with /api/trades
public class TradeController { // Defines HTTP endpoints for trade operations

  public record CreateTradeRequest(String baseCurrency, String quoteCurrency, BigDecimal amount) {} // Request body for create

  private final TradeService tradeService; // Holds reference to business service

  public TradeController(TradeService tradeService) { // Constructor injection of service
    this.tradeService = tradeService; // Assigns injected service
  }

  @PostMapping // Handles POST /api/trades to create a trade
  public ResponseEntity<TradeDto> create(@RequestBody CreateTradeRequest request) { // Creates trade from request payload
    TradeDto created = tradeService.createTrade(request.baseCurrency(), request.quoteCurrency(), request.amount()); // Delegates to service
    return ResponseEntity.ok(created); // Returns created trade DTO
  }

  @GetMapping // Handles GET /api/trades to list trades
  public ResponseEntity<List<TradeDto>> list() { // Retrieves list of all trades
    return ResponseEntity.ok(tradeService.listTrades()); // Returns the list as response
  }
}

