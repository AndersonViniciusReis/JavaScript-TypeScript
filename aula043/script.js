// Escreva uma função que recebe um número e retorne o segunte:
// Número é divisível por 3 = fizz
// Número é divisível por 5 = buzz
// Número é divisível por 3 e 5 = fizzbuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o nomero é realmente um número = Retorna o próprio número
// usa a função com números de 0 a 100

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero
    
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}