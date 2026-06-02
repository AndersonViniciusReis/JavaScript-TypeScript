/*
OBJETO MAP EM JAVASCRIPT

O Map é uma estrutura de dados utilizada para armazenar pares
de chave e valor, semelhante a um objeto comum.

A principal diferença é que o Map permite utilizar qualquer
tipo de dado como chave, como números, strings, objetos,
arrays e até funções.

Criando um Map:

const pessoas = new Map();

Adicionando valores:

pessoas.set('nome', 'João');
pessoas.set('idade', 25);

Obtendo valores:

console.log(pessoas.get('nome')); // João

Verificando se uma chave existe:

console.log(pessoas.has('idade')); // true

Removendo um item:

pessoas.delete('idade');

Quantidade de elementos:

console.log(pessoas.size);

Limpando todo o Map:

pessoas.clear();

Exemplo com objeto como chave:

const usuario = { id: 1 };

const mapa = new Map();

mapa.set(usuario, 'Administrador');

console.log(mapa.get(usuario));
// Administrador

Percorrendo um Map:

for (const [chave, valor] of mapa) {
    console.log(chave, valor);
}

Vantagens do Map:
- Aceita qualquer tipo de chave.
- Mantém a ordem de inserção.
- Possui métodos próprios para manipulação.
- Melhor desempenho em alguns cenários com muitas inserções e remoções.

Resumindo:
Map é uma coleção de pares chave-valor mais flexível que
os objetos tradicionais, sendo ideal quando as chaves não
são apenas strings ou quando é necessário maior controle
sobre os dados armazenados.
*/

const pessoas= [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa }) ;
}

console.log(novasPessoas);