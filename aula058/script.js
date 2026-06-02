// FUNÇÕES CONSTRUTORAS (CONSTRUCTOR FUNCTIONS)

// Constructor Function = função usada
// para criar objetos com "new"

// Por convenção o nome começa
// com letra maiúscula


// 1. Exemplo básico

// function Pessoa(nome,sobrenome){

//     this.nome = nome;
//     this.sobrenome = sobrenome;
// }

// let p1 = new Pessoa("Anderson","Reis");

// console.log(p1);

// Resultado:
// Pessoa {nome:"Anderson", sobrenome:"Reis"}


// 2. Adicionando métodos

// function Pessoa(nome,sobrenome){

//     this.nome = nome;
//     this.sobrenome = sobrenome;

//     this.falar = function(){
//         return `${this.nome} está falando.`;
//     };
// }

// let pessoa = new Pessoa("Anderson","Reis");

// console.log(pessoa.falar());

// Resultado:
// Anderson está falando.


// 3. O que o new faz

// let p1 = new Pessoa("Anderson","Reis");

// O new faz algo parecido com:

// let p1 = {};

// p1.nome = "Anderson";
// p1.sobrenome = "Reis";

// return p1;


// 4. Propriedades privadas

// function Pessoa(nome,sobrenome){

//     const id = 123;

//     this.nome = nome;

//     this.mostrarId = function(){
//         return id;
//     };
// }

// let p1 = new Pessoa("Anderson","Reis");

// console.log(p1.mostrarId());

// Resultado:
// 123

// console.log(p1.id);

// Resultado:
// undefined


// Resumo rápido:

// function Pessoa(){}
// new Pessoa()

// this -> objeto criado
// new -> cria objeto
// Constructor -> cria objetos
// Pode ter propriedades e métodos

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const id = 123456;

    const metodoInterno = () => { };
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();