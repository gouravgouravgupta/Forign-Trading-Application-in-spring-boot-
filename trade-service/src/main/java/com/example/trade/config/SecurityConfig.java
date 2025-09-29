package com.example.trade.config; // Places security configuration under config package

import com.example.trade.security.JwtAuthenticationFilter; // Imports custom JWT filter for request authentication
import org.springframework.context.annotation.Bean; // Enables defining beans
import org.springframework.context.annotation.Configuration; // Marks class as configuration
import org.springframework.http.HttpMethod; // Provides HTTP method constants for matchers
import org.springframework.security.authentication.AuthenticationManager; // AuthenticationManager bean exposure
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration; // Access to auth config
import org.springframework.security.config.annotation.web.builders.HttpSecurity; // Fluent HTTP security builder
import org.springframework.security.config.http.SessionCreationPolicy; // Configures stateless sessions
import org.springframework.security.web.SecurityFilterChain; // Exposes the filter chain bean
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter; // Allows inserting custom filter

/**
 * SecurityConfig configures HTTP security with stateless JWT authentication.
 */
@Configuration // Registers this class as a Spring configuration source
public class SecurityConfig { // Defines security bean configuration

  private final JwtAuthenticationFilter jwtAuthenticationFilter; // Holds reference to custom JWT filter

  public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) { // Constructor injection for filter
    this.jwtAuthenticationFilter = jwtAuthenticationFilter; // Stores injected filter
  }

  @Bean // Exposes the SecurityFilterChain bean to configure security rules
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception { // Builds the filter chain
    http.csrf(csrf -> csrf.disable()) // Disables CSRF as tokens are used instead of cookies
        .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // Ensures stateless sessions
        .authorizeHttpRequests(auth -> auth // Starts authorization rule configuration
            .requestMatchers(HttpMethod.POST, "/api/auth/token").permitAll() // Allows token issuance without authentication
            .requestMatchers("/actuator/**", "/v3/api-docs/**", "/swagger-ui/**").permitAll() // Opens monitoring and docs endpoints
            .anyRequest().authenticated() // Requires authentication for all other endpoints
        );
    http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class); // Inserts JWT filter before username/password filter
    return http.build(); // Builds and returns the filter chain
  }

  @Bean // Exposes AuthenticationManager to support authentication endpoints if needed
  public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception { // Obtains manager from configuration
    return configuration.getAuthenticationManager(); // Returns the framework-managed AuthenticationManager
  }
}

