/*
WHILE E DO WHILE

WHILE
- Executa enquanto a condição for verdadeira
- Primeiro verifica a condição, depois executa

Exemplo:

let i = 0;

while (i <= 5) {
    console.log(i);
    i++;
}


// DO WHILE
- Executa primeiro e verifica a condição depois
- Sempre executa pelo menos 1 vez

Exemplo:

let x = 0;

do {
    console.log(x);
    x++;
} while (x <= 5);


Resumo:

WHILE -> verifica e depois executa
DO WHILE -> executa e depois verifica
*/
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
};

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
console.log('#####');

do{
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10)