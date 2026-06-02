//função é um bloco de código que pode ser reutilizado, ela é definida uma vez e pode ser chamada várias vezes
//função é um conjunto de instruções que realizam uma tarefa específica, ela pode receber parâmetros e retornar um valor

//função sem parâmetro e sem retorno
function saudacao() {
    console.log("Olá, seja bem-vindo!");
}
console.log("Chamando a função saudacao:");
saudacao();

//função com parâmetro e sem retorno
function saudacaoNome(nome) {
    console.log("Olá, " + nome + ", seja bem-vindo!");
}

//função com parâmetro e com retorno
function saudacaoNomeIdade(nome, idade) {
    return "Olá, " + nome + ", você tem " + idade + " anos, seja bem-vindo!";
}

//chamando a função saudacaoNome
console.log("Chamando a função saudacaoNome:");
saudacaoNome("João");

//chamando a função saudacaoNomeIdade
console.log("Chamando a função saudacaoNomeIdade:");
var mensagem = saudacaoNomeIdade("Maria", 30);
console.log(mensagem);      

//função anônima
var saudacaoAnonima = function() {
    console.log("Olá, esta é uma função anônima!");
};      

//chamando a função anônima
console.log("Chamando a função anônima:");
saudacaoAnonima();

