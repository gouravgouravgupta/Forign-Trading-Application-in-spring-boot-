package com.example.rates.config; // Declares configuration package for rates-service

import java.time.Duration; // Duration to configure TTL
import org.springframework.cache.CacheManager; // Abstraction for caches
import org.springframework.context.annotation.Bean; // Exposes beans
import org.springframework.context.annotation.Configuration; // Marks config class
import org.springframework.data.redis.cache.RedisCacheConfiguration; // Redis cache config
import org.springframework.data.redis.cache.RedisCacheManager; // Redis-backed CacheManager
import org.springframework.data.redis.connection.RedisConnectionFactory; // Redis connection factory
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory; // Lettuce Redis connection
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer; // JSON value serializer
import org.springframework.data.redis.serializer.RedisSerializationContext; // Configures serialization
import org.springframework.data.redis.serializer.StringRedisSerializer; // Key serializer

/**
 * Configures Redis as the cache provider for the rates-service.
 */
@Configuration // Registers this class as configuration
public class RedisConfig { // Defines Redis configuration

  @Bean // Declares Redis connection factory bean
  public RedisConnectionFactory redisConnectionFactory() { // Builds the connection factory
    return new LettuceConnectionFactory(); // Uses Spring properties for host/port
  }

  @Bean // Declares CacheManager bean backed by Redis
  public CacheManager cacheManager(RedisConnectionFactory connectionFactory) { // Accepts connection factory
    RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig() // Base config
        .entryTtl(Duration.ofMinutes(2)) // Sets a 2-minute TTL for rates cache
        .disableCachingNullValues() // Skips null values
        .serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(new StringRedisSerializer())) // String keys
        .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(new GenericJackson2JsonRedisSerializer())); // JSON values
    return RedisCacheManager.builder(connectionFactory).cacheDefaults(config).build(); // Builds CacheManager
  }
}

