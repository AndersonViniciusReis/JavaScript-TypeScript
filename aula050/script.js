// Parâmetros são valores recebidos por uma função.
// Argumentos são os valores enviados para ela.

// Exemplo básico
//function saudacao(nome){
    // nome = parâmetro
//    console.log("Olá " + nome);
//}
//saudacao("Anderson"); // Anderson = argumento

// 1. Um parâmetro
//function quadrado(numero){
//    return numero * numero;
//}
//console.log(quadrado(4)); //16

// 2. Vários parâmetros
//function soma(a,b){
//    return a + b;
//}
//console.log(soma(5,3)); //8

// 3. Parâmetro padrão
//function mensagem(nome="Visitante"){
//    console.log("Olá " + nome);
//}
//mensagem(); //Olá Visitante
//mensagem("Anderson"); //Olá Anderson

// 4. Rest parameter (...)
// Recebe vários valores em um array
//function somarTudo(...numeros){
//    return numeros.reduce((total,n)=> total + n,0);
//}
//console.log(somarTudo(1,2,3,4)); //10

// 5. Desestruturação
//function mostrarUsuario({nome,idade}){
//    console.log(nome);
//    console.log(idade);
//}
//mostrarUsuario({nome:"Anderson",idade:20});

// Argumento que sustenta todos os argumentos enviados

// Arrays e objetos dentro de funções

// 1. Recebendo um array como parâmetro

// Arrays e objetos dentro de funções

// 1. Recebendo um array como parâmetro

// function mostrarNumeros(numeros){
//     // Mostra todos os valores do array
//     console.log(numeros);
// }

// mostrarNumeros([1,2,3,4]);


// 2. Percorrendo um array

// function listarNomes(nomes){
//     // Percorre cada item do array
//     nomes.forEach(nome => console.log(nome));
// }

// listarNomes(["Ana","João","Carlos"]);


// 3. Recebendo um objeto

// function mostrarPessoa(pessoa){
//     // Acessa propriedades do objeto
//     console.log(pessoa.nome);
//     console.log(pessoa.idade);
// }

// mostrarPessoa({
//     nome:"Anderson",
//     idade:20
// });


// 4. Desestruturação do objeto no parâmetro

// function exibirUsuario({nome,idade}){
//     // Acessa diretamente as propriedades
//     console.log(nome);
//     console.log(idade);
// }

// exibirUsuario({
//     nome:"Anderson",
//     idade:20
// });


// 5. Retornando um array

// function criarNumeros(){
//     // Retorna um array
//     return [10,20,30];
// }

// console.log(criarNumeros());


// 6. Retornando um objeto

// function criarPessoa(){
//     // Retorna um objeto
//     return {
//         nome:"Anderson",
//         idade:20
//     };
// }

// console.log(criarPessoa());


// Resumo:
// [] = Array → guarda vários valores
// {} = Objeto → guarda dados em chave:valor
// Funções podem receber, modificar e retornar ambos

//function funcao() {
//    let total = 0
//    for (let argumentos of arguments) {
//        total += argumentos;
//    }
//    console.log(total)
//}
//funcao(1, 2, 3, 4, 5, 6, 7);

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador)
}
conta('/', 1, 20, 30, 40, 50);