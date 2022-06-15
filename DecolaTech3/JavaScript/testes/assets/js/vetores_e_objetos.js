let array = ["string", 1,true, [1, "woow"]];

//console.log(array);

//foreach
//o método foreach é uma função e recebe uma função como parametro
//array.forEach(function(item, conteudo){console.log(conteudo, item)});

//push = coloca no final
//array.push("novo item no final do array");

//tira do final
//array.pop();

//removo de inicio do array
//array.shift();

//adiciona no inicio do array
//array.unshift("pedro");

//imprime o índice do conteúdo
//console.log(array.indexOf(true))

//splice remove ou substitui um item pelo índice
//array.splice(0, 3)

//slice retorna uma parte de um array existente
//let novoArray = array.slice(0, 3);
//console.log(novoArray);

//console.log(array);



//OBJETOS

var objeto = {string: "string", number: 1.85, boolean: true, array: ["array", "array1"], objetoInterno: {nome: "pedro", tamnho: "1.85"}}


//acessando conteudo do objeto
//console.log(objeto.boolean);

//forma de fazer desestruturação (colocando partes dos objetos em variáveis...)
//var pedro = objeto.objetoInterno;
//console.log(pedro)

var {string, number} = objeto;
console.log(string, number);


//console.log(objeto);
