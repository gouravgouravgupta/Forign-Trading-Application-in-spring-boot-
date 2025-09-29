package com.example.trade.security; // Declares the security package containing filters and token helpers

import io.jsonwebtoken.Claims; // Imports Claims to access token payload
import io.jsonwebtoken.Jwts; // Imports Jwts builder/parser utilities
import jakarta.servlet.FilterChain; // Represents the filter chain
import jakarta.servlet.ServletException; // Exception thrown during filter processing
import jakarta.servlet.http.HttpServletRequest; // HTTP request abstraction
import jakarta.servlet.http.HttpServletResponse; // HTTP response abstraction
import java.io.IOException; // IO exception type
import java.util.Collections; // Provides immutable collection helpers
import org.springframework.beans.factory.annotation.Value; // Injects property values
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken; // Represents authenticated user token
import org.springframework.security.core.Authentication; // Authentication abstraction
import org.springframework.security.core.context.SecurityContextHolder; // Holds auth info for the current thread
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource; // Populates web auth details
import org.springframework.stereotype.Component; // Marks class as a Spring-managed component
import org.springframework.web.filter.OncePerRequestFilter; // Ensures filter runs once per request

/**
 * JwtAuthenticationFilter validates JWTs and sets Authentication in the SecurityContext.
 */
@Component // Registers this filter as a bean for injection and auto-detection
public class JwtAuthenticationFilter extends OncePerRequestFilter { // Extends filter that executes once per request

  @Value("${security.jwt.secret}") // Injects the signing secret from configuration
  private String jwtSecret; // Holds the secret for token verification

  @Override // Overrides the filter method to process incoming requests
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException { // Declares possible exceptions
    String authHeader = request.getHeader("Authorization"); // Reads the Authorization header
    if (authHeader != null && authHeader.startsWith("Bearer ")) { // Checks for Bearer token format
      String token = authHeader.substring(7); // Extracts the JWT after "Bearer " prefix
      try { // Attempts to parse and validate the token
        Claims claims = Jwts.parserBuilder() // Starts building the parser
            .setSigningKey(jwtSecret.getBytes()) // Configures the signing key to verify signature
            .build() // Builds the parser
            .parseClaimsJws(token) // Parses and validates the JWS token
            .getBody(); // Retrieves claims from the token
        String subject = claims.getSubject(); // Extracts the subject (username/user id)
        if (subject != null && SecurityContextHolder.getContext().getAuthentication() == null) { // Ensures no existing auth
          Authentication authentication = new UsernamePasswordAuthenticationToken(subject, null, Collections.emptyList()); // Creates an authenticated token with no authorities
          ((UsernamePasswordAuthenticationToken) authentication).setDetails(new WebAuthenticationDetailsSource().buildDetails(request)); // Adds web details such as remote address
          SecurityContextHolder.getContext().setAuthentication(authentication); // Stores the authentication in the context
        }
      } catch (Exception ignored) { // Silently ignores invalid tokens to proceed as unauthenticated
      }
    }
    filterChain.doFilter(request, response); // Continues filter chain regardless of authentication state
  }
}

