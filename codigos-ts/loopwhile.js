"use strict";
/*
// While
// Estabelecendo as variáveis
var numero: number = 10;
var fatorial: number = 1;
var operacao: any;

while (numero >= 1){
    operacao = fatorial + ' x ' + numero + ' = ';
    fatorial *= numero;
    numero--;
    console.log(operacao, fatorial);
}

console.log('O valor do fatorial de 10 até 1 é : ', fatorial);
*/
// Loop do...while
// Declarar os recusos para serem usados
var novoNum = 12;
console.log('Valores encontrados durante a iteração do loop do...while');
// Estabelecendo o loop
do {
    console.log(novoNum);
    novoNum--;
} while (novoNum >= 0);
