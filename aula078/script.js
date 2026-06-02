/*
POLIMORFISMO EM JAVASCRIPT

Polimorfismo é um dos conceitos da Programação Orientada a Objetos (POO)
que permite que diferentes objetos respondam à mesma ação de maneiras diferentes.

A palavra "polimorfismo" significa "muitas formas".

Em JavaScript, isso acontece quando métodos com o mesmo nome possuem
comportamentos diferentes dependendo do objeto que os executa.

Exemplo:

class Animal {
    falar() {
        console.log("O animal fez um som.");
    }
}

class Cachorro extends Animal {
    falar() {
        console.log("O cachorro latiu.");
    }
}

class Gato extends Animal {
    falar() {
        console.log("O gato miou.");
    }
}

const cachorro = new Cachorro();
const gato = new Gato();

cachorro.falar(); // O cachorro latiu.
gato.falar();     // O gato miou.

Nesse caso, o método "falar()" existe em todas as classes,
mas cada uma possui uma implementação diferente.

Vantagens do polimorfismo:
- Código mais organizado.
- Maior reutilização de código.
- Facilidade para adicionar novos comportamentos.
- Menor necessidade de estruturas condicionais (if/switch).

Resumindo:
Polimorfismo é a capacidade de objetos diferentes utilizarem o mesmo método,
mas executarem ações específicas de acordo com sua própria implementação.
*/

// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Agência: ${this.agencia} | Conta: ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > this.saldo + this.limite) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaCorrente = new ContaCorrente("0001", "12345-6", 0, 100);
contaCorrente.sacar(101); // Saldo insuficiente: R$0.00

const contaPoupanca = new ContaPoupanca("0002", "78910-1", 0, 100);
contaPoupanca.sacar(101); // Saldo insuficiente: R$0.00