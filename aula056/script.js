// FUNÇÕES FÁBRICA (FACTORY FUNCTIONS)

// Factory Function = função que cria
// e retorna objetos

// Serve para criar vários objetos
// sem repetir código


// 1. Exemplo básico

// function criarPessoa(nome,idade){

//     return {
//         nome: nome,
//         idade: idade
//     };
// }

// let pessoa1 = criarPessoa("Anderson",20);

// console.log(pessoa1);

// Resultado:
// { nome: "Anderson", idade: 20 }


// 2. Versão reduzida

// Quando o nome da variável e da propriedade
// são iguais, pode simplificar

// function criarPessoa(nome,idade){

//     return {
//         nome,
//         idade
//     };
// }

// console.log(criarPessoa("Anderson",20));


// 3. Adicionando métodos

// function criarPessoa(nome,idade){

//     return {

//         nome,
//         idade,

//         falar(){
//             return "Olá";
//         }
//     };
// }

// let pessoa = criarPessoa("Anderson",20);

// console.log(pessoa.falar());

// Resultado:
// Olá


// 4. Usando this

// function criarPessoa(nome,idade){

//     return {

//         nome,
//         idade,

//         apresentar(){
//             return `Meu nome é ${this.nome}`;
//         }
//     };
// }

// let usuario = criarPessoa("Anderson",20);

// console.log(usuario.apresentar());

// Resultado:
// Meu nome é Anderson


// Resumo rápido:

// Factory Function = cria objetos

// Vantagens:

// Evita repetir código
// Facilita criar vários objetos
// Pode ter propriedades e métodos

function criaPessoa(nome, sobrenome, a, p) {
    return{
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },
        fala(assunto = 'Falando sobre NADA.') {
            return `${nome} esta ${assunto}.`;
        },
        altura: a,
        peso: p,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.9, 57);
const p3 = criaPessoa('Juniro', 'Otávio', 1.5, 110);
console.log(p1.imc);
console.log(p2);
console.log(p3);

