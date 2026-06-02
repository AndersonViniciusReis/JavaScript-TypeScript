/*
FOR CLÁSSICO X FOR IN X FOR OF

FOR CLÁSSICO
- Você controla o índice manualmente
- Define início, condição e incremento
- Mais flexível

Exemplo:
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


FOR IN
- Percorre os índices automaticamente
- i recebe os índices/posições do array

Exemplo:
for (let i in frutas) {
    console.log(frutas[i]);
}


FOR OF
- Percorre os valores diretamente
- Não precisa usar [i]

Exemplo:
for (let fruta of frutas) {
    console.log(fruta);
}

Resumo:

FOR CLÁSSICO -> controle total
FOR IN -> índices/chaves
FOR OF -> valores
*/

/*
FOREACH

- Método usado para percorrer arrays
- Executa uma função para cada elemento
- Recebe o valor, índice e array (opcional)
- Não precisa criar contador manualmente

Estrutura:

array.forEach(function(valor, indice, array) {

});

Exemplo:

const frutas = ['Maçã', 'Banana', 'Uva'];

frutas.forEach(function(valor, indice) {
    console.log(indice, valor);
});

Saída:

0 Maçã
1 Banana
2 Uva

Resumo:
forEach -> executa algo para cada elemento do array
*/

//            1234567891011
const nome = 'Luiz Otávio';

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// };

// for (let i in nome) {
//     console.log(nome[i]);
// };

for (let i of nome) {
    console.log(i);
};