/*
========================================
ASYNC / AWAIT (RESUMO COMPLETO)
========================================

async / await é uma forma moderna
de trabalhar com Promises.

Deixa o código mais limpo e parecido
com execução normal (linha por linha).
========================================




FUNÇÃO QUE SIMULA UMA PROMISE


function esperaAi(msg, tempo) {

    
    Retorna uma Promise
    

    return new Promise(resolve => {

        setTimeout(() => {

            
            Resolve envia o valor
            

            resolve(msg);

        }, tempo);

    });

}



ASYNC FUNÇÃO


async function executa() {

    
    await espera a Promise terminar
    antes de continuar
    

    const frase1 = await esperaAi('Frase 1', 2000);
    console.log(frase1);

    const frase2 = await esperaAi('Frase 2', 1000);
    console.log(frase2);

    const frase3 = await esperaAi('Frase 3', 500);
    console.log(frase3);

}



TRATAMENTO DE ERRO


async function executaComErro() {

    try {

        
        Código que pode falhar
        

        const resultado = await esperaAi('Teste', 1000);
        console.log(resultado);

    } catch (erro) {

        
        Captura qualquer erro
        

        console.log('Erro:', erro);

    }

}



EXECUÇÃO


executa();
executaComErro();



========================================
RESUMO FINAL

async → função assíncrona

await → espera Promise

try/catch → trata erros

Mais limpo que .then()

Fluxo:

async function
    ↓
await Promise
    ↓
continua execução

========================================
*/
function rand(min = 0,max = 3) {
    min*=1000;
    max*=1000;
 return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return;
        }

        resolve(msg.toUpperCase() + ' - Passei no promise');
        return;
    }, tempo);
    });
}

// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand())
//     })
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(valor => {
//         console.log(valor)
//         return valor
//     })
//     .then(valor => {
//         console.log('terminamos na fase:', valor)
//     })
//     .catch(e => console.log(e));

async function executa() {
    try{
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch(e) {
        console.log(e);
    }
    
}
executa();