// Object.setPrototypeOf()
// define o prototype de um objeto.


// Exemplo:

// Object.setPrototypeOf(cachorro, animal);


// Agora cachorro herda tudo
// que existe em animal.


// cachorro.metodo();


// Se o método não existir em cachorro,
// o JavaScript procura em animal.
// new Object() -> Object.prototype

//==========================================================================

// Object.getPrototypeOf()
// -> retorna o prototype de um objeto.


// Exemplo:

// const animal = {};

// const cachorro = {};


// Object.setPrototypeOf(cachorro, animal);


// console.log(Object.getPrototypeOf(cachorro));


// Resultado:

// animal


// Útil para descobrir de quem
// um objeto está herdando.

//==========================================================================

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 50
}
Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        value: 'Livro'
    },
    preco: {
        writable: true,
        value: 30
    }
});

p1.desconto(100);
console.log(p1.preco);
p2.aumento(100);
console.log(p2.preco);
p3.aumento(100);
console.log(p3.preco);