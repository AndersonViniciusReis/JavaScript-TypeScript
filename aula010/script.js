/** Aritiméticos
 * - Adição / concatenação: +
 * - Subtração: -
 * - Multiplicação: *
 * - Divisão: /
 * - Resto da divisão: %
 * - Potência: **
 */

//NaN: Not a Number, quando o resultado de uma operação não é um número, como por exemplo, dividir uma string por um número

//parseInt() e parseFloat() são funções que convertem uma string em um número inteiro ou decimal, respectivamente. Se a string não puder ser convertida, elas retornam NaN. O operador de adição (+) pode ser usado para concatenar strings, mas se um dos operandos for um número, ele tentará converter o outro operando para um número antes de realizar a operação. Por exemplo, '5' + 10 resultará em '510' porque o número 10 é convertido para uma string e concatenado com '5'.

//parsefloat() é mais flexível do que parseInt() porque ele pode lidar com números decimais, enquanto parseInt() só lida com números inteiros. Por exemplo, parseFloat('3.14') retornará 3.14, enquanto parseInt('3.14') retornará 3.

//number() é uma função que tenta converter um valor para um número. Se a conversão for bem-sucedida, ela retorna o número convertido; caso contrário, retorna NaN. Por exemplo, number('5') retornará 5, enquanto number('abc') retornará NaN.

// ordem de precedência: () ** * / % + - 

// operadores de atribuição: =, +=, -=, *=, /=, %=, **=

//operadores de incremento: ++

//operadores de decremento: -- 

//pos e pre incremento e decremento são diferentes, o pos incrementa ou decrementa depois de usar a variável, o pre incrementa ou decrementa antes de usar a variável
const num1 = 5;
const num2 = 10;
console.log(num1 + num2);