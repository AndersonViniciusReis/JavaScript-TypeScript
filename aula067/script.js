// REDUCE()

// reduce() reduz vários valores
// para um único resultado

// Pode somar, contar, agrupar,
// criar objetos, arrays etc.


// Sintaxe:

// array.reduce(
//     (acumulador,valor,indice,array)=>{
//         return acumulador;
//     },
//     valorInicial
// );


// --------------------------------------------------

// 1. Somando números

// let numeros = [1,2,3,4,5];

// let total = numeros.reduce(
//     (acumulador,numero)=>{
//         return acumulador + numero;
//     },
//     0
// );

// console.log(total);

// Resultado:

// 15


// --------------------------------------------------

// Passo a passo:

// acumulador = 0
// 0 + 1 = 1

// acumulador = 1
// 1 + 2 = 3

// acumulador = 3
// 3 + 3 = 6

// acumulador = 6
// 6 + 4 = 10

// acumulador = 10
// 10 + 5 = 15


// --------------------------------------------------

// 2. Maior número

// let numeros = [5,7,20,2,10];

// let maior = numeros.reduce(
//     (acumulador,numero)=>{

//         if(numero > acumulador){
//             acumulador = numero;
//         }

//         return acumulador;
//     }
// );

// console.log(maior);

// Resultado:

// 20


// --------------------------------------------------

// 3. Contando itens

// let nomes = ["Ana","João","Ana"];

// let contador = nomes.reduce(
//     (acumulador,nome)=>{

//         acumulador[nome] =
//             (acumulador[nome] || 0) + 1;

//         return acumulador;
//     },
//     {}
// );

// console.log(contador);

// Resultado:

// {
//   Ana:2,
//   João:1
// }


// --------------------------------------------------

// 4. Somando idades

// let pessoas = [
//     {nome:"Ana",idade:20},
//     {nome:"João",idade:30},
//     {nome:"Carlos",idade:25}
// ];

// let somaIdades = pessoas.reduce(
//     (acumulador,pessoa)=>{
//         return acumulador + pessoa.idade;
//     },
//     0
// );

// console.log(somaIdades);

// Resultado:

// 75


// --------------------------------------------------

// reduce recebe:

// acumulador
// valor atual
// índice
// array completo


// --------------------------------------------------

// Resumo rápido:

// reduce()

// Recebe vários valores
// Retorna um resultado final

// Muito usado para:

// Somar
// Contar
// Agrupar
// Encontrar maior/menor

// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador
}, []);
//console.log(total)

// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 10 },
    {nome: 'Rosana', idade: 64 },
    {nome: 'Wallace', idade: 63 },
];
const maisVelha = pessoas.reduce(function(acumulador, valor ) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
    });
console.log(maisVelha)