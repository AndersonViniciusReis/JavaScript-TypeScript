// ==========================================================
// OBJETOS EM JAVASCRIPT
// ==========================================================


// ==========================================================
// O QUE É UM OBJETO?
// ==========================================================


// Objetos servem para guardar informações.

// Eles organizam dados usando:

// chave: valor

// Exemplo:

// nome: "Anderson"

// idade: 20

// cidade: "Porto Alegre"

// "nome", "idade" e "cidade" são chaves.

// "Anderson", 20 e "Porto Alegre" são valores.

// Objetos são MUITO usados no JavaScript.

// APIs

// React

// Node.js

// Jogos

// Sistemas web

// Bancos de dados



// ==========================================================
// CRIANDO UM OBJETO
// ==========================================================


// Criando objeto chamado pessoa.

// const pessoa = {

//   // Chave nome.
//   nome: "Anderson",

//   // Chave idade.
//   idade: 20,

//   // Chave profissão.
//   profissao: "Programador"
// };


// Mostrando objeto inteiro.

// console.log(pessoa);



// ==========================================================
// COMO FUNCIONA UM OBJETO
// ==========================================================


// Um objeto funciona como uma caixa
// cheia de informações organizadas.

// Exemplo visual:

// pessoa = {

//   nome: "Anderson",

//   idade: 20,

//   profissao: "Programador"

// }

// Cada informação fica ligada
// a uma chave.


// nome --------> Anderson

// idade -------> 20

// profissao ---> Programador



// ==========================================================
// ACESSANDO VALORES
// ==========================================================


// Existem duas formas principais
// de acessar propriedades.



// ==========================================================
// ACESSANDO COM PONTO
// ==========================================================


// Pegando valor da chave nome.

// console.log(pessoa.nome);


// Pegando valor da chave idade.

// console.log(pessoa.idade);



// ==========================================================
// ACESSANDO COM COLCHETES
// ==========================================================


// Pegando valor usando string.

// console.log(pessoa["nome"]);


// Pegando idade usando string.

// console.log(pessoa["idade"]);



// ==========================================================
// USANDO VARIÁVEL COMO CHAVE
// ==========================================================


// Criando variável com nome da chave.

// const chave = "profissao";


// O JavaScript procura:

// pessoa["profissao"]


// Mostrando valor da chave.

// console.log(pessoa[chave]);



// ==========================================================
// ALTERANDO VALORES
// ==========================================================


// Mudando valor da idade.

// pessoa.idade = 21;


// Mostrando nova idade.

// console.log(pessoa.idade);



// ==========================================================
// ADICIONANDO NOVAS PROPRIEDADES
// ==========================================================


// Criando nova propriedade cidade.

// pessoa.cidade = "Porto Alegre";


// Mostrando objeto atualizado.

// console.log(pessoa);



// ==========================================================
// REMOVENDO PROPRIEDADES
// ==========================================================


// Removendo propriedade profissao.

// delete pessoa.profissao;


// Mostrando objeto atualizado.

// console.log(pessoa);



// ==========================================================
// OBJETOS COM ARRAYS
// ==========================================================


// Objetos podem guardar arrays.

// const aluno = {

//   nome: "Carlos",

//   notas: [8, 9, 10]

// };


// Pegando primeira nota.

// console.log(aluno.notas[0]);



// ==========================================================
// OBJETOS DENTRO DE OBJETOS
// ==========================================================


// Objetos podem guardar outros objetos.

// const usuario = {

//   nome: "Ana",

//   endereco: {

//     rua: "Rua A",

//     numero: 123

//   }

// };


// Pegando rua do usuário.

// console.log(usuario.endereco.rua);



// ==========================================================
// FUNÇÕES DENTRO DE OBJETOS
// ==========================================================


// Funções dentro de objetos
// são chamadas de métodos.

// const cachorro = {

//   nome: "Bolt",

//   latir: function () {

//     console.log("Au au!");

//   }

// };


// Executando método.

// cachorro.latir();



// ==========================================================
// THIS
// ==========================================================


// "this" representa o próprio objeto.

// const carro = {

//   marca: "Toyota",

//   modelo: "Corolla",

//   mostrarInfo: function () {

//     console.log(this.marca);

//     console.log(this.modelo);

//   }

// };


// Executando método.

// carro.mostrarInfo();



// ==========================================================
// PERCORRENDO OBJETOS
// ==========================================================


// Criando objeto produto.

// const produto = {

//   nome: "Teclado",

//   preco: 150,

//   estoque: 20

// };


// Percorrendo objeto com for in.

// for (let chave in produto) {

//   console.log(chave);

//   console.log(produto[chave]);

// }



// ==========================================================
// OBJECT.KEYS()
// ==========================================================


// Retorna todas as chaves do objeto.

// console.log(Object.keys(produto));



// ==========================================================
// OBJECT.VALUES()
// ==========================================================


// Retorna todos os valores.

// console.log(Object.values(produto));



// ==========================================================
// OBJECT.ENTRIES()
// ==========================================================


// Retorna chave e valor juntos.

// console.log(Object.entries(produto));



// ==========================================================
// DESESTRUTURAÇÃO
// ==========================================================


// Criando objeto jogador.

// const jogador = {

//   nick: "Shadow",

//   level: 99

// };


// Pegando valores do objeto.

// const { nick, level } = jogador;


// Mostrando nick.

// console.log(nick);


// Mostrando level.

// console.log(level);



// ==========================================================
// SPREAD OPERATOR
// ==========================================================


// Criando objeto básico.

// const dadosBasicos = {

//   nome: "Lucas"

// };


// Criando novo objeto.

// const dadosCompletos = {

//   ...dadosBasicos,

//   idade: 25

// };


// Mostrando novo objeto.

// console.log(dadosCompletos);



// ==========================================================
// RESUMO
// ==========================================================


// Objetos:

// Guardam informações.

// Funcionam com chave e valor.

// Podem armazenar:

// Strings

// Números

// Arrays

// Funções

// Outros objetos

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const chave = 'nome'
console.log(pessoa[chave]);// console.log(pessoa.nome);
console.log(pessoa['nome']);// console.log(pessoa.sobrenome);

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
delete pessoa1.nome;
console.log(pessoa1, pessoa2);

pessoa2.falarNome = function(){
    console.log(`${this.nome} está falando seu nome.`);
}
pessoa2.falarNome();