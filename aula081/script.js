/*
GETTER E SETTER EM CLASS (JAVASCRIPT)

Getter e Setter são métodos especiais usados para
ler e modificar propriedades como se fossem atributos.

Eles permitem controlar acesso aos dados do objeto.

GET
→ Obtém (lê) um valor.

SET
→ Define (altera) um valor.

Exemplo:

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Getter
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    // Setter
    set nomeCompleto(valor) {
        const partes = valor.split(' ');

        this.nome = partes.shift();
        this.sobrenome = partes.join(' ');
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');

console.log(p1.nomeCompleto);
// Luiz Otávio


// Chamando o setter
p1.nomeCompleto = 'Maria Oliveira';

console.log(p1.nome);
// Maria

console.log(p1.sobrenome);
// Oliveira

console.log(p1.nomeCompleto);
// Maria Oliveira


COMO FUNCIONA

Quando você faz:

p1.nomeCompleto

o JavaScript executa:

get nomeCompleto()


Quando você faz:

p1.nomeCompleto = 'Maria Oliveira'

o JavaScript executa:

set nomeCompleto(valor)


OBSERVAÇÃO

Getter e Setter são usados SEM parênteses.

Correto:
p1.nomeCompleto

Errado:
p1.nomeCompleto()


Exemplo comum (validação):

class Produto {
    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(valor) {
        if (typeof valor !== 'string') return;

        this._nome = valor;
    }
}

const produto = new Produto('Notebook');

produto.nome = 'Mouse';

console.log(produto.nome);
// Mouse


Resumindo:

get → transforma método em leitura
set → transforma método em escrita

Permitem proteger e controlar os dados do objeto.
*/

const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor < 0 || valor > 100) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i < 200; i++) {
    c1.acelerar();
}

c1.velocidade = 99;
console.log(c1.velocidade);