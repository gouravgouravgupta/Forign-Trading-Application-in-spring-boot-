package com.example.trade.config; // Declares configuration classes for the trade service

import java.util.HashMap; // Map implementation for producer configs
import java.util.Map; // Map interface for configuration
import org.apache.kafka.clients.producer.ProducerConfig; // Kafka producer configuration keys
import org.apache.kafka.common.serialization.StringSerializer; // Serializer for record keys
import org.springframework.context.annotation.Bean; // Annotation to declare beans
import org.springframework.context.annotation.Configuration; // Marks class as configuration
import org.springframework.kafka.core.DefaultKafkaProducerFactory; // Factory for Kafka producers
import org.springframework.kafka.core.KafkaTemplate; // High-level Kafka sending abstraction
import org.springframework.kafka.core.ProducerFactory; // ProducerFactory interface
import org.springframework.kafka.support.serializer.JsonSerializer; // Serializer for JSON values

/**
 * KafkaConfig configures a KafkaTemplate that serializes values as JSON for events.
 */
@Configuration // Registers this as a configuration class
public class KafkaConfig { // Defines Kafka-related bean configuration

  @Bean // Declares a ProducerFactory bean
  public ProducerFactory<String, Object> producerFactory() { // Creates a producer factory for String keys and JSON values
    Map<String, Object> config = new HashMap<>(); // Initializes config map
    config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "kafka:9092"); // Points to Kafka broker; override via env in prod
    config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class); // Configures key serializer
    config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class); // Configures value serializer as JSON
    return new DefaultKafkaProducerFactory<>(config); // Returns a producer factory with the provided config
  }

  @Bean // Declares a KafkaTemplate bean
  public KafkaTemplate<String, Object> kafkaTemplate(ProducerFactory<String, Object> producerFactory) { // Builds KafkaTemplate using the ProducerFactory
    return new KafkaTemplate<>(producerFactory); // Returns configured KafkaTemplate for sending events
  }
}

