// MAP()

// map() cria um novo array
// transformando cada elemento

// Diferente do filter():

// filter() -> filtra elementos
// map() -> modifica elementos


// Sintaxe:

// array.map(function(valor){
//     return novoValor;
// });


// --------------------------------------------------

// 1. Multiplicando números

// let numeros = [1,2,3,4];

// let dobro = numeros.map(
//     numero => numero * 2
// );

// console.log(dobro);

// Resultado:

// [2,4,6,8]


// --------------------------------------------------

// 2. Pegando apenas nomes

// let pessoas = [
//     {nome:"Ana",idade:20},
//     {nome:"João",idade:30},
//     {nome:"Carlos",idade:25}
// ];

// let nomes = pessoas.map(
//     pessoa => pessoa.nome
// );

// console.log(nomes);

// Resultado:

// ["Ana","João","Carlos"]


// --------------------------------------------------

// 3. Criando novo objeto

// let pessoas = [
//     {nome:"Ana",idade:20},
//     {nome:"João",idade:30}
// ];

// let novaLista = pessoas.map(
//     pessoa => {

//         return {
//             nome:pessoa.nome
//         };
//     }
// );

// console.log(novaLista);

// Resultado:

// [
//     {nome:"Ana"},
//     {nome:"João"}
// ]


// --------------------------------------------------

// 4. Adicionando propriedades

// let pessoas = [
//     {nome:"Ana",idade:20},
//     {nome:"João",idade:30}
// ];

// let resultado = pessoas.map(
//     pessoa => {

//         return {
//             ...pessoa,
//             id:Math.random()
//         };
//     }
// );

// console.log(resultado);


// --------------------------------------------------

// map recebe:

// valor -> elemento atual
// índice -> posição
// array -> array completo


// Exemplo:

// let numeros = [10,20,30];

// numeros.map(
//     (valor,indice,array)=>{

//         console.log(valor);
//         console.log(indice);
//         console.log(array);
//     }
// );


// --------------------------------------------------

// Resumo rápido:

// map()

// Cria novo array
// Não altera o original
// Transforma cada elemento

// Dobre os números
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map(valor => valor * 2);
console.log(numerosDobrados);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 },
];

const somenteStringsComNome = pessoas.map(obj => obj.nome);
console.log(somenteStringsComNome);

const somenteNumbersComIdade = pessoas.map(obj => ({idade: obj.idade}));
console.log(somenteNumbersComIdade);

const chaveTd = pessoas.map(obj => ({id: obj}));
console.log(chaveTd);