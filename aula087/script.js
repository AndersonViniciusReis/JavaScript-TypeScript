/*
========================================
RESUMO DE PROMISE
========================================

Promise.all()

→ Espera TODAS terminarem

Se UMA falhar
→ tudo falha

Exemplo:

Promise.all([
    p1,
    p2,
    p3
]);



Promise.race()

→ Retorna a PRIMEIRA
que terminar

Exemplo:

Promise.race([
    p1,
    p2,
    p3
]);



Promise.resolve()

→ Cria Promise
já resolvida

Exemplo:

return Promise.resolve(
    'Sucesso'
);



Promise.reject()

→ Cria Promise
já rejeitada

Exemplo:

return Promise.reject(
    'Erro'
);



RESUMINDO:

all
→ todas

race
→ primeira

resolve
→ sucesso imediato

reject
→ erro imediato

========================================
*/
function rand(min,max) {
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

const promises = [
    esperaAi('promise 1', rand(1, 5)),
    esperaAi('promise 2', rand(1, 5)),
    esperaAi('promise 3', rand(1, 5)),
    esperaAi(1000, 1000),
];
Promise.race(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
});