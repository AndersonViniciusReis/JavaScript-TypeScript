/*
ATRIBUIÇÃO POR DESESTRUTURAÇÃO (ARRAYS)

- Permite pegar valores de um array e colocar em variáveis
- A ordem importa: o primeiro valor vai para a primeira variável, o segundo para a segunda...

Exemplo:

const numeros = [10, 20, 30];

const [a, b, c] = numeros;

a = 10
b = 20
c = 30

Também pode ser usada para trocar valores:

let x = 'A';
let y = 'B';

[x, y] = [y, x];
*/

// ...rest, ... spread

/*
ARRAYS DENTRO DE ARRAYS

- Um array pode armazenar outros arrays
- Também é chamado de matriz ou array multidimensional
- Para acessar valores usa dois índices:
  [linha][posição]

Exemplo:

const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

numeros[0][0]; // 1
numeros[1][2]; // 6
numeros[2][1]; // 8
*/
//                      0          1          2
//                   0  1  2    0  1  2    0  1  2
// const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// const [lista1, lista2, lista3] = numeros;
// console.log(lista3);
