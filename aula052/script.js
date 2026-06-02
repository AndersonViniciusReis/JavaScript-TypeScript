// ESCOPO LÉXICO (Lexical Scope)

// Escopo léxico = uma função consegue acessar
// variáveis do lugar onde ela foi criada


// 1. Exemplo básico

// let nome = "Anderson";

// function mostrarNome(){
//     return nome;
// }

// console.log(mostrarNome());

// Resultado:
// Anderson

// A função acessou a variável externa


// 2. Escopo interno acessando externo

// let mensagem = "Olá";

// function pai(){

//     function filho(){
//         console.log(mensagem);
//     }

//     filho();
// }

// pai();

// Resultado:
// Olá

// A função filha consegue acessar
// variáveis do pai


// 3. Escopo externo NÃO acessa interno

// function teste(){

//     let idade = 20;
// }

// console.log(idade);

// Resultado:
// Erro

// A variável existe apenas
// dentro da função


// 4. Ordem dos escopos

// let valor = "Global";

// function pai(){

//     let valor = "Pai";

//     function filho(){

//         let valor = "Filho";

//         console.log(valor);
//     }

//     filho();
// }

// pai();

// Resultado:
// Filho

// O JavaScript procura a variável
// do escopo mais próximo primeiro


// Resumo rápido:

// Escopo léxico = a função procura
// variáveis onde foi criada

// Interno -> acessa externo
// Externo -> não acessa interno

// JS procura:
// Escopo atual
// Escopo pai
// Escopo global
const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}
falaNome();