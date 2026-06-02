// ==========================================================
// PROTOTYPE
// ==========================================================


// Prototype é um objeto usado
// para compartilhar métodos e propriedades
// entre várias instâncias.


// Em vez de criar uma cópia do método
// para cada objeto, ele fica no prototype.


// ==========================================================
// EXEMPLO
// ==========================================================


// function Pessoa(nome) {

//     this.nome = nome;

// }


// Pessoa.prototype.falar = function() {

//     console.log(`${this.nome} falou.`);

// };


// const p1 = new Pessoa('Anderson');

// const p2 = new Pessoa('Carlos');


// p1.falar();

// p2.falar();



// ==========================================================
// VANTAGEM
// ==========================================================


// Sem prototype:

// Cada objeto teria sua própria cópia
// da função.


// Com prototype:

// Todos compartilham a mesma função.


// Economiza memória.


// ==========================================================
// CADEIA DE PROTÓTIPOS
// ==========================================================


// Quando procuramos:

// p1.falar()


// O JavaScript procura:

// p1.falar

// Se não encontrar:

// Pessoa.prototype.falar

// Se não encontrar:

// Object.prototype

// Se não encontrar:

// null



// ==========================================================
// RESUMO
// ==========================================================


// prototype
// -> local onde métodos compartilhados ficam.


// Todos os objetos criados com "new"
// herdam do prototype da função construtora.


// Menos memória.

// Mais reutilização de código.

// construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

// instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- pessoa = Funcão construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- pessoa = Funcão construtora


console.dir(pessoa1);
console.dir(pessoa2);

