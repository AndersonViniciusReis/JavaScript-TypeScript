// FILTER + MAP + REDUCE


// filter()
// Filtra elementos do array
// mantendo apenas os que
// passam na condição


// map()
// Transforma cada elemento
// do array


// reduce()
// Reduz tudo para um único
// resultado final


// Exemplo:

// Pegar pessoas maiores de 30 anos
// pegar somente as idades
// somar todas as idades


// Array original

// const pessoas = [
//     {nome:'Luiz',idade:62},
//     {nome:'Maria',idade:23},
//     {nome:'Eduardo',idade:55},
//     {nome:'Letícia',idade:19},
//     {nome:'Rosana',idade:32},
//     {nome:'Wallace',idade:47}
// ];


// ----------------------------------


// filter()

// Filtra pessoas com idade > 30

// const maiores30 = pessoas.filter(
//     pessoa => pessoa.idade > 30
// );

// console.log(maiores30);


// Resultado:

// [
//   {nome:'Luiz',idade:62},
//   {nome:'Eduardo',idade:55},
//   {nome:'Rosana',idade:32},
//   {nome:'Wallace',idade:47}
// ]


// ----------------------------------


// map()

// Pega somente as idades

// const somenteIdades = maiores30.map(
//     pessoa => pessoa.idade
// );

// console.log(somenteIdades);


// Resultado:

// [62,55,32,47]


// ----------------------------------


// reduce()

// Soma todas as idades

// const soma = somenteIdades.reduce(
//     (acumulador,idade)=>{

//         return acumulador + idade;

//     },0
// );

// console.log(soma);


// Resultado:

// 196


// ----------------------------------


// Tudo encadeado

// const resultado = pessoas

//     .filter(
//         pessoa => pessoa.idade > 30
//     )

//     .map(
//         pessoa => pessoa.idade
//     )

//     .reduce(
//         (acc,idade)=> acc + idade,
//         0
//     );

// console.log(resultado);


// Resultado:

// 196


// ----------------------------------


// Fluxo:

// Array original

// ↓

// filter()

// ↓

// map()

// ↓

// reduce()

// ↓

// Resultado final

// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2) 
.reduce( (ac, valor) => ac += valor)

console.log(numerosPares);
