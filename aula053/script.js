// CLOSURES

// Closure acontece quando uma função interna
// lembra e continua acessando variáveis
// da função externa mesmo depois dela terminar


// 1. Exemplo básico

// function externa(){

//     let nome = "Anderson";

//     function interna(){
//         console.log(nome);
//     }

//     return interna;
// }

// let funcao = externa();

// funcao();

// Resultado:
// Anderson

// Mesmo que externa() já tenha acabado,
// interna() ainda lembra da variável nome


// 2. Closure para contador

// function contador(){

//     let numero = 0;

//     return function(){

//         numero++;

//         return numero;
//     };
// }

// let contar = contador();

// console.log(contar()); //1
// console.log(contar()); //2
// console.log(contar()); //3

// A variável continua salva na memória


// 3. Criando funções personalizadas

// function multiplicador(valor){

//     return function(numero){
//         return numero * valor;
//     };
// }

// let dobrar = multiplicador(2);
// let triplicar = multiplicador(3);

// console.log(dobrar(5)); //10
// console.log(triplicar(5)); //15

// Cada função guarda seu próprio valor


// Resumo rápido:

// Closure = função + memória do escopo

// A função interna:

// Acessa variáveis externas
// Continua lembrando delas
// Mesmo após a função externa terminar

// Muito usado em:

// Contadores
// Funções privadas
// Configurações
// Callbacks

function retornaFuncao() {
    const nome = 'marcus';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao);