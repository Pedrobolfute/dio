var jogador1 = 0;
var jogador2 = 0;
var placar;

//if (jogador1 > 0)
//{console.log("Jogador 1 marcou ponto!")}

//condicionais if, else if e else simples
/* if (jogador1 > 0){
    console.log("jogaodr 1 marcou ponto!");
}
else if (jogador2 > 0){
    console.log("Jogador 2 marcou ponto!");
}
else {console.log("ninguém marcou ponto!")}; */

//NINHO DE IFs ou ANINHAMENTO DE IFs
/* if(jogador1 != -1) {
    if (jogador1 > 0){
        console.log("jogaodr 1 marcou ponto!");
    }
    else if (jogador2 > 0){
        console.log("Jogador 2 marcou ponto!");
    }
    else {console.log("ninguém marcou ponto!")};
} */

//IF TERNÁRIO (varias verificações em uma única linha)
//OBS: "?" e ":"

/* jogador1 != -1 && jogador2 != -1 ? console.log("os jogadores são validos") : console.log("Jogadores inválidos");

if (jogador1 > 0){
    console.log("jogaodr 1 marcou ponto!");
}
else if (jogador2 > 0){
    console.log("Jogador 2 marcou ponto!");
}
else {console.log("ninguém marcou ponto!")}; */

//ADICIONANDO VERIFICAÇÕES E USANDO OUTRO TIPO DE IFternário

jogador1 != -1 && jogador2 != -1 ? console.log("os jogadores são validos") : console.log("Jogadores inválidos");

if (jogador1 > 0 && jogador2 == 0){
    console.log("jogaodr 1 marcou ponto!");
    placar = jogador1 > jogador2;
}
else if (jogador2 > 0 && jogador1 == 0){
    console.log("Jogador 2 marcou ponto!");
    placar = jogador2 > jogador1;
}
else {console.log("ninguém marcou ponto!")};

//USANDO SWITCH
switch (placar){
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 ganhando");
        break;
    case placar = jogador2 > jogador1:
            console.log("Jogador 2 ganahando");
            break;
    default:
            console.log("ninguém ganhou!!");      
}