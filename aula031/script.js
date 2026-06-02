/*
VAR
- Pode ser redeclarada
- Pode ser alterada
- Tem escopo mais amplo (escopo de função)
- Pode causar comportamentos inesperados
- Hoje é pouco usada

LET
- Não pode ser redeclarada
- Pode ser alterada
- Tem escopo de bloco ({ })
- Mais segura que var

CONST
- Não pode ser redeclarada
- Não pode receber outro valor
- Tem escopo de bloco ({ })
- Usada quando o valor não deve mudar

Exemplo:

var nome = 'João';
let idade = 20;
const cpf = '123456';
*/

// Let tem escopo de bloco { ... bloco}
// var só tem escopo de função

const verdadeira = true;

// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz'; // criando

// if (verdadeira) {
//     let nome = 'Otávio'; // criando
//     var nome2 = 'Rogério'; // redeclarando
// } 

// if (verdadeira) {
//    let nome = 'Outra coisa'; // criando
//    var nome2 = 'Ronaldo'; // redeclarando
// }
 
// console.log(nome, nome2)

// function falaOi () {

//     if(verdadeira) {
//         let nome = 'Luiz';
//         var sobrenome = 'Miranda';
//     }

//     console.log(sobrenome);
// }
// falaOi();

console.log(sobrenome);

var sobrenome = 'Miranda';