//funções declaraticas function nomeDaFunção(){instruções;}
/* function funcao(){
    console.log("Uma menssagem de uma função declarativa")
}

funcao() */

//EXPRESSÕES DE FUNÇÕES "são funções atribuidas à expressões. A nomeação das funções por expressão é opcional:
//com nomeação
var funcao = function(){
    console.log("sou uma menssagem de fução de expressão");
}
funcao();

//OU
var funcao1 = function funcao1(){
    console.log("sou uma menssagem de função de expressão tbm!")
}
funcao1()

//ARROW FUNCTION "são funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas. deve ser declarada com parênteses "()", seguido de "=>" e depois "{}"."

var funcao3 = () => {
    console.log("sou uma arrow função!");
}
funcao3()

//OPERAÇÕES ARITIMÉTICA
//Number() - para converter valores em números
//Prompt() - para registrar entradas de usuários
//Alert() - para mostrar menssagens ao usuário
//Template Strings - para usar strings junto com expressões ou variáveis;

// O resto vai ser feito em outro arquivo chamado calculadora.js