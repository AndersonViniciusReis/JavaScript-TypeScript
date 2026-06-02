// FUNÇÕES IMEDIATAS (IIFE)

// IIFE = Immediately Invoked Function Expression
// Em português:
// Função imediatamente invocada

// É uma função criada e executada
// no mesmo momento


// 1. Exemplo básico

// (function(){
//     console.log("Executou");
// })();

// Resultado:
// Executou


// 2. IIFE com parâmetros

// (function(nome){
//     console.log("Olá " + nome);
// })("Anderson");

// Resultado:
// Olá Anderson


// 3. IIFE retornando valor

// let resultado = (function(a,b){
//     return a + b;
// })(5,3);

// console.log(resultado);

// Resultado:
// 8


// 4. IIFE usando Arrow Function

// (() => {
//     console.log("Arrow IIFE");
// })();

// Resultado:
// Arrow IIFE


// 5. Criando escopo privado

// (function(){

//     let senha = "12345";

//     console.log("Acesso permitido");

// })();

// console.log(senha);

// Resultado:
// Erro

// A variável existe somente
// dentro da IIFE


// Resumo rápido:

// IIFE = função que executa imediatamente

// Sintaxe:
// (function(){})();

// Vantagens:

// Executa uma vez
// Cria escopo privado
// Evita conflito de variáveis
(function (idade , peso, altura) {
    const sobrenome = "Silva";
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }
    function falaNome() {
        console.log(criaNome("Anderson"));
    }
    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.75);