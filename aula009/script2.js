//tipos primitivos - string, number, boolean, undefined, null, symbol e bigint
//string - texto
//number - números
//boolean - true ou false
//undefined - variável que foi declarada, mas não foi atribuída um valor
//null - variável que foi declarada, mas não tem valor
//symbol - valor único e imutável, utilizado para identificar propriedades de objetos
//bigint - números inteiros muito grandes, que não podem ser representados pelo tipo number
const nome = 'Luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined = não aponta para local nenhum na memória
let sobrenomeAluno = null; //null = não aponta para local nenhum na memória
const aprovado = true; //boolean

console.log(typeof nome, nome); //string Luiz