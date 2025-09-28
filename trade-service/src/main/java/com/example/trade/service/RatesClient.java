package com.example.trade.service; // Places the client in service package for DI

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker; // Annotation for circuit breaker
import java.math.BigDecimal; // BigDecimal for precise rate values
import java.util.Map; // Map to parse simple JSON responses
import org.springframework.beans.factory.annotation.Value; // Inject base URL
import org.springframework.cache.annotation.Cacheable; // Enable caching of rate lookups
import org.springframework.http.ResponseEntity; // Represents HTTP response
import org.springframework.stereotype.Service; // Marks class as a service bean
import org.springframework.web.client.RestClientException; // Exception for REST failures
import org.springframework.web.client.RestTemplate; // Simple HTTP client

/**
 * RatesClient fetches FX rates from rates-service with caching and circuit breaker.
 */
@Service // Registers this class as a Spring service
public class RatesClient { // Defines the client class responsible for external calls

  private final RestTemplate restTemplate = new RestTemplate(); // Initializes a RestTemplate instance

  @Value("${rates.base-url}") // Reads rates service base URL from configuration
  private String ratesBaseUrl; // Stores the base URL for requests

  @Cacheable(cacheNames = "fxRates", key = "#base + ':' + #quote") // Caches by currency pair key
  @CircuitBreaker(name = "ratesClient", fallbackMethod = "fallbackRate") // Wraps method with circuit breaker
  public BigDecimal getRate(String base, String quote) { // Public method to obtain FX rate for pair
    try { // Attempts the HTTP call
      String url = ratesBaseUrl + "/api/rates?base=" + base + "&quote=" + quote; // Builds request URL
      ResponseEntity<Map> response = restTemplate.getForEntity(url, Map.class); // Performs GET expecting a simple map
      Map body = response.getBody(); // Extracts response body
      if (body == null || !body.containsKey("rate")) { // Validates required field presence
        throw new RestClientException("Invalid response from rates-service"); // Fails fast on invalid response
      }
      return new BigDecimal(body.get("rate").toString()); // Converts rate value to BigDecimal and returns
    } catch (RestClientException e) { // Catches REST-related exceptions
      throw e; // Re-throws to be handled by circuit breaker
    }
  }

  private BigDecimal fallbackRate(String base, String quote, Throwable throwable) { // Fallback invoked when circuit is open or call fails
    return BigDecimal.ONE; // Returns neutral rate as a safe default for demo
  }
}

