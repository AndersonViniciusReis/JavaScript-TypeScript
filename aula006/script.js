let nome = 'joão';// variável do tipo string, armazena texto
//let vs var: let tem escopo de bloco, var tem escopo de função

console.log(nome , ' nasceu em 1984');
console.log('em 2000, ' , nome , ' conheceu maria');
console.log(nome , ' casou-se com maria em 2012');
console.log(nome , ' teve 1 filho com maria em 2015');
console.log('o filho de ' , nome , ' se chama eduardo');

let nome2; //declarou a variável nome2, mas não atribuiu nenhum valor a ela, ou seja, ela está indefinida
nome2 = 'Otávio'; // inicializou a variável nome2 com o valor 'qualquer valor'
console.log(nome2); 
nome2 = 'Anderson'; 
console.log(nome2);

//não podemos re declarar a mesma variável mais de uma vez com let, mas podemos reatribuir o valor da variável quantas vezes quisermos
//não podemos criar variáveis com palavras reservadas, como let, var, const, etc
//variáveis precisam ter nomes significativos, para facilitar a leitura do código
//variáveis não podem começar com números, mas podem conter números
//variáveis não podem conter espaços, mas podem usar camelCase ou under_score
// variáveis são case-sensitive, ou seja, nome, Nome e NOME são variáveis diferentes
//NÃO UTILIZE VAR, UTILIZE LET OU CONST PARA DECLARAR VARIÁVEIS EM JAVASCRIPT, VAR É UMA FORMA ANTIGA DE DECLARAR VARIÁVEIS E PODE CAUSAR PROBLEMAS DE ESCOPOS
