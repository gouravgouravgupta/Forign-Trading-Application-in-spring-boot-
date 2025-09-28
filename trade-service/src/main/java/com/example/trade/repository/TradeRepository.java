package com.example.trade.repository; // Declares the repository package for Spring Data interfaces

import com.example.trade.domain.Trade; // Imports the Trade entity
import org.springframework.data.jpa.repository.JpaRepository; // Imports Spring Data JPA repository base interface

/**
 * TradeRepository provides CRUD operations for Trade entities.
 */
public interface TradeRepository extends JpaRepository<Trade, String> { // Extends JpaRepository with entity type and id type
}

