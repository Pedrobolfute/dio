// ESTRUTURA DE REPETIÇÃO
//FOR
let array = ["valor1", "valor2", "valor3", "valor4", "valor4"];
let object = {propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3"};

/* for (let indice = 0; indice < array.length; indice++){
console.log(indice);
} */

//FOR/IN "funciona como uma repetição a partir de uma propriedade."
/* for(let any in array)
{
    console.log(any);
}

for(let i in object)
{
    console.log(i);
} */

//FOR OF "funciona como uma repetição a partir de um valor"
/* for (let i of array ){
    console.log(i);
} */

//FOR OF não se da muito bem com objeto porque imprime cada letra em uma única linha.
/* for (i of object.propriedade1){
    console.log(i);
} */


//WHILE "a verificação é feita antes da execução"********** RODAR UM DEBBUG AQUI***********; 
var a = 0;
var b = 0;
while(a < 10)
{
    a++
    console.log(a);
}

//DO WHILE "a verificação é feita depois da execulção"
do {
    b++
    console.log(b)
}
while (b < 5)