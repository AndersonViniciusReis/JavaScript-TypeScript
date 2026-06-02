//fucão, método e objeto são conceitos fundamentais em JavaScript. Uma função é um bloco de código que pode ser definido e chamado para executar uma tarefa específica. Um método é uma função associada a um objeto, que pode ser chamado usando a sintaxe de ponto. Um objeto é uma coleção de propriedades e métodos relacionados, que podem representar entidades do mundo real ou abstrações.
//objeto window é o objeto global do JavaScript, que representa a janela do navegador. Ele fornece métodos e propriedades para interagir com a janela e o ambiente de execução. Alguns dos métodos mais comuns do objeto window incluem:
// - alert(): Exibe uma caixa de diálogo com uma mensagem e um botão "OK".
// - confirm(): Exibe uma caixa de diálogo com uma mensagem e os botões "OK" e "Cancelar", retornando true ou false dependendo da escolha do usuário.
// - prompt(): Exibe uma caixa de diálogo que solicita ao usuário que insira um valor, retornando o valor inserido como uma string.
// - console.log(): Permite imprimir mensagens no console do navegador para fins de depuração.
// Exemplo de uso dos métodos do objeto window:
window.alert('Vamos fazer uma soma de dois números.');
window.confirm('Vamos começar?');
let num1 = prompt('Digite o primeiro número:');
let num2 = prompt('Digite o segundo número:');
let resultado = Number(num1) + Number(num2);
window.alert('O resultado da soma é: ' + resultado);