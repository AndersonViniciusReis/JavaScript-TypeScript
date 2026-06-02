// ARRAYS - BÁSICO

// Array = estrutura usada para armazenar
// vários valores em uma única variável


// 1. Criando arrays

// let nomes = ["Ana","João","Carlos"];

// let numeros = [1,2,3,4,5];

// let misturado = ["Anderson",20,true];


// --------------------------------------------------

// 2. Acessando valores

// let nomes = ["Ana","João","Carlos"];

// console.log(nomes[0]); //Ana
// console.log(nomes[1]); //João
// console.log(nomes[2]); //Carlos

// O índice começa em 0


// --------------------------------------------------

// 3. Alterando valores

// let nomes = ["Ana","João","Carlos"];

// nomes[1] = "Pedro";

// console.log(nomes);

// Resultado:
// ["Ana","Pedro","Carlos"]


// --------------------------------------------------

// 4. Descobrindo tamanho

// let nomes = ["Ana","João","Carlos"];

// console.log(nomes.length);

// Resultado:
// 3


// --------------------------------------------------

// 5. Adicionando no final

// let nomes = ["Ana","João"];

// nomes.push("Carlos");

// console.log(nomes);

// Resultado:
// ["Ana","João","Carlos"]


// --------------------------------------------------

// 6. Adicionando no início

// let nomes = ["João","Carlos"];

// nomes.unshift("Ana");

// console.log(nomes);

// Resultado:
// ["Ana","João","Carlos"]


// --------------------------------------------------

// 7. Removendo do final

// let nomes = ["Ana","João","Carlos"];

// nomes.pop();

// console.log(nomes);

// Resultado:
// ["Ana","João"]


// --------------------------------------------------

// 8. Removendo do início

// let nomes = ["Ana","João","Carlos"];

// nomes.shift();

// console.log(nomes);

// Resultado:
// ["João","Carlos"]


// --------------------------------------------------

// 9. Apagando item

// let nomes = ["Ana","João","Carlos"];

// delete nomes[1];

// console.log(nomes);

// Resultado:
// ["Ana",empty,"Carlos"]


// --------------------------------------------------

// 10. Pegando parte do array

// let nomes = ["Ana","João","Carlos","Pedro"];

// console.log(nomes.slice(1,3));

// Resultado:
// ["João","Carlos"]


// --------------------------------------------------

// 11. Verificando tipo

// let nomes = ["Ana","João"];

// console.log(typeof nomes);

// Resultado:
// object

// Para verificar array:

// console.log(Array.isArray(nomes));

// Resultado:
// true


// --------------------------------------------------

// Resumo rápido:

// [] -> cria array
// [0] -> acessa posição
// length -> tamanho
// push() -> adiciona no fim
// unshift() -> adiciona no início
// pop() -> remove do fim
// shift() -> remove do início
// slice() -> corta parte

// REST (...) E DIVIDIR STRING EM ARRAY


// --------------------------------------------------

// REST (...)

// Rest recebe vários valores
// e junta tudo em um array


// Exemplo básico

// function soma(...numeros){

//     console.log(numeros);
// }

// soma(1,2,3,4,5);

// Resultado:

// [1,2,3,4,5]


// O rest deve ficar por último

// function exemplo(nome,...numeros){

//     console.log(nome);
//     console.log(numeros);
// }

// exemplo("Anderson",10,20,30);

// Resultado:

// Anderson
// [10,20,30]


// Pode usar com reduce

// function somarTudo(...numeros){

//     return numeros.reduce(
//         (total,n) => total + n,
//         0
//     );
// }

// console.log(somarTudo(1,2,3,4));

// Resultado:

// 10


// --------------------------------------------------

// DIVIDINDO STRING EM ARRAY

// split() divide uma string
// usando um separador


// Separando por espaço

// let nome = "Anderson Vinicius Reis";

// let nomes = nome.split(" ");

// console.log(nomes);

// Resultado:

// ["Anderson","Vinicius","Reis"]


// Separando por vírgula

// let frutas = "Maçã,Banana,Uva";

// console.log(frutas.split(","));

// Resultado:

// ["Maçã","Banana","Uva"]


// Separando letra por letra

// let texto = "Olá";

// console.log(texto.split(""));

// Resultado:

// ["O","l","á"]


// --------------------------------------------------

// Transformando array em string

// let nomes = ["Anderson","Vinicius","Reis"];

// console.log(nomes.join(" "));

// Resultado:

// Anderson Vinicius Reis


// --------------------------------------------------

// Resumo rápido:

// ... = rest
// Rest junta valores em array

// split() -> string para array
// join() -> array para string
const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
delete nomes[2]
console.log(nomes);