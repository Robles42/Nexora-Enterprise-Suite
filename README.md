# Nexora Enterprise Suite

Nexora es una arquitectura de microservicios diseñada para la gestión empresarial, integrando tecnologías de alto rendimiento como Java Spring Boot, FastAPI (Python) y PHP, orquestados mediante contenedores con Docker.

## Arquitectura del Sistema

El proyecto utiliza un API Gateway con Nginx para centralizar el tráfico y redirigirlo a los servicios correspondientes:

* Auth Service (Java 17): Gestión de usuarios y seguridad con Spring Boot.
* AI Engine (Python 3.11): Motor de procesamiento de datos y algoritmos de IA con FastAPI.
* Billing Module (PHP 8.2): Sistema de facturación y generación de reportes.
* Database (MySQL 8.0): Persistencia de datos centralizada.
* Gateway (Nginx): Punto de entrada único y Proxy Inverso.

## Tecnologías Utilizadas

* Lenguajes: Java, Python, PHP, SQL.
* Infraestructura: Docker y Docker Compose.
* Servidor Web: Nginx.
* Sistema Operativo de Desarrollo: Fedora Linux.

## Instalación y Despliegue

### Requisitos previos
* Docker y Docker Compose instalados.
* Disponibilidad de los puertos 80, 8000, 8081, 8082 y 3306.

### Pasos para iniciar
1. Clonar el repositorio:
   git clone https://github.com/Robles42/Nexora-Enterprise-Suite.git
   cd Nexora-Enterprise-Suite

2. Desplegar los contenedores:
   docker compose up -d

3. Acceso al sistema:
   * Dashboard: http://localhost
   * AI API Docs: http://localhost:8000/docs

## Notas para usuarios de Fedora
Debido a las políticas de seguridad de SELinux en Fedora, es necesario aplicar el contexto correcto a la carpeta del gateway para evitar errores de permisos (Permission Denied):



---
Desarrollado por Santiago Robles (Robles42) - Ingeniería en Tecnología e Innovación Digital.
EOF
