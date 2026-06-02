// ==========================================================
// HERANÇA
// ==========================================================


// Herança é quando um objeto
// ou classe reutiliza características
// de outro.


// Em JavaScript, isso acontece
// através dos prototypes.


// Exemplo:

// const animal = {

//     falar() {
//         console.log('Som');
//     }

// };


// const cachorro = {

//     nome: 'Bolt'

// };


// Object.setPrototypeOf(cachorro, animal);


// cachorro.falar();


// O método falar() não existe
// em cachorro.


// Então o JavaScript procura
// no prototype (animal).


// Resultado:

// Som



// ==========================================================
// RESUMO
// ==========================================================


// Herança
// -> reutilizar propriedades e métodos.


// JavaScript faz isso usando
// prototypes.


// Se não encontrar algo no objeto,
// procura no prototype.

// Produto -> aumento, desconto
// Camiseta =  Cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

camiseta.prototype.aumento = function(percentual) {
    this.preco += this.preco * (percentual / 100);
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Genérica', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);

console.log(produto);
console.log(camiseta);
console.log(caneca);