// RETURN em JavaScript

// return = devolve um valor e encerra a função


// 1. Return básico

// function soma(a,b){
//     return a + b;
// }

// console.log(soma(5,3)); //8


// 2. Sem return

// function mensagem(){
//     console.log("Olá");
// }

// console.log(mensagem());

// Resultado:
// Olá
// undefined

// undefined aparece porque a função
// não retornou nada


// 3. Return encerra a função

// function teste(){
//     console.log("Início");

//     return;

//     console.log("Fim");
// }

// teste();

// Resultado:
// Início

// O código abaixo do return não executa


// 4. Retornando texto

// function nome(){
//     return "Anderson";
// }

// console.log(nome());


// 5. Retornando booleano

// function maiorDeIdade(idade){
//     return idade >= 18;
// }

// console.log(maiorDeIdade(20)); //true
// console.log(maiorDeIdade(15)); //false


// 6. Retornando array

// function criarLista(){
//     return ["HTML","CSS","JS"];
// }

// console.log(criarLista());


// 7. Retornando objeto

// function criarUsuario(){
//     return {
//         nome:"Anderson",
//         idade:20
//     };
// }

// console.log(criarUsuario());


// 8. Salvando o valor retornado

// function multiplicar(a,b){
//     return a * b;
// }

// let resultado = multiplicar(4,5);

// console.log(resultado); //20


// Resumo rápido:

// return -> devolve valor
// return -> encerra a função
// sem return -> retorna undefined
// pode retornar números, textos,
// booleanos, arrays, objetos etc.
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}
const p1 = criaPessoa('Luiz', 'Otávio')

const p2 = {
    nome:'João', 
    sobrenome: 'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);