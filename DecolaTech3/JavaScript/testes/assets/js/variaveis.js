
//typeof mostra o typo da variável no console
//boolean
var boleano = false;
console.log(typeof(boleano));

//number
var numero = 1;
console.log(typeof(numero));

//string
var letras = "aspas duplas";
console.log(typeof(letras));

//string com aspas simples
var letra = 'aspas simples';
console.log(typeof(letra));

//function
var funcao = function() {}
console.log(typeof(funcao));

// declaração normal da variável
//string
var aspasDupla = "aspas dupla";
console.log(aspasDupla);

//string aspas simples
var aspasSimples = "aspas simples";
console.log(aspasSimples);

//constante
const constante = "Pedro";
console.log(constante);

//escopo local
function escopoLocal(){
    let numeroLocal = "woow";
    console.log(numeroLocal);
}

escopoLocal()

//
var comparacao = 0 == 0;
console.log(comparacao);

var comparacao1 = 0 == '0';
console.log(comparacao1);

var comparacao2 = '0' == 0;
console.log(comparacao2);

var comparacao3 = 0 == 1;
console.log(comparacao3);

var comparacao4 = 0 == "0";
console.log(comparacao4);

// ...