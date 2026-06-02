// SPLICE()

// splice() adiciona, remove ou substitui
// elementos de um array

// Sintaxe:

// array.splice(
//     índice,
//     quantidadeRemover,
//     item1,
//     item2...
// );


// --------------------------------------------------

// 1. Removendo elementos

// let nomes = ["Ana","João","Carlos","Pedro"];

// nomes.splice(1,2);

// console.log(nomes);

// Resultado:

// ["Ana","Pedro"]


// Explicação:

// índice 1 -> começa em "João"
// remove 2 elementos


// --------------------------------------------------

// 2. Adicionando elementos

// let nomes = ["Ana","Carlos"];

// nomes.splice(1,0,"João");

// console.log(nomes);

// Resultado:

// ["Ana","João","Carlos"]


// Explicação:

// índice 1 -> posição
// remove 0 -> não remove nada
// "João" -> adiciona


// --------------------------------------------------

// 3. Substituindo elementos

// let nomes = ["Ana","João","Carlos"];

// nomes.splice(1,1,"Pedro");

// console.log(nomes);

// Resultado:

// ["Ana","Pedro","Carlos"]


// Explicação:

// índice 1 -> "João"
// remove 1
// adiciona "Pedro"


// --------------------------------------------------

// 4. Salvando removidos

// let nomes = ["Ana","João","Carlos"];

// let removidos = nomes.splice(1,1);

// console.log(removidos);

// Resultado:

// ["João"]


// splice retorna um array
// com os itens removidos


// --------------------------------------------------

// Comparação:

// push() -> adiciona no final
// pop() -> remove do final
// shift() -> remove do início
// unshift() -> adiciona no início

// splice() -> faz tudo


// --------------------------------------------------

// Resumo rápido:

// splice(índice,quantidade)

// Remove:
// splice(1,2)

// Adiciona:
// splice(1,0,"Novo")

// Substitui:
// splice(1,1,"Novo")

//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
//unshifith
//nomes.splice(0, 0 'Luiz')
//push
//nomes.splice(5, 0, 'Luiz')
//shift
//nomes.splice(0, 1)
//pop
//nomes.splice(4, 1);
console.log(nomes);