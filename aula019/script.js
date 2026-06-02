//dados primitivos são os tipos de dados mais básicos em JavaScript, que armazenam um único valor. Eles incluem: string, number, boolean, null, undefined, symbol e bigint. Esses tipos de dados são imutáveis, o que significa que seu valor não pode ser alterado após a criação.

//Exemplos de dados primitivos

const nome = "Alice"; // string
const idade = 28; // number
const isStudent = true; // boolean
const endereco = null; // null
let telefone; // undefined
const id = Symbol("id"); // symbol
const bigId = BigInt("123456789012345678901234567890"); // bigint

//dados por referencia são tipos de dados que armazenam uma referência a um valor em vez do valor em si. Eles incluem objetos, arrays e funções. Esses tipos de dados são mutáveis, o que significa que seu conteúdo pode ser alterado mesmo que a referência permaneça a mesma.

//Exemplos de dados por referência

const pessoa = {// objeto
    nome: "Bob",
    idade: 35,
};
const numeros = [1, 2, 3, 4, 5];// array

function saudacao() {// função
    console.log("Olá!");
}