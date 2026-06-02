// FOREACH()


// forEach() percorre cada elemento
// de um array

// Muito parecido com for...of

// Diferença:

// forEach()
// executa uma função para cada item


// Sintaxe:

// array.forEach(function(
//     valor,
//     indice,
//     array
// ));

// valor -> elemento atual
// indice -> posição atual
// array -> array completo


// ----------------------------------


// 1. Exemplo básico

// let numeros = [10,20,30];

// numeros.forEach(
//     function(valor){

//         console.log(valor);

//     }
// );


// Resultado:

// 10
// 20
// 30


// ----------------------------------


// 2. Com arrow function

// let numeros = [10,20,30];

// numeros.forEach(
//     valor => console.log(valor)
// );


// Resultado:

// 10
// 20
// 30


// ----------------------------------


// 3. Pegando índice

// let nomes = [
//     "Ana",
//     "João",
//     "Carlos"
// ];

// nomes.forEach(
//     (valor,indice)=>{

//         console.log(
//             indice,
//             valor
//         );

//     }
// );


// Resultado:

// 0 "Ana"
// 1 "João"
// 2 "Carlos"


// ----------------------------------


// 4. Somando valores

// let numeros = [1,2,3,4,5];

// let total = 0;

// numeros.forEach(
//     numero => {

//         total += numero;

//     }
// );

// console.log(total);


// Resultado:

// 15


// ----------------------------------


// 5. Pegando array completo

// let numeros = [1,2,3];

// numeros.forEach(
//     (valor,indice,array)=>{

//         console.log(valor);
//         console.log(indice);
//         console.log(array);

//     }
// );


// ----------------------------------


// Diferença entre map()
// e forEach()


// map()

// Retorna novo array


// forEach()

// Não retorna array
// Apenas executa ações


// Exemplo:

// let numeros = [1,2,3];

// let resultado = numeros.forEach(
//     n => n * 2
// );

// console.log(resultado);


// Resultado:

// undefined


// ----------------------------------


// Resumo rápido:

// forEach()

// Percorre array
// Não cria novo array
// Não retorna valor
// Executa algo em cada item
const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const a2 = a1.forEach((valor, indice) => console.log(valor, indice));
console.log(a2)