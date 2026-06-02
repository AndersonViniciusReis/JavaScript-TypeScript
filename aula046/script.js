/*
SETINTERVAL E SETTIMEOUT

setTimeout
- Executa uma função apenas 1 vez
- Executa após um tempo definido (milissegundos)

Exemplo:

setTimeout(function() {
    console.log('Executou');
}, 3000);

// Executa após 3 segundos


setInterval
- Executa uma função repetidamente
- Repete no intervalo definido (milissegundos)

Exemplo:

setInterval(function() {
    console.log('Executando...');
}, 1000);

// Executa a cada 1 segundo


Parar setInterval:

const timer = setInterval(function() {
    console.log('Rodando');
}, 1000);

clearInterval(timer);


Resumo:

setTimeout -> executa uma vez
setInterval -> executa várias vezes
clearInterval -> para a repetição
*/
function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12:false
    });
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 100000)