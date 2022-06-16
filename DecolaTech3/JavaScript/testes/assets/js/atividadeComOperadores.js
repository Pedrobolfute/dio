/* 
Crie uma função que receba 2 numeros como parametros;
Confira se os numeors são iguais;
Confira se a soma dos numeros é maior que 10 ou menor que 20;
Retorne uma string dizendo "os numeros NUM1 e NUM2 não/são iguais. Sua soma é SOMA, que é MAIOR/MENOR que 10 e MAIOR/MENOR que 20."
*/


function operacao(num1, num2){
   (num1 === num2) ? comparando = "são" : comparando = "não são";
   
   soma = num1+num2;
   if (soma > 10 || soma < 20){
    
    if(soma > 10){ dez = "maior"}
    else { dez = "menor"}
    if (soma > 20){ vinte = "maior"}
    else { vinte = "menor"}
   }

   console.log ("Os números", num1.toString(), "e", num2.toString(), comparando, "iguais. Sua soma é ", soma.toString(), "que é ", dez.toString(), "que 10 e", vinte.toString(), "que 20.");
}

operacao(7, 3);