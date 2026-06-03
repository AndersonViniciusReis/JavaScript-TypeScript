/*
HERANÇA EM CLASS (JAVASCRIPT)

Herança é um conceito da Programação Orientada a Objetos (POO)
que permite que uma classe reutilize características de outra.

A ideia é:

Classe filha → herda da classe pai

Em JavaScript usamos:

extends

para criar herança.

Exemplo:

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

class Aluno extends Pessoa {
}

const aluno = new Aluno('Luiz', 'Otávio');

console.log(aluno.nome);
// Luiz

aluno.falar();
// Luiz está falando


COMO FUNCIONA

Aluno herda:
- constructor()
- falar()

Visualmente:

aluno
│
├── nome
├── sobrenome
│
└── [[Prototype]]
     │
     └── Pessoa.prototype
           └── falar()


SOBRESCREVENDO MÉTODOS (OVERRIDE)

A classe filha pode alterar comportamentos.

class Pessoa {
    falar() {
        console.log('Pessoa falou');
    }
}

class Professor extends Pessoa {
    falar() {
        console.log('Professor explicou');
    }
}

const prof = new Professor();

prof.falar();
// Professor explicou


USANDO SUPER

super chama métodos da classe pai.

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

class Cliente extends Pessoa {
    constructor(nome, saldo) {
        super(nome);

        this.saldo = saldo;
    }
}

const cliente = new Cliente('Maria', 500);

console.log(cliente);


Exemplo completo:

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        console.log(`Olá, sou ${this.nome}`);
    }
}

class Funcionario extends Pessoa {
    constructor(nome, cargo) {
        super(nome);

        this.cargo = cargo;
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando.`);
    }
}

const f1 = new Funcionario(
    'João',
    'Desenvolvedor'
);

f1.apresentar();
f1.trabalhar();


Resumindo:

extends → cria herança
super → acessa a classe pai
override → substitui comportamento herdado

Herança cria relação:
"É um"

Aluno É UMA Pessoa
Professor É UMA Pessoa
Funcionario É UMA Pessoa
*/

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado.`);
            return;
        }
        this.ligado = true;
        console.log(`${this.nome} foi ligado.`);
    }
    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado.`);
            return;
        }
        this.ligado = false;
        console.log(`${this.nome} foi desligado.`);
    }
    
}
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
}

const s1 = new Smartphone('Sansung', 'Petro', 'S 20');
console.log(s1);

const t1 = new Tablet('iPad', true);
console.log(t1);