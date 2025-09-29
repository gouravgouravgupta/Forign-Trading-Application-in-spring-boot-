package com.example.trade; // Declares the base package for the trade service

import org.springframework.boot.SpringApplication; // Imports SpringApplication to bootstrap the app
import org.springframework.boot.autoconfigure.SpringBootApplication; // Enables Spring Boot auto-configuration
import org.springframework.cache.annotation.EnableCaching; // Enables annotation-driven caching support
import org.springframework.kafka.annotation.EnableKafka; // Enables Kafka listener infrastructure

/**
 * Entry point for the Trade Service microservice.
 */
@SpringBootApplication // Marks this class as a Spring Boot application configuration
@EnableCaching // Activates Spring's caching abstraction for performance improvements
@EnableKafka // Activates Spring for Apache Kafka support
public class TradeServiceApplication { // Defines the application class

  public static void main(String[] args) { // Main method to run the service
    SpringApplication.run(TradeServiceApplication.class, args); // Launches the Spring application
  }
}

