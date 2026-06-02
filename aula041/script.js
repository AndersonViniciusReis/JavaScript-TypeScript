/*
TIPOS

Function Declaration
function soma(a, b) {
    return a + b;
}

Function Expression
const soma = function(a, b) {
    return a + b;
}

Arrow Function
const soma = (a, b) => a + b;
*/
// Escreva uma função que recebe 2 numeros e retorne o maior deles

const max2 = (x, y) => x > y ? x : y;

console.log(max2(10 , 29));