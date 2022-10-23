# Condicionais

## if
    -   if(condição){
            codigo...;
        }
        esle{
            codigo...;
        }

## if aninhado
    -   if(condição){
            codigo...
        }
        else if(condição2){
            codigo2...
        }
        else{
            codigo final...
        }
    }

## switch case
    -   switch(comparador)
        case: "comparado1":
        case: "comparado2":
        case: "comparado3":
            comando...;
            break;
        default:
            comando2...;
            break;
    

# Debug
    - A deputação ou debug é uma mão a roda!
        - Deve-se ficar atento ao caminho dos "program" e "cwd". Eles se encontram dentro do ./.vscode/lauch.json
      - EX: //img/

    - Passos:
      - settar breakpoint;
      - f5, inicia o debug;
      - f10, vai pulando de linha em linha;
    - Visualizador, pelo vscode, Ctrl + Shift + D; 