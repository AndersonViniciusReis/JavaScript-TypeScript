/*operadores de comparação
 * 
 * > maior que
 * < menor que
 * >= maior ou igual a
 * <= menor ou igual a
 * == igual a (comparação de valor) não recomendado usar
 * === estritamente igual a (comparação de valor e tipo)
 * != diferente de (comparação de valor) nao recomendado usar
 * !== estritamente diferente de (comparação de valor e tipo)
 * 
 */
const num1 = 10;
const num2 = 5;
const num3 = 9;
const num4 = '10';
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num1);  // true
console.log(num1 <= num3); // false
console.log(num1 == num4); // true, pois compara apenas o valor, não o tipo
console.log(num1 === num4); // false, pois compara valor e tipo, e são diferentes
console.log(num1 != num4); // false, pois compara apenas o valor, e são iguais
console.log(num1 !== num4); // true, pois compara valor e tipo, e são diferentes  