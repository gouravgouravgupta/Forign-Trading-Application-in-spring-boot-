# Build stage using JDK 17 for compiling the service
FROM eclipse-temurin:17-jdk AS build

# Working directory for build context
WORKDIR /app

# Copy parent and modules POM for dependency resolution
COPY pom.xml ./
COPY common/pom.xml ./common/pom.xml
COPY rates-service/pom.xml ./rates-service/pom.xml

# Download dependencies using Maven for better caching
RUN --mount=type=cache,target=/root/.m2 mvn -q -f pom.xml -pl common,rates-service -am -DskipTests dependency:go-offline

# Copy source code for compilation
COPY common ./common
COPY rates-service ./rates-service

# Package the service
RUN --mount=type=cache,target=/root/.m2 mvn -q -f pom.xml -pl rates-service -am -DskipTests package

# Runtime stage using JRE 17
FROM eclipse-temurin:17-jre

# Create a non-root user
RUN useradd -ms /bin/sh appuser
USER appuser

# Working directory for runtime
WORKDIR /app

# Copy the built jar
COPY --from=build /app/rates-service/target/rates-service-*.jar app.jar

# Expose service port
EXPOSE 8082

# Run the application
ENTRYPOINT ["java","-XX:+UseContainerSupport","-XX:MaxRAMPercentage=75.0","-jar","app.jar"]

