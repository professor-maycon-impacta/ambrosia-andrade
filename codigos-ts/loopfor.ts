/*
// Criando a variável iteradora
var y: any;

// Essa é a coleção de dados
var z: any = 'a b c';

// Criar loop
// Formato de coleção de dados, a partir dos índices posicionais dele
// Então é preciso dizer se quer os índices (y)
// Ou se quer os valores (z[y])
for (y in z){
    console.log(z[y]);
}
*/

// Loop for...of
var p: any;

// Criar uma coleção de dados
let umArray: Array<number> = [380, 1067, 856, 9874, 7896];

// Criando o loop
// Quando se usa o for of
// Ele já traz os valores, não sendo necessário especificar (umArray[p])
for(p of umArray){
    console.log(p)
}