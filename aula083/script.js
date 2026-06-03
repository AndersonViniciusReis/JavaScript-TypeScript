/*
MÉTODOS DE INSTÂNCIA E MÉTODOS ESTÁTICOS (CLASS)

Em JavaScript existem dois tipos comuns de métodos dentro de classes:

1. Método de instância
2. Método estático

-----------------------------------
MÉTODO DE INSTÂNCIA
-----------------------------------

Pertence aos objetos criados pela classe.

Para usar, precisamos criar uma instância com new.

Exemplo:

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

const p1 = new Pessoa('Luiz');

p1.falar();

Saída:
Luiz está falando


Nesse caso:

p1.falar()

→ falar() pertence ao objeto.

Visualmente:

p1
│
├── nome
│
└── Pessoa.prototype
     └── falar()


-----------------------------------
MÉTODO ESTÁTICO
-----------------------------------

Pertence à própria classe.

Usamos a palavra:

static

Exemplo:

class Pessoa {
    static mensagem() {
        console.log('Método estático');
    }
}

Pessoa.mensagem();

Saída:
Método estático


Não precisa criar objeto.

Errado:

const p1 = new Pessoa();

p1.mensagem(); // ERRO


Visualmente:

Pessoa
│
└── mensagem()

p1
│
└── (não possui mensagem)


-----------------------------------
EXEMPLO COMPLETO
-----------------------------------

class Calculadora {
    constructor(numero) {
        this.numero = numero;
    }

    // Instância
    dobrar() {
        return this.numero * 2;
    }

    // Estático
    static somar(a, b) {
        return a + b;
    }
}

const calc = new Calculadora(10);

console.log(calc.dobrar());
// 20

console.log(Calculadora.somar(5, 5));
// 10


-----------------------------------
QUANDO USAR
-----------------------------------

Método de instância:
→ quando precisa acessar this
→ trabalha com dados do objeto

Método estático:
→ quando não precisa de this
→ utilitário da classe


Exemplo real:

class Math2 {
    static soma(a, b) {
        return a + b;
    }
}

Math2.soma(2, 3);

Parecido com:

Math.random();
Math.max();


Resumindo:

Instância:
objeto.metodo()

Estático:
Classe.metodo()
*/
class controleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // Método de instância
    aumentarVolume() {
        if (this.volume < 100) {
            this.volume += 10;
        }   
    }

    diminuirVolume() {
        if (this.volume > 0) {
            this.volume -= 10;
        }
    }
    // Método estático
    static trocarPilha() {
        console.log('Pilha trocada.');
    }
}
const controle = new controleRemoto('LG');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);

controleRemoto.trocarPilha();