# GERÊNCIADOR DE CHAVES SSH

## Criar chave ssh
> ssh-keygen -t ed25519 -C "email@mail.com"
- Ir até o diretório criado: .../.ssh

## Pegar chave publica e colar no github
> cat id_ed25519.pub
- Dentro do github: em configurações > gerenciar chaves > "criar novo perfil para essa nova chave".

## Eval, o gerenciador automático
> eval $(ssh-agent -s)

> ssh-add id_ed25519