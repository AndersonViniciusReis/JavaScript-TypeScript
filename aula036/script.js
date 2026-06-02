/*
VETOR X ARRAY

Em JavaScript normalmente não existe diferença prática.

VETOR
- É um termo usado na programação para uma estrutura
- Geralmente significa uma lista de elementos do mesmo tipo
- Ex: números, nomes, notas...

ARRAY
- É a implementação usada no JavaScript
- Pode armazenar vários tipos diferentes
- Possui métodos prontos (.push, .pop, .length...)

Exemplo:

const vetor = [10, 20, 30]; // também é um array

const array = [10, 'João', true];

Resumo:

Vetor = conceito
Array = estrutura do JavaScript
*/

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
const frutas = ['Pera', 'Macã', 'Uva'];

for (let i =0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let i in frutas) {
    console.log(frutas[i]);
}
for(let i of frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome:'Luiz',
    sobrenome:'Otávio',
    idade:30
};

for (let chave in pessoa) {
    console.log(chave);// ou console.log(pessoa.chave); ou console.log(pessoa[chave]);
}