// ==========================================================
// OBJECT.DEFINEPROPERTY()
// ==========================================================


// Serve para criar ou modificar
// uma propriedade do objeto.


// Sintaxe:

// Object.defineProperty(objeto, "chave", {

//     value: valor,

//     writable: true

// });



// ==========================================================
// EXEMPLO
// ==========================================================


// const pessoa = {};


// Object.defineProperty(pessoa, "nome", {

//     value: "Anderson",

//     writable: false

// });


// pessoa.nome = "Carlos";


// Continua Anderson.

// console.log(pessoa.nome);



// ==========================================================
// PRINCIPAIS CONFIGURAÇÕES
// ==========================================================


// value
// -> valor da propriedade.


// writable
// -> pode alterar?


// enumerable
// -> aparece em loops?


// configurable
// -> pode deletar?



// ==========================================================
// OBJECT.DEFINEPROPERTIES()
// ==========================================================


// Cria várias propriedades ao mesmo tempo.


// const pessoa = {};


// Object.defineProperties(pessoa, {

//     nome: {

//         value: "Anderson"

//     },

//     idade: {

//         value: 20

//     }

// });


// console.log(pessoa);



// ==========================================================
// DIFERENÇA
// ==========================================================


// defineProperty()
// -> uma propriedade.


// defineProperties()
// -> várias propriedades.

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable:true, // mostra a chave
        value: estoque,// valor
        writable: true,// pode alterar o valor ou não
        configurable: true// deixa configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable:true, // mostra a chave
            value: nome,// valor
            writable: true,// pode alterar o valor ou não
            configurable: true// deixa configuravel
        },
        preco: {
            enumerable:true, // mostra a chave
            value: preco,// valor
            writable: true,// pode alterar o valor ou não
            configurable: true// deixa configuravel
        },
        estoque: {
            enumerable:true, // mostra a chave
            value: estoque,// valor
            writable: true,// pode alterar o valor ou não
            configurable: true// deixa configuravel
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);