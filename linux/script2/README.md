# SERVIDOR WEB APACHE

**Script que baixa instala e ativa o servidor web apache automaticamente para sistemas baseado em debian**
- todo procedimento é feito na pasta pública "/tmp" do linux. Se não tiver essa pasta, crie ela na raiz.
  - > sudo mkdir /tmp
  - > sudo chmod 777 /tmp
- O servidor vai estar localizado no diretório: /var/www/html
**Para acessar o seu seu servidor pela internet é só colocar seu ip na url do navegador. Você pode ver ele com um dos comandos**
- > ifconfig
- ***ou*** 
- > ip a
- O arquivo index.html no diretório /var/www/html é o arquivo principal que exibe a pagina main no seu navegador, o resto dos arquivos são todas as funcionalidades que é direcionado para esse index.html