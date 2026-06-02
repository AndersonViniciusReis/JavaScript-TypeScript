// ==========================================================
// GETTERS E SETTERS
// ==========================================================


// Getters e setters servem para
// controlar leitura e alteração
// de propriedades.


// getter
// -> pega valor.


// setter
// -> altera valor.



// ==========================================================
// GET
// ==========================================================


// "get"
// cria um getter.


// const pessoa = {

//     nome: "Anderson",

//     get mostrarNome() {

//         return this.nome;

//     }

// };


// console.log(pessoa.mostrarNome);



// ==========================================================
// SET
// ==========================================================


// "set"
// cria um setter.


// const pessoa = {

//     nome: "",

//     set mudarNome(valor) {

//         this.nome = valor;

//     }

// };


// pessoa.mudarNome = "Carlos";


// console.log(pessoa.nome);



// ==========================================================
// GET E SET JUNTOS
// ==========================================================


// const produto = {

//     nome: "Teclado",


//     get nomeProduto() {

//         return this.nome;

//     },


//     set nomeProduto(valor) {

//         this.nome = valor;

//     }

// };


// produto.nomeProduto = "Mouse";


// console.log(produto.nomeProduto);



// ==========================================================
// RESUMO
// ==========================================================


// get
// -> pega valor.


// set
// -> altera valor.


// this
// -> representa o próprio objeto.
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable:true, // mostra a chave
        //value: estoque,// valor
        //writable: true,// pode alterar o valor ou não
        configurable: true,// deixa configuravel
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError ('Mensagem');
            }

            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}

//const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);
//p1.estoque = 22333;
//console.log(p1.estoque);
const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);