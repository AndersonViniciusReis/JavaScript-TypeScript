/*
========================================
FETCH API E AXIOS
========================================

Fetch API e Axios servem para
buscar ou enviar dados usando
JavaScript.

Em palavras simples:

JavaScript conversa
com outro arquivo
ou servidor.

Exemplos:

- buscar API
- carregar HTML
- enviar formulário
- buscar JSON
- atualizar página


Fluxo:

JavaScript
↓

faz pedido

↓

servidor responde

↓

mostra na tela

sem atualizar página

========================================


FETCH API

É a forma moderna
que já existe no navegador.

Exemplo:


fetch('usuarios.json')

↓

faz GET automaticamente


fetch('usuarios.json')

.then(response => {

    return response.json();

})

.then(dados => {

    console.log(dados);

})

.catch(erro => {

    console.log(erro);

});


Fluxo:

fetch()
↓

GET
↓

response
↓

dados


========================================


AXIOS

É uma biblioteca externa.

Faz a mesma ideia do fetch,
mas com sintaxe mais simples.

Precisa instalar:

npm install axios


Exemplo:


axios.get('usuarios.json')

.then(response => {

    console.log(
        response.data
    );

})

.catch(erro => {

    console.log(
        erro
    );

});


Fluxo:

axios
↓

GET
↓

response.data


========================================


RESUMO

Fetch API
→ já vem no navegador

Axios
→ biblioteca externa

Ambos servem para:

buscar
↓

receber
↓

mostrar dados

sem atualizar página

========================================
*/

// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json));

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for(let pessoa of json) {
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}