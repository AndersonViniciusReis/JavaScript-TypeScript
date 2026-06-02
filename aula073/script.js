/*
Object.values (retorna os valores)
Object.entries (retorna as chaves e valores)
Object.assign(des, any) (copia as propriedades de um objeto para outro)
Object.getOwnPropertyDescriptor(o, 'prop') (retorna a descrição de uma propriedade)
... (spread) (espalha os valores de um objeto)

// Já vimos
Object.keys (retorna as chaves)
Object.frezze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

//==========================================================================

// Copiando por referência:

// const pessoa2 = pessoa1;

// pessoa2 e pessoa1 apontam
// para o mesmo objeto.


// Copiando os valores (spread):

// const pessoa2 = { ...pessoa1 };


// Agora pessoa2 é um novo objeto.

// Alterar pessoa2 não altera pessoa1.


// Exemplo:

// const pessoa1 = {
//     nome: 'Anderson'
// };

// const pessoa2 = { ...pessoa1 };

// pessoa2.nome = 'Carlos';


// pessoa1.nome -> Anderson
// pessoa2.nome -> Carlos

//==========================================================================

// Object.assign() copia propriedades
// de um objeto para outro.


// Exemplo:

// const pessoa2 = Object.assign({}, pessoa1);


// "{}" cria um objeto vazio.

// pessoa1 fornece os valores.


// Resultado:

// pessoa2 é uma cópia de pessoa1.


// Alterar pessoa2 não altera pessoa1.


// Equivalente ao spread:

// const pessoa2 = { ...pessoa1 };


const produto = { nome: 'Caneca', preco: 1.8 };

//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);