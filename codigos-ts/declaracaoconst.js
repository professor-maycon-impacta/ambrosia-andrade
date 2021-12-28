"use strict";
/*
// Declarando a primeira constante
const numeroConst: number = 200;
numeroConst = 300;
*/
/*
// Implementar um objeto literal para alterar suas propriedades
const idParticipantes = {
    participanteA: 1,
    participanteB: 2,
    participanteC: 3,
    participanteD: 4
}

// Exibindo o objeto
console.log(idParticipantes);

// Acessar uma propriedade específica do objeto constante
idParticipantes.participanteB = 875;

// Exibindo uma propriedade espefícica
console.log(idParticipantes.participanteB);
console.log(idParticipantes);
*/
// Criar uma variável com a declaração let
let vidaGatos = 9;
// Criando um objeto literal
const dadosGato = {
    nome: 'Mila Burns',
    qtdVidas: vidaGatos
};
// Exibir o objeto
console.log(dadosGato);
// Aplicar as alterações no objeto
dadosGato.nome = 'Frajola Jenkins';
dadosGato.qtdVidas = 89;
// Exibindo as alterações realizadas
console.log('Quantidade de vidas de ', dadosGato.nome, ' é igual a ', dadosGato.qtdVidas);
console.log(dadosGato);
