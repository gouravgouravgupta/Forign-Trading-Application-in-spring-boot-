# Uses Eclipse Temurin JDK 17 as build stage
FROM eclipse-temurin:17-jdk AS build

# Sets working directory inside the container for building
WORKDIR /app

# Copies Maven wrapper and project files for efficient caching
COPY pom.xml ./
COPY common/pom.xml ./common/pom.xml
COPY trade-service/pom.xml ./trade-service/pom.xml

# Pre-fetches dependencies to leverage Docker layer caching
RUN --mount=type=cache,target=/root/.m2 mvn -q -f pom.xml -pl common,trade-service -am -DskipTests dependency:go-offline

# Copies source code to build the artifact
COPY common ./common
COPY trade-service ./trade-service

# Builds the service JAR using Maven in non-interactive mode
RUN --mount=type=cache,target=/root/.m2 mvn -q -f pom.xml -pl trade-service -am -DskipTests package

# Runtime image using JRE 17 for lighter footprint
FROM eclipse-temurin:17-jre

# Creates a non-root user for security best practices
RUN useradd -ms /bin/sh appuser
USER appuser

# Sets working directory for runtime
WORKDIR /app

# Copies the built JAR from the build stage
COPY --from=build /app/trade-service/target/trade-service-*.jar app.jar

# Exposes the service port
EXPOSE 8081

# Runs the application with optimized JVM flags for containers
ENTRYPOINT ["java","-XX:+UseContainerSupport","-XX:MaxRAMPercentage=75.0","-jar","app.jar"]

