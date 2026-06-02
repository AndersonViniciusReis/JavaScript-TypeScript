//numbers sao usados para representar valores numericos, seja inteiro ou decimal
//numbers podem ser manipulados usando operadores aritmeticos como +, -, *, /, % (modulo), ** (exponenciacao)
//numbers tambem possuem metodos para realizar operacoes matematicas, como Math.round(), Math.floor(), Math.ceil(), Math.random(), entre outros
//numbers podem ser convertidos para string usando o metodo toString() ou para inteiro usando parseInt() ou para decimal usando parseFloat()
//tem muitas outras operacoes e metodos relacionados a numbers, mas esses sao os mais comuns e basicos para se trabalhar com numeros em JavaScript  
/*metodos relacionados a numbers:
 * number.toFixed() - arredonda um numero para um numero especifico de casas decimais e retorna uma string
 * number.toExponential() - retorna uma string representando o numero em notacao exponencial
 * number.toPrecision() - retorna uma string representando o numero com um numero especifico de digitos significativos
 * number.toLocaleString() - retorna uma string representando o numero formatado de acordo com as convencoes locais
 * number.toString() - retorna uma string representando o numero
 * number.valueOf() - retorna o valor primitivo do numero
 * number.isInteger() - retorna true se o numero for um inteiro, caso contrario retorna false
 * number.isNaN() - retorna true se o numero for NaN (Not a Number), caso contrario retorna false
 * number.isFinite() - retorna true se o numero for finito, caso contrario retorna false
 */

let num1 = 1;//number
let num2 = 2.5;//number

let resultadoSoma = num1 + num2;

console.log(`O resultado da soma é: ${num1.toString() + num2}`)