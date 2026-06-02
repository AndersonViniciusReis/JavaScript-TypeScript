// CONCATENAR ARRAYS

// Concatenar = juntar arrays


// 1. Usando concat()

// let numeros1 = [1,2,3];

// let numeros2 = [4,5,6];

// let resultado = numeros1.concat(numeros2);

// console.log(resultado);

// Resultado:

// [1,2,3,4,5,6]


// --------------------------------------------------

// 2. Juntando vários arrays

// let a = [1,2];

// let b = [3,4];

// let c = [5,6];

// let resultado = a.concat(b,c);

// console.log(resultado);

// Resultado:

// [1,2,3,4,5,6]


// --------------------------------------------------

// 3. Concatenando valores junto

// let numeros = [1,2];

// let resultado = numeros.concat(3,4,5);

// console.log(resultado);

// Resultado:

// [1,2,3,4,5]


// --------------------------------------------------

// 4. Usando Spread (...)

// Forma mais usada atualmente

// let a = [1,2,3];

// let b = [4,5,6];

// let resultado = [...a,...b];

// console.log(resultado);

// Resultado:

// [1,2,3,4,5,6]


// --------------------------------------------------

// 5. Juntando arrays + valores

// let a = [1,2];

// let resultado = [...a,3,4,5];

// console.log(resultado);

// Resultado:

// [1,2,3,4,5]


// --------------------------------------------------

// Resumo rápido:

// concat() -> junta arrays

// Spread (...)
// espalha valores do array

// Mais usado:

// [...array1,...array2]
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// concat()
//const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');
// spread (...)
const a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];
console.log(a3)