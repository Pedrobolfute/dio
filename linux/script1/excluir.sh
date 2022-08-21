#!/bin/bash

caminho="/home/pedro/workspace/dio/linux/script1"


echo -e "\n-Excluindo pastas em /home/pedro/workspace/dio/linux/script1... \n\n"

rm -r -f $caminho/publico

rm -r -f $caminho/adm

rm -r -f $caminho/ven

rm -r -f $caminho/sec


echo -e "\n-Excluindo os grupos... \n\n"

groupdel -f GRP_ADM

groupdel -f GRP_VEN

groupdel -f GRP_SEC


echo -e "\n-Excluindo usuários... \n\n"

userdel -r -f carlos

userdel -r -f maria

userdel -r -f joao


userdel -r -f debora

userdel -r -f sebastiana

userdel -r -f roberto


userdel -r -f josefina

userdel -r -f amanda

userdel -r -f rogerio


echo -e "\n\n-Prontinho! Todos usuários e grupos criados com o script 'criar.sh' foram removidos. \n\n"
