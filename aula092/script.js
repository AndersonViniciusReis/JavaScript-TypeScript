/*
========================================
BABEL
========================================

Babel serve para converter
JavaScript moderno
em JavaScript compatível
com navegadores antigos.

Em palavras simples:

Você escreve código novo
↓

Babel traduz
↓

navegador entende

========================================

Exemplo:

Você escreve:

class Pessoa {

    constructor(nome) {

        this.nome = nome;

    }

}


Navegadores antigos
podem não entender.

Babel transforma para:

function Pessoa(nome) {

    this.nome = nome;

}


Outro exemplo:

Você escreve:

const soma =
(a, b) => a + b;


Babel converte para:

var soma =
function(a, b) {

    return a + b;

};


========================================

Babel converte recursos como:

- class
- arrow function
- let / const
- async / await
- módulos
- sintaxe moderna

========================================

Fluxo:

Código moderno
↓

Babel
↓

Código compatível
↓

Navegador executa

========================================
*/
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
};