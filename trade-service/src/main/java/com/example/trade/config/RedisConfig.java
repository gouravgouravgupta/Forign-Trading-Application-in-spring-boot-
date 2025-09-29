package com.example.trade.config; // Declares the configuration package for trade-service

import java.time.Duration; // Imports Duration to define cache TTL
import org.springframework.cache.CacheManager; // Imports CacheManager abstraction
import org.springframework.context.annotation.Bean; // Imports Bean annotation to expose beans
import org.springframework.context.annotation.Configuration; // Marks this class as a configuration source
import org.springframework.data.redis.cache.RedisCacheConfiguration; // Provides Redis cache configuration
import org.springframework.data.redis.cache.RedisCacheManager; // Provides Redis-backed CacheManager
import org.springframework.data.redis.connection.RedisConnectionFactory; // Connection factory to Redis
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory; // Lettuce-based Redis connection factory
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer; // Serializer for cache values
import org.springframework.data.redis.serializer.RedisSerializationContext; // Configures serializers for Redis cache
import org.springframework.data.redis.serializer.StringRedisSerializer; // Serializer for keys

/**
 * RedisConfig wires Redis as the cache provider with sensible defaults.
 */
@Configuration // Indicates that this class declares Spring beans
public class RedisConfig { // Defines Redis-related bean configuration

  @Bean // Exposes a Lettuce Redis connection factory to the context
  public RedisConnectionFactory redisConnectionFactory() { // Builds a connection factory
    return new LettuceConnectionFactory(); // Uses host/port from Spring configuration
  }

  @Bean // Exposes a CacheManager backed by Redis
  public CacheManager cacheManager(RedisConnectionFactory connectionFactory) { // Accepts the Redis connection
    RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig() // Starts from defaults
        .entryTtl(Duration.ofMinutes(5)) // Sets a default TTL of 5 minutes for cached entries
        .disableCachingNullValues() // Avoids caching null values to save space
        .serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(new StringRedisSerializer())) // Serializes keys as plain strings
        .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(new GenericJackson2JsonRedisSerializer())); // Serializes values as JSON
    return RedisCacheManager.builder(connectionFactory).cacheDefaults(config).build(); // Builds the CacheManager
  }
}

