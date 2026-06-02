// FUNÇÃO RECURSIVA

// Função recursiva = uma função
// que chama ela mesma

// Precisa ter uma condição de parada,
// senão entra em loop infinito


// 1. Exemplo básico

// function contar(numero){

//     if(numero > 5) return;

//     console.log(numero);

//     contar(numero + 1);
// }

// contar(1);

// Resultado:
// 1
// 2
// 3
// 4
// 5


// 2. Fatorial

// 5! = 5 × 4 × 3 × 2 × 1

// function fatorial(n){

//     if(n === 1) return 1;

//     return n * fatorial(n - 1);
// }

// console.log(fatorial(5));

// Resultado:
// 120


// 3. Contagem regressiva

// function regressiva(numero){

//     if(numero <= 0){
//         console.log("Fim");
//         return;
//     }

//     console.log(numero);

//     regressiva(numero - 1);
// }

// regressiva(5);

// Resultado:
// 5
// 4
// 3
// 2
// 1
// Fim


// Resumo rápido:

// Recursão = função chamando ela mesma

// Precisa de:

// Caso base -> condição de parada
// Chamada recursiva -> chama novamente

// Muito usado em:

// Árvores
// Pastas
// Matemática
// Algoritmos
function recursiva(max) {
    if (max >= 1000) return;
    max++;
    console.log(max);
    recursiva(max);
}
recursiva(0);