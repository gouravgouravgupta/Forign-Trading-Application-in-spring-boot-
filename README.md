# Foreign Trading Microservices (Spring Boot)

A production-style, containerized microservices application for foreign trading, featuring:

- Trade microservice (`trade-service`) with PostgreSQL, JWT auth, Kafka event emission, Redis caching
- Rates microservice (`rates-service`) with Redis caching
- Nginx load balancer in front of two rates instances
- Circuit breakers (Resilience4j) and client-side caching
- Monitoring via Spring Boot Actuator, Prometheus, and Grafana
- Fully dockerized with a commented `docker-compose.yml`

## Quickstart

1. Ensure Docker and Docker Compose are installed.
2. From the project root:

```bash
docker compose up --build -d
```

- API base URLs:
  - Trade Service: `http://localhost:8081`
  - Rates LB: `http://localhost:8080`
  - Prometheus: `http://localhost:9090`
  - Grafana: `http://localhost:3000` (admin/admin)

## Usage

1) Obtain a JWT token:
```bash
curl -s -X POST http://localhost:8081/api/auth/token \
  -H 'Content-Type: application/json' \
  -d '{"username":"demo"}' | jq -r .token
```

2) Create a trade (replace TOKEN):
```bash
curl -s -X POST http://localhost:8081/api/trades \
  -H "Authorization: Bearer TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{"baseCurrency":"USD","quoteCurrency":"EUR","amount":1000}'
```

3) List trades:
```bash
curl -s http://localhost:8081/api/trades -H "Authorization: Bearer TOKEN"
```

## Build locally (optional)

Install Java 17 and Maven, then run:
```bash
mvn -DskipTests package
```

## Monitoring

- Prometheus scrapes `/actuator/prometheus` on both services.
- Grafana can be pointed to Prometheus at `http://prometheus:9090` inside the Docker network.

## Repository Structure

- `common`: shared DTOs and event payloads
- `trade-service`: business logic, REST APIs, JPA, security, Kafka, caching
- `rates-service`: FX rates API, caching
- `nginx`: Nginx config for load balancing
- `monitoring`: Prometheus configuration
- `docker-compose.yml`: full stack orchestration

## Notes

- This demo uses `ddl-auto=update` for convenience; prefer migrations (e.g., Flyway) in production.
- Secrets are configured via environment variables; replace defaults before deployment.
- Kafka topic auto-creation is enabled for simplicity. 
