//windows. é um objeto global que representa a janela do navegador. Ele tem várias propriedades e métodos que permitem interagir com a janela
/*alguns exemplos de propriedades e métodos do objeto window:
 * window.alert() - exibe uma caixa de alerta com uma mensagem
 * window.confirm() - exibe uma caixa de confirmação com uma mensagem e retorna true ou false dependendo da escolha do usuário
 * window.prompt() - exibe uma caixa de prompt com uma mensagem e um campo de entrada, e retorna o valor digitado pelo usuário
 * window.location - representa a URL atual da página e permite redirecionar para outra URL
 * window.document - representa o documento HTML carregado na janela e permite manipular o conteúdo da página
 * window.innerWidth e window.innerHeight - representam a largura e altura da janela em pixels
 * window.setTimeout() - executa uma função após um determinado tempo em milissegundos
 * window.setInterval() - executa uma função repetidamente em um intervalo de tempo especificado em milissegundos
 * window.clearTimeout() - cancela a execução de uma função programada com setTimeout
 * window.clearInterval() - cancela a execução de uma função programada com setInterval
 * window.open() - abre uma nova janela do navegador com uma URL especificada
 * window.close() - fecha a janela atual do navegador
 * window.screen - representa as informações sobre a tela do dispositivo, como largura, altura e resolução
 * window.navigator - representa as informações sobre o navegador do usuário, como nome, versão e plataforma
 */

let nome = prompt('Digite seu nome completo:');
let nomeLength 
let nomeSegundaLetra 
let nomeUltimaLetra 
let nomeIndiceA 
let nomeUltimoIndiceA
let nomeTresUltimasLetras
let nomePrimeirasLetras 
let nomeMaiusculo 
let nomeMinusculo
let nomePalavras

document.body.innerHTML += `O nome do usuário é: <strong>${nome}</strong> <br />`;
document.body.innerHTML += `seu nome tem ${nome.length} caracteres <br />`;
document.body.innerHTML += `a segunda letra do seu nome é: ${nome[1]} <br />`;
document.body.innerHTML += `a última letra do seu nome é: ${nome[nome.length - 1]} <br />`;
document.body.innerHTML += `qual o primeiro índice da letra "a" no seu nome? ${nome.indexOf('a')} <br />`;
document.body.innerHTML += `qual o último índice da letra "a" no seu nome? ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `as ultimas 3 letras do seu nome são: ${nome.slice(-3)} <br />`;
document.body.innerHTML += `as primeiras 3 letras do seu nome são: ${nome.slice(0, 3)} <br />`;
document.body.innerHTML += `as palavras do seu nome são: ${nome.split(' ')} <br />`;
document.body.innerHTML += `seu nome em letras maiúsculas é: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `seu nome em letras minúsculas é: ${nome.toLowerCase()} <br />`;