/*
CLASS EM JAVASCRIPT

Class é uma forma mais moderna e organizada de criar objetos
e trabalhar com Programação Orientada a Objetos (POO).

Por baixo dos panos, classes ainda utilizam protótipos
(prototype), mas a sintaxe fica mais parecida com outras
linguagens orientadas a objetos.

Estrutura básica:

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

Criando objetos:

const pessoa1 = new Pessoa('Luiz', 'Otávio');
const pessoa2 = new Pessoa('Maria', 'Oliveira');

pessoa1.falar();
// Luiz está falando

pessoa2.falar();
// Maria está falando

PARTES DA CLASS

constructor()
→ Método executado automaticamente ao criar um objeto.
→ Serve para inicializar atributos.

this
→ Representa o objeto atual.

métodos
→ Funções que pertencem à classe.

Exemplo com mais métodos:

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} falou.`);
    }

    comer() {
        console.log(`${this.nome} comeu.`);
    }
}

const p1 = new Pessoa('João');

p1.falar();
p1.comer();

HERANÇA

Uma classe pode herdar características de outra.

class Animal {
    emitirSom() {
        console.log('Som...');
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log('Au Au');
    }
}

const cachorro = new Cachorro();

cachorro.emitirSom();

Nesse caso:
- Cachorro herda de Animal
- sobrescreve emitirSom()
- isso também é um exemplo de polimorfismo

MÉTODOS ESTÁTICOS

Pertencem à classe e não ao objeto.

class Calculadora {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Calculadora.soma(2, 3));

Resumindo:
Class é uma forma de criar modelos (moldes)
para gerar objetos com atributos e métodos,
utilizando protótipos internamente.
*/

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando.`);
    }
    comer() {
        console.log(`${this.nome} ${this.sobrenome} está comendo.`);
    }
    beber() {
        console.log(`${this.nome} ${this.sobrenome} está bebendo.`);
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');

console.log(p1);
p1.falar();
p1.comer();
p1.beber();

// Função construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// Métodos no prototype
Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} ${this.sobrenome} está falando.`);
};

Pessoa2.prototype.comer = function () {
    console.log(`${this.nome} ${this.sobrenome} está comendo.`);
};

Pessoa2.prototype.beber = function () {
    console.log(`${this.nome} ${this.sobrenome} está bebendo.`);
};

// Criando objeto
const p2 = new Pessoa2('Luiz', 'Otávio');

console.log(p2);
p2.falar();
p2.comer();
p2.beber();

// Função fábrica
function pessoa3(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        falar() {
            console.log(`${this.nome} ${this.sobrenome} está falando.`);
        },

        comer() {
            console.log(`${this.nome} ${this.sobrenome} está comendo.`);
        },

        beber() {
            console.log(`${this.nome} ${this.sobrenome} está bebendo.`);
        }
    };
}

// Criando objeto
const p3 = pessoa3('Luiz', 'Otávio');

console.log(p3);
p3.falar();
p3.comer();
p3.beber();