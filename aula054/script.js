// FUNÇÕES CALLBACK

// Callback = uma função passada
// como argumento para outra função

// A função recebida será executada
// em algum momento


// 1. Exemplo básico

// function mensagem(){
//     console.log("Olá");
// }

// function executar(funcao){
//     funcao();
// }

// executar(mensagem);

// Resultado:
// Olá


// 2. Callback com parâmetros

// function mostrarResultado(resultado){
//     console.log("Resultado:", resultado);
// }

// function soma(a,b,callback){
//     let total = a + b;

//     callback(total);
// }

// soma(5,3,mostrarResultado);

// Resultado:
// Resultado: 8


// 3. Callback usando função anônima

// function saudacao(callback){
//     callback();
// }

// saudacao(function(){
//     console.log("Bem-vindo");
// });

// Resultado:
// Bem-vindo


// 4. Callback usando Arrow Function

// function saudacao(callback){
//     callback();
// }

// saudacao(() => {
//     console.log("Olá");
// });

// Resultado:
// Olá


// 5. Exemplo comum com forEach

// let nomes = ["Ana","João","Carlos"];

// nomes.forEach(function(nome){
//     console.log(nome);
// });

// Resultado:
// Ana
// João
// Carlos

// forEach recebe uma callback


// Resumo rápido:

// Callback = função enviada para outra função

// Muito usado em:

// forEach()
// map()
// filter()
// eventos
// temporizadores
// requisições
function rand(min, max) {
    min *= 1000;
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();

    }, rand(1, 3));
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand(1, 3));
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand(1, 3));
}

f1();
f2();
f3();
console.log('Olá, mundo!');