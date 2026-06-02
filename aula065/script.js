// FILTER()

// filter() cria um novo array
// contendo apenas elementos
// que passaram em uma condição


// Sintaxe:

// array.filter(function(valor){
//     return condição;
// });


// --------------------------------------------------

// 1. Filtrando números maiores que 10

// let numeros = [5,10,15,20,25];

// let resultado = numeros.filter(
//     numero => numero > 10
// );

// console.log(resultado);

// Resultado:

// [15,20,25]


// --------------------------------------------------

// 2. Filtrando números pares

// let numeros = [1,2,3,4,5,6];

// let pares = numeros.filter(
//     numero => numero % 2 === 0
// );

// console.log(pares);

// Resultado:

// [2,4,6]


// --------------------------------------------------

// 3. Filtrando textos

// let nomes = ["Ana","João","Carlos","Pedro"];

// let resultado = nomes.filter(
//     nome => nome.length > 5
// );

// console.log(resultado);

// Resultado:

// ["Carlos","Pedro"]


// --------------------------------------------------

// 4. Filtrando objetos

// let pessoas = [
//     {nome:"Ana",idade:20},
//     {nome:"João",idade:15},
//     {nome:"Carlos",idade:30}
// ];

// let maiores = pessoas.filter(
//     pessoa => pessoa.idade >= 18
// );

// console.log(maiores);

// Resultado:

// [
//   {nome:"Ana",idade:20},
//   {nome:"Carlos",idade:30}
// ]


// --------------------------------------------------

// filter recebe:

// valor -> elemento atual
// índice -> posição
// array -> array completo


// Exemplo:

// let numeros = [10,20,30];

// numeros.filter(
//     (valor,indice,array)=>{
//         console.log(valor);
//         console.log(indice);
//         console.log(array);
//     }
// );


// --------------------------------------------------

// Resumo rápido:

// filter()

// Retorna novo array
// Não altera o original
// Mantém apenas quem passou na condição

//Retorne os números maiores que 10
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter( valor =>  valor > 10);
//console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 },
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
console.log(pessoasComNomeGrande);

const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDe50);

const pessoasQueTerminamComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoasQueTerminamComA);