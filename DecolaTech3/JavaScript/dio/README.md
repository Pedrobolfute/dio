# ESTRUTURA BASE (SIMPLES) PARA PROJETOS PEQUENOS

- uso da pasta assets (para arquivos não HTML)
  - faz parte de aruqitetura...

## HTML

- <"meta name="viewport" content="width=device-width, initial-scale=1.0" ">
  - aqui redimensiona para adaptar nas telas... (fica no head)

- <"link rel="stylesheet" href="assets/css/style.css" / ">
  - rel: aqui é o relacionamento do arquivo que vou chamar e o que está chamando; O relacionamento é uma stylesheet, uma folha de estilo (uma propriedade)
    - QUEST: Será que há outros tipos de relacionamento, sem ser o stylesheet?
  - href = o lugar aonde o arquivo está
  - sempre quando for chamar css tem que usar.
  - 
 - <"script src="assets/js/script.js" "><"/script ">
   - chamando o script
   - src: a origem do script...
   - como boa prática (nem sempre), colocamos o script no final da página html (linha entes do fechamento <"/html ">)
     - para o script não atrapalhar no carregamento procedural da pag html, tentando mudar valores que nem estão setados ainda...

## NO CONSOLE DO NAVEGADOR

### Comando

- document.getElementsByTagName("h1")
  - mostro os meus elementos da pagina e seu índice, como h1, p, h2...
    - mas nesse caso vai printar sometne os h1 e seus indices
- var heading1 = document.getElementsByTagName("h1")[0]
  - posso colocar em uma variável
- heading1
  - posso chamar a variável
- heading1.style.color = "red"
  - posso mudar o estilo do elemento e muito mais, usando o java script
    - aqui nesse caso, mudei o css daquele elemento.

### DOM

- tudo isso acima, está relacionado a arquitetura DOM
