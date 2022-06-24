function trocaArray(array){
    if(!array || !array.length){
        return -1;
    }
    
    else{
    for(i = 0; i <= array.length; i++){
        if(array[i] === 0){
            console.log('já é 0!');
        }
        else if(array[i] % 2 === 0){
            console.log(array[i] + ' recebendo 0');
            array[i] = 0;
        }
    }
     
}
    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 90];
console.log(trocaArray(arr));











//Outra solução...
/* function pares(array){
    if(!array) return -1;           //verifica se o array existe
    if(!array.length) return -1;    //verifica se o array tem algum tamanho...

    for (let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("voce é 0!")
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}
let arr = [ 1, 3, 4, 6, 80, 33, 90];
console.log(pares(arr)); */