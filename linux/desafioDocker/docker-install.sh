#! /bin/bash

echo -e "\n-Atualizando os pacotes do S.O...\n"
apt update -y

echo -e "\n\n-Instalando o docker...\n"
apt install docker docker.io -y

echo -e "\n\n-Configurando..."

docker volume create app

docker volume create data

docker pull mysql

docker run --name meubanco -v /var/lib/docker/volumes/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=senha123 -p 3306:3306 -d mysql:latest

echo -e "\n\n-Banco rodando em segundo plano:\n"

docker ps -a



