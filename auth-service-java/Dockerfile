FROM amazoncorretto:17-alpine
WORKDIR /app
COPY mvnw .
RUN chmod +x mvnw
COPY . .
CMD ["./mvnw"]
