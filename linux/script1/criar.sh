#!/bin/bash

caminho="/home/pedro/workspace/dio/linux/script1"


echo "Criando pastas em /home/pedro/workspace/dio/linux/script1 ..."

mkdir $caminho/publico

mkdir $caminho/adm

mkdir $caminho/ven

mkdir $caminho/sec


echo "criando os grupos..."

groupadd GRP_ADM

groupadd GRP_VEN

groupadd GRP_SEC


echo "criando usuários e adicionando ao seus grupos..."

useradd carlos -G GRP_ADM -s /bin/bash

useradd maria -G GRP_ADM -s /bin/bash

useradd joao -G GRP_ADM -s /bin/bash


useradd debora -G GRP_VEN -s /bin/bash

useradd sebastiana -G GRP_VEN -s /bin/bash

useradd roberto -G GRP_VEN -s /bin/bash


useradd josefina -G GRP_SEC -s /bin/bash

useradd amanda -G GRP_SEC -s /bin/bash

useradd rogerio -G GRP_SEC -s /bin/bash


echo "mudando os donos dos diretórios..."

chown root:GRP_ADM $caminho/adm

chown root:GRP_VEN $caminho/ven

chown root:GRP_SEC $caminho/sec


echo "mudando permissões..."

chmod 777 $caminho/publico

chmod 770 $caminho/adm

chmod 770 $caminho/ven

chmod 770 $caminho/sec


echo "Prontinho!!!"
