package com.example.trade.web; // Declares the web layer package for controllers

import io.jsonwebtoken.Jwts; // Utility for building JWTs
import io.jsonwebtoken.SignatureAlgorithm; // Algorithm enum for token signing
import java.time.Instant; // Instant for current time
import java.util.Date; // Date required by JWT API for exp/iat
import org.springframework.beans.factory.annotation.Value; // Injects properties
import org.springframework.http.ResponseEntity; // Represents HTTP response with status/body
import org.springframework.web.bind.annotation.PostMapping; // Maps HTTP POST
import org.springframework.web.bind.annotation.RequestBody; // Binds request JSON to method parameters
import org.springframework.web.bind.annotation.RequestMapping; // Base path mapping
import org.springframework.web.bind.annotation.RestController; // Marks this class as REST controller

/**
 * AuthController issues demo JWT tokens.
 */
@RestController // Marks this class as a REST controller component
@RequestMapping("/api/auth") // Prefixes all endpoints with /api/auth
public class AuthController { // Defines authentication-related endpoints

  @Value("${security.jwt.secret}") // Reads JWT secret from configuration
  private String jwtSecret; // Stores the signing key

  @Value("${security.jwt.expiration-minutes}") // Reads token expiration window from configuration
  private long expirationMinutes; // Stores token lifetime in minutes

  public record TokenRequest(String username) {} // Compact record capturing username from client
  public record TokenResponse(String token) {} // Compact record to return the created token

  @PostMapping("/token") // Handles POST /api/auth/token
  public ResponseEntity<TokenResponse> issueToken(@RequestBody TokenRequest request) { // Issues a JWT for the given username
    Instant now = Instant.now(); // Captures current time
    Instant exp = now.plusSeconds(expirationMinutes * 60); // Computes expiration time
    String token = Jwts.builder() // Starts building a JWT
        .setSubject(request.username()) // Encodes the username as subject
        .setIssuedAt(Date.from(now)) // Sets issued-at timestamp
        .setExpiration(Date.from(exp)) // Sets expiration timestamp
        .signWith(SignatureAlgorithm.HS256, jwtSecret.getBytes()) // Signs the token using HS256 and secret
        .compact(); // Finalizes the token string
    return ResponseEntity.ok(new TokenResponse(token)); // Returns the token to the client
  }
}

