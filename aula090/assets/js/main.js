/*
========================================
FETCH API (GET)
========================================

Fetch API serve para buscar
dados usando JavaScript.

É a forma mais moderna de fazer
requisições HTTP.

GET significa:

"buscar informações"

Em palavras simples:

JavaScript pede dados
↓

servidor responde
↓

dados aparecem na tela

sem atualizar a página.


Exemplos do que GET pode buscar:

- HTML
- JSON
- API
- texto
- páginas


EXEMPLO:


fetch('pagina1.html')


Faz requisição GET
automaticamente.



.then(response => {

Recebe resposta.

return response.text();

})


.then(dados => {

Recebe conteúdo.

console.log(dados);

})


.catch(erro => {

Captura erro.

console.log(erro);

});



Exemplo real:

index.html
↓

clicou no link
↓

fetch()

↓

GET busca pagina1.html

↓

recebe conteúdo

↓

mostra na tela

↓

sem sair da página


Fluxo:

Clique
↓

fetch()
↓

GET
↓

Recebe resposta
↓

Atualiza página


Diferença:

XMLHttpRequest
→ antigo

Fetch API
→ mais simples e moderna

========================================
*/

// const request = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       if(xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
  const response = await fetch(href);

  if(response.status !== 200) throw new Error('ERRO 404!');

  const html = await response.text();
  carregaResultado(html);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
