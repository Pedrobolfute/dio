#!/bin/bash

echo "Iniciando..."
echo " "
echo " "

echo " "
echo "atualizando o sistema, aguarde..."
echo " "
echo " "

apt update -y

echo " "
echo "Instalando unzip..."
echo " "
echo " "

apt install unzip -y

echo " "
echo "instalando servidor web, Apache..."
echo " "
echo " "

apt install apache2 -y

echo " "
echo "baixando e configurando o site principal do servidor..."
echo " "
echo " "

wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip -P /tmp


unzip /tmp/main.zip -d /tmp

rm /tmp/main.zip

rm /var/www/html/*

mv /tmp/linux-site-dio-main/* /var/www/html

echo " "
echo "Preparando para iniciar..."
echo " "
echo " "

service apache2 restart

systemctl status apache2.service

echo " "
echo " "
echo "Prontinho!!!"




