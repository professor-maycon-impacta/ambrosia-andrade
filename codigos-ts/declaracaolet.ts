/*
// Criando e declarando muitas variáveis com let
let numeroUm: number = 1;

// Criar uma função para trabalhar com a declaração let
function declarandoLet(){
    let numeroDois: number = 2;

    // Bloco de decisão dentro da função
    if(numeroUm > numeroDois){
        let numeroTres: number = 3;
        numeroTres++;
        console.log(numeroTres);
    }

    // Bloco de repetição dentro da função
    while(numeroUm < numeroDois){
        let numeroQuadro: number = 4;
        numeroUm++;
        console.log(numeroUm);
        console.log(numeroQuadro);
    }
    console.log(numeroUm);
    console.log(numeroDois);
}

// Criando o "chamador" da função
declarandoLet();
*/

// Criando e declarando muitas variáveis com Var
var numeroUm: number = 1;

// Criar uma função para trabalhar com a declaração Var
function declarandoVar(){
    var numeroDois: number = 2;

    // Bloco de decisão dentro da função
    if(numeroUm < numeroDois){
        var numeroTres: number = 3;
        numeroTres++;
        console.log(numeroTres);
    }

    // Bloco de repetição dentro da função
    while(numeroUm < numeroDois){
        var numeroQuadro: number = 4;
        numeroUm++;
        //console.log(numeroUm);
        //console.log(numeroQuadro);
    }
    console.log(numeroUm);
    console.log(numeroDois);
    //console.log(numeroTres);
    //console.log(numeroQuadro);
}

// Criando o "chamador" da função
declarandoVar();