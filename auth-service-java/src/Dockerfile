FROM openjdk:17-jdk-slim
WORKDIR /app
# Para fines de este ejemplo rápido, usamos un JAR pre-compilado o un wrapper
COPY . .
# Comando simplificado para ejecutar una app Spring Boot
CMD ["./mvnw", "spring-boot:run"]