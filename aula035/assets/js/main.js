/*
DOM (Document Object Model)

- O DOM é a representação do HTML em forma de objetos
- Permite que o JavaScript acesse, altere e crie elementos da página
- Com o DOM podemos mudar texto, estilos, imagens, atributos e eventos

ÁRVORE DO DOM

- O HTML é organizado em formato de árvore
- Cada elemento é um nó ligado a outros elementos

Exemplo:

document
   |
  html
 /    \
head   body
          |
        div
          |
         h1

Exemplo de acesso:

document.querySelector('h1');
document.getElementById('titulo');

*/
const elementos = [
    {tag: 'p', texto: 'Qualquer texto que voçê quiser.'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);