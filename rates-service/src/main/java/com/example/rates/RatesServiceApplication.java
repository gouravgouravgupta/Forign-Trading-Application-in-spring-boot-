package com.example.rates; // Declares the base package of the rates service

import org.springframework.boot.SpringApplication; // Imports SpringApplication to run the app
import org.springframework.boot.autoconfigure.SpringBootApplication; // Enables auto-configuration and component scanning
import org.springframework.cache.annotation.EnableCaching; // Enables Spring caching abstraction

/**
 * Entry point for the Rates Service microservice.
 */
@SpringBootApplication // Identifies this as a Spring Boot app
@EnableCaching // Activates caching to speed up frequent rate lookups
public class RatesServiceApplication { // Main application class

  public static void main(String[] args) { // Process entry point
    SpringApplication.run(RatesServiceApplication.class, args); // Bootstraps the application
  }
}

