package com.example.rates.web; // Declares controller package for the rates service

import java.math.BigDecimal; // BigDecimal for rate precision
import java.util.Map; // Map for simple JSON response
import java.util.Random; // Random generator for deterministic demo rate calculation
import org.springframework.cache.annotation.Cacheable; // Caches rate responses
import org.springframework.http.ResponseEntity; // HTTP response wrapper
import org.springframework.web.bind.annotation.GetMapping; // Maps GET requests
import org.springframework.web.bind.annotation.RequestParam; // Binds query parameters
import org.springframework.web.bind.annotation.RestController; // Marks as REST controller

/**
 * RatesController serves FX rates, caching frequently requested pairs.
 */
@RestController // Registers this as a REST controller
public class RatesController { // Defines rate endpoints

  @GetMapping("/api/rates") // Exposes GET /api/rates endpoint
  @Cacheable(cacheNames = "fxRates", key = "#base + ':' + #quote") // Caches by currency pair key
  public ResponseEntity<Map<String, Object>> getRate(@RequestParam String base, @RequestParam String quote) { // Returns a synthetic rate
    BigDecimal rate = generateDemoRate(base, quote); // Computes a pseudo-random deterministic rate
    return ResponseEntity.ok(Map.of("base", base, "quote", quote, "rate", rate)); // Responds with JSON payload
  }

  private BigDecimal generateDemoRate(String base, String quote) { // Generates a stable demo rate across calls
    long seed = (base + ":" + quote).hashCode(); // Builds a seed from currency pair
    Random rng = new Random(seed); // Creates PRNG with deterministic seed
    double val = 0.5 + (rng.nextDouble() * 1.5); // Constrains rate to [0.5, 2.0)
    return BigDecimal.valueOf(Math.round(val * 10000d) / 10000d); // Rounds to 4 decimals
  }
}

