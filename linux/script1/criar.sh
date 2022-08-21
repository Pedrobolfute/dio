#!/bin/bash

caminho="/home/pedro/workspace/dio/linux/script1"


echo -e "\n-Criando pastas em /home/pedro/workspace/dio/linux/script1 ... \n\n"

mkdir $caminho/publico

mkdir $caminho/adm

mkdir $caminho/ven

mkdir $caminho/sec


echo -e "\n-Criando os grupos... \n\n"

groupadd GRP_ADM

groupadd GRP_VEN

groupadd GRP_SEC


echo -e "\n-Criando usuários e adicionando ao seus grupos... \n\n"

useradd carlos -G GRP_ADM -s /bin/bash

useradd maria -G GRP_ADM -s /bin/bash

useradd joao -G GRP_ADM -s /bin/bash


useradd debora -G GRP_VEN -s /bin/bash

useradd sebastiana -G GRP_VEN -s /bin/bash

useradd roberto -G GRP_VEN -s /bin/bash


useradd josefina -G GRP_SEC -s /bin/bash

useradd amanda -G GRP_SEC -s /bin/bash

useradd rogerio -G GRP_SEC -s /bin/bash


echo -e "\n-Mudando os donos dos diretórios... \n\n"

chown root:GRP_ADM $caminho/adm

chown root:GRP_VEN $caminho/ven

chown root:GRP_SEC $caminho/sec


echo -e "\n-Mudando permissões... \n\n"

chmod 777 $caminho/publico

chmod 770 $caminho/adm

chmod 770 $caminho/ven

chmod 770 $caminho/sec


echo -e "\n\n-Prontinho!!!\n"