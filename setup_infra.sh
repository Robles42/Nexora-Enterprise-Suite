#!/bin/bash
echo "--- INICIANDO DESPLIEGUE NEXORA ---"
sudo systemctl restart docker
sudo docker-compose down --remove-orphans
sudo docker-compose build --no-cache
sudo docker-compose up -d
echo "--- SISTEMA LISTO EN http://localhost ---"
