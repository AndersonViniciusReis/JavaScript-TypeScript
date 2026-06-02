const nome = 'Anderson';
const sobrenome = 'Moreira';
const idade = 21;
const peso = 72;
const alturaEmM = 1.70;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2026 - idade;
//$ em template strings, podemos usar o cifrão seguido de crases para inserir variáveis dentro da string, ou seja, podemos usar ${variavel} para inserir o valor da variável dentro da string
//+ em template strings, podemos usar quebras de linha sem precisar usar \n, ou seja, podemos escrever a string em várias linhas sem precisar usar o caractere de nova linha
//, em template strings, podemos usar vírgula para separar os argumentos dentro do console.log, ou seja, cada argumento é separado por vírgula
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg e tem ${alturaEmM} de altura. O IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);