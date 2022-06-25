// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função console.log para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

console.log('---------------------------------------');

//TODO: Complete os espaços em branco com uma possível solução para o desafio

function main(){
    function pipe(){
      console.log('|                                     |');
    }
    function empty() {
      console.log('');
    }
    for(i=0; i<5; i++){
      pipe();
      empty();
    }
    console.log('---------------------------------------');
}

main();