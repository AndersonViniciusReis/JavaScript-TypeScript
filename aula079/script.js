/*
COMPOSIÇÃO EM JAVASCRIPT

Composição é um princípio da Programação Orientada a Objetos (POO)
que consiste em construir objetos combinando funcionalidades de outros objetos.

A ideia principal é:
"Ter algo" em vez de "Ser algo".

Enquanto a herança cria uma relação de parentesco entre classes,
a composição permite adicionar comportamentos de forma mais flexível.

Exemplo:

const podeVoar = {
    voar() {
        console.log("Voando...");
    }
};

const podeNadar = {
    nadar() {
        console.log("Nadando...");
    }
};

class Pato {
    constructor() {
        Object.assign(this, podeVoar, podeNadar);
    }
}

const pato = new Pato();

pato.voar();  // Voando...
pato.nadar(); // Nadando...

Neste exemplo, a classe Pato não herda de nenhuma classe que possua
os métodos voar() e nadar(). Em vez disso, ela recebe esses comportamentos
através da composição.

Vantagens da composição:
- Maior flexibilidade na reutilização de código.
- Menor acoplamento entre classes.
- Facilita a manutenção do sistema.
- Permite combinar diferentes comportamentos conforme necessário.

Resumindo:
Composição é uma técnica que permite criar objetos complexos
juntando funcionalidades menores e independentes, favorecendo
a reutilização de código e a flexibilidade da aplicação.
*/

const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome},
        sobrenome: { value: sobrenome}
    });
}

const pessoa1 = criaPessoa('Luiz', 'Otávio');
const pessoa2 = criaPessoa('Maria', 'Oliveira');
const pessoa3 = criaPessoa('João', 'Silva');
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
