/*
BREAK E CONTINUE

BREAK
- Interrompe o laço imediatamente
- Sai do for, while ou do while

Exemplo:

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

// Saída:
// 0 1 2 3 4


CONTINUE
- Pula a repetição atual
- Vai para a próxima repetição do laço

Exemplo:

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }

    console.log(i);
}

// Saída:
// 0 1 2 3 4 6 7 8 9


Resumo:

break -> para o laço
continue -> pula uma repetição
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (numero of numeros) {


    if (numero === 5){
        break
    };
    if (numero === 5) {
        continue
    };
    console.log(numero);
}