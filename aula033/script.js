/*
ATRIBUIÇÃO POR DESESTRUTURAÇÃO (OBJETOS)

- Permite pegar propriedades de um objeto e colocar em variáveis
- O nome da variável deve ser igual ao nome da propriedade
- Pode renomear variáveis
- Pode definir valores padrão
- Funciona com objetos dentro de objetos

Exemplo:

const pessoa = {
    nome: 'Anderson',
    sobrenome: 'Reis',
    idade: 20,
    endereco: {
        cidade: 'Estância Velha',
        estado: 'RS'
    }
};

// Pegando valores
const { nome, sobrenome, idade } = pessoa;

// Renomeando
const { nome: nomeCompleto } = pessoa;

// Valor padrão caso não exista
const { altura = 0 } = pessoa;

// Objeto dentro de objeto
const {
    endereco: { cidade, estado }
} = pessoa;

nome; // Anderson
cidade; // Estância Velha
*/

// ... rest

const pessoa = {
    nome: 'Anderson',
    sobrenome: 'Moreira',
    idade: 21,
    endereco:{
        rua: 'passo fundo',
        numero: 39
    }
};
//console.log(pessoa.nome) Atribuição normal

//const nome = pessoa.nome; Atribuição normal
//console.log(nome);

//const { nome, sobrenome } = pessoa; Atribuição via desestruturação
//console.log(nome, sobrenome);

//const{ endereco: { rua, numero }, endereco } = pessoa;
//console.log(rua, numero, endereco);