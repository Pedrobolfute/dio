//Palindromo: Palavras que podem ser lidas de trás pra frente quanto de frente pra trás, que trazem o mesmo significado.
//usando o método mais comum...

// tentando separar as etapas em cada função... mas ainda nao deu certo!
/* function entrada(palavra){
    let crieiUmArray = palavra.split('');
    return crieiUmArray;
}

function entradaArray(crieiUmArray){
    let arrayReverse = crieiUmArray.split('').reverse();
    return arrayReverse;
}

function entradaArrayReverso(arrayReverse){
    let palavraReversa = arrayReverse.split('').reverse().join();
    return palavraReversa;
}

function main(){
    entrada('pedro');

if(entrada.crieiUmArray === entradaArrayReverso.palavraReversa){
    console.log('true');
}
else{
    console.log('false');
}
}
main(); */

function entrada(palavra){
console.log('Entrada: ' + palavra.split('').join(''));
console.log('Saida:   ' + palavra.split('').reverse().join(''));

   if (palavra.split('').join() === palavra.split('').reverse().join()){
    console.log('true')
   }
   else {
    console.log('false')
   }
   
}

entrada('pedro');

//da pra fazer tudo em uma unnica função, mas por meios didático para o "meu entendimento" fiz assim separadinho...
/* tem como fazer com o for também... 
...
for (i = 0; i < array.length / 2; i++){
    if (array[i] !== array[array.length -1 -i]){  //aqui to acessando o caractere do indice 
        return false;
    }
    return true;
} 
...
*/