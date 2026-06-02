//objetos são estruturas de dados que permitem armazenar múltiplos valores em uma única variável, organizados por meio de chaves e valores. Eles são amplamente utilizados em JavaScript para representar entidades do mundo real, como pessoas, carros, produtos, etc.
//objetos são criados usando chaves {} e os valores são atribuídos a chaves específicas.
//objetos podem conter propriedades (variáveis) e métodos (funções) que descrevem o comportamento do objeto.

//Exemplo de criação de um objeto
const pessoa = {
    nome: "João",
    sobrenome: "Silva",
    idade: 30,
};
//Acessando propriedades do objeto
console.log(pessoa.nome); // Saída: João
console.log(pessoa.sobrenome); // Saída: Silva
console.log(pessoa.idade); // Saída: 30

console.log(pessoa); // Saída: { nome: 'João', sobrenome: 'Silva', idade: 30 }

//Criando objetos com função construtora
function Pessoa(nome, sobrenome, idade) {
    return{nome,sobrenome,idade}
}
const pessoa1 = Pessoa("Maria", "Santos", 25);
const pessoa2 = Pessoa("Carlos", "Oliveira", 40);
const pessoa3 = Pessoa("Ana", "Costa", 35);

console.log(pessoa1); // Saída: { nome: 'Maria', sobrenome: 'Santos', idade: 25 }
console.log(pessoa2); // Saída: { nome: 'Carlos', sobrenome: 'Oliveira', idade: 40 }
console.log(pessoa3); // Saída: { nome: 'Ana', sobrenome: 'Costa', idade: 35 }