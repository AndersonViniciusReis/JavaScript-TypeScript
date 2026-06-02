//não podemos mudar o valor de uma constante depois de declarada, ou seja, ela é imutável
//não podemos criar constantes com palavras reservadas, como let, var, const, etc
//constantes precisam ter nomes significativos, para facilitar a leitura do código
//constantes não podem começar com números, mas podem conter números
//constantes não podem conter espaços, mas podem usar camelCase ou under_score
//constantes são case-sensitive, ou seja, nome, Nome e NOME são constantes diferentes
//NÃO UTILIZE VAR, UTILIZE CONST OU LET PARA DECLARAR CONSTANTES EM JAVASCRIPT, VAR É UMA FORMA ANTIGA DE DECLARAR CONSTANTES E PODE CAUSAR PROBLEMAS DE ESCOPOS
//operações matemáticas +, -, *, /, **, %
const primeiroNumero = 5;
const segundoNumero = 10;
const resultadoSoma = primeiroNumero + segundoNumero;
console.log(resultadoSoma);
const resultadoSubtracao = primeiroNumero - segundoNumero;
console.log(resultadoSubtracao);
const resultadoMultiplicacao = primeiroNumero * segundoNumero;
console.log(resultadoMultiplicacao);
const resultadoDivisao = primeiroNumero / segundoNumero;
console.log(resultadoDivisao);
const resultadoPotenciacao = primeiroNumero ** segundoNumero;
console.log(resultadoPotenciacao);
const resultadoResto = primeiroNumero % segundoNumero;
console.log(resultadoResto);

console.log(typeof primeiroNumero);

