/*
========================================
XMLHttpRequest (GET)
========================================

XMLHttpRequest serve para fazer
requisições HTTP usando JavaScript.

Em palavras simples:

ele permite buscar conteúdo
sem atualizar a página.

GET significa:

"pegar informações"

Imagine:

Você está no index.html

↓

clica em um link

↓

JavaScript usa
XMLHttpRequest

↓

faz um GET

↓

recebe o conteúdo

↓

mostra na tela

↓

sem sair da página atual


Exemplos do que GET pode buscar:

- HTML
- JSON
- API
- texto
- dados do servidor


EXEMPLO:


const xhr =
new XMLHttpRequest();


Cria objeto responsável
pela requisição.



xhr.open(
'GET',
'pagina1.html',
true
);


Configura:

GET
↓

buscar dados

'pagina1.html'
↓

arquivo que será buscado

true
↓

assíncrono



xhr.send();


Envia requisição.



xhr.onload =
function() {


Executa quando
receber resposta.



if (
xhr.status >= 200 &&
xhr.status < 300
) {


Se deu certo


console.log(
xhr.responseText
);


Mostra conteúdo
recebido.


}


};


Exemplo:

index.html
↓

clicou no link
↓

GET busca pagina1.html
↓

recebe:

<h1>Página carregada</h1>

↓

mostra na tela

↓

index continua aberto


Fluxo:

Clique
↓

XMLHttpRequest
↓

GET
↓

Recebe resposta
↓

Atualiza página

========================================
*/
const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
