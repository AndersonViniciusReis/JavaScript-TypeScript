// 
// ========================================
// PROMISES EM JAVASCRIPT
// ========================================

// Promise é um objeto usado para representar
// uma operação assíncrona.

// Assíncrona significa:
// o código inicia agora,
// mas termina depois.

// Exemplos reais:
// - Buscar dados de API
// - Ler arquivos
// - Esperar resposta do banco
// - Esperar temporizador
// - Fazer login

// Uma Promise possui 3 estados:

// 1) pending
// → aguardando execução

// 2) fulfilled
// → terminou com sucesso

// 3) rejected
// → terminou com erro

// Fluxo:

// Promise
// ↓
// pending
// ↓
// fulfilled OU rejected


// Sintaxe básica:

// new Promise((resolve, reject) => {

// })

// resolve()
// → indica sucesso

// reject()
// → indica erro
// 


// 
// ========================================
// EXEMPLO 1
// CRIANDO UMA PROMISE
// ========================================
// 

// const promessa = new Promise((resolve, reject) => {

//     
//     setTimeout simula demora
//     de uma operação
//     

//     setTimeout(() => {

//         const deuCerto = true;

//         
//         Se operação funcionar
//         

//         if (deuCerto) {

//             /*
//             resolve envia valor
//             para o then()
//             */

//             resolve('Sucesso');

//         } else {

//             
//             reject envia erro
//             para o catch()
//             

//             reject('Falhou');

//         }

//     }, 2000);

// });


// 
// then()
// executa quando resolve()
// for chamado
// 

// promessa.then(valor => {

//     console.log(valor);

// });


// 
// catch()
// executa quando reject()
// for chamado
// 

// promessa.catch(erro => {

//     console.log(erro);

// });



// 
// ========================================
// EXEMPLO 2
// RETORNANDO UMA PROMISE
// ========================================
// 

// function espera() {

//     
//     return devolve
//     uma Promise
//     

//     return new Promise((resolve) => {

//         setTimeout(() => {

//             resolve('Terminou');

//         }, 3000);

//     });

// }


// espera()
// .then(resultado => {

//     console.log(resultado);

// });



// 
// ========================================
// EXEMPLO 3
// ENCADENANDO PROMISES
// ========================================
// 

// function etapa1() {

//     return Promise.resolve(
//         'Primeira etapa'
//     );

// }

// function etapa2() {

//     return Promise.resolve(
//         'Segunda etapa'
//     );

// }


// etapa1()

// .then(valor => {

//     console.log(valor);

//     
//     retorna nova Promise
//     

//     return etapa2();

// })

// .then(valor => {

//     console.log(valor);

// });



// 
// ========================================
// EXEMPLO 4
// ASYNC / AWAIT
// FORMA MODERNA
// ========================================
// 

// function carregar() {

//     return new Promise(resolve => {

//         setTimeout(() => {

//             resolve('Carregado');

//         }, 2000);

//     });

// }


// 
// async permite usar await
// 

// async function executar() {

//     
//     await espera Promise
//     terminar
//     

//     const resultado =
//         await carregar();

//     console.log(resultado);

// }


// executar();



// 
// ========================================
// RESUMO
// ========================================

// Promise =
// objeto para operações futuras

// resolve()
// → sucesso

// reject()
// → erro

// then()
// → trata sucesso

// catch()
// → trata erro

// async
// → cria função assíncrona

// await
// → espera Promise terminar
// ========================================
// 
function rand(min,max) {
    min*=1000;
    max*=1000;
 return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
        resolve(msg);
    }, tempo);
    });
}
esperaAi('Frase 1', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(446465, rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log('Eu serei o último a ser exibido.');
})
.catch(e => {
    console.log('erro', e)
})