//arrays são indexados, o que significa que cada elemento tem um índice associado, começando do zero. Isso permite acessar e modificar os elementos de forma rápida e fácil.
//arrays são mutáveis, o que significa que você pode alterar os elementos existentes, adicionar novos elementos ou remover elementos do array.
//arrays são usados em muitas situações, como armazenar listas de itens, organizar dados em tabelas, criar filas e pilhas, entre outras aplicações. Eles são uma parte fundamental da programação e são amplamente utilizados em diversas linguagens de programação.
//arrays são uma estrutura de dados fundamental em muitas linguagens de programação, incluindo JavaScript. Eles permitem armazenar e manipular coleções de dados de forma eficiente. Em JavaScript, os arrays são objetos que possuem métodos e propriedades para facilitar o trabalho com eles. Você pode criar um array usando colchetes [] e adicionar elementos a ele usando índices ou métodos como push() e unshift(). Além disso, os arrays em JavaScript podem conter elementos de diferentes tipos, como números, strings, objetos e até outros arrays. Eles são amplamente utilizados para organizar dados, realizar operações de iteração e manipulação de dados em geral.
 
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);

//console.log(alunos.slice(0, 2)); //exibe os elementos do índice 0 ao 1 (o índice 2 é exclusivo)
//console.log(alunos.slice(1)); //exibe os elementos a partir do índice 1 até o final do array
//console.log(alunos.slice(-2)); //exibe os últimos 2 elementos do array

//delete alunos[1]; //remove o elemento do índice 1, mas mantém o índice vazio
//alunos.splice(1, 1); //remove o elemento do índice 1 e reindexa os elementos subsequentes

//alunos.pop(); //remove o último elemento do array
//alunos.shift(); //remove o primeiro elemento do array

//alunos.push('Luiza'); //adiciona no fim do array
//alunos.unshift('Fabio'); //adiciona no início do array

//alunos[alunos.length] = 'Luiza'; //adiciona no fim
//alunos[alunos.length] = 'Fabio';
//alunos[alunos.length] = 'Luana';

//alunos[0] = 'Eduardo'; //alterando o valor do índice 0
//alunos[3] = 'Luiza'; //adicionando um novo elemento no índice 3

//console.log(alunos);exibindo o array atualizado
//console.log(alunos[0]);exibindo o elemento no índice 0
//console.log(alunos[2]);exibindo o elemento no índice 2
