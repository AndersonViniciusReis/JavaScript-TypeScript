/**
No JavaScript com Webpack, import e export servem para dividir o código
em módulos (arquivos separados) e reutilizar funções, classes,
variáveis etc.

Webpack pega esses módulos e empacota tudo em um ou mais arquivos finais
para o navegador.

1. export → disponibiliza algo de um arquivo

Exemplo (math.js)

export function soma(a, b) {
    return a + b;
}

export function multiplicar(a, b) {
    return a * b;
}

2. import → usa algo exportado em outro arquivo

Exemplo (index.js)

import { soma, multiplicar } from "./math";

console.log(soma(2, 3));
console.log(multiplicar(4, 2));

As { } são usadas quando você importa exports nomeados.

Export default

Quando um arquivo exporta uma coisa principal.

Arquivo (usuario.js)

export default function mostrarUsuario() {
    console.log("Anderson");
}

Importação

import mostrarUsuario from "./usuario";

mostrarUsuario();

Sem { }.

Misturando export normal + default

config.js

export const API = "localhost";

export default function conectar() {
    console.log("Conectado");
}

Importando:

import conectar, { API } from "./config";

conectar();
console.log(API);

Como isso funciona no Webpack

Estrutura:

src/
├── index.js
├── utils.js
webpack.config.js

utils.js

export function mensagem() {
    return "Olá";
}

index.js

import { mensagem } from "./utils";

console.log(mensagem());

webpack.config.js

const path = require("path");

module.exports = {
    mode: "development",

    entry: "./src/index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};

Rodando:

npx webpack

Saída:

dist/
└── bundle.js

O Webpack segue os import,
junta tudo e gera o bundle.js.

Regra prática

Exportar várias coisas → export
Exportar principal → export default
Importar nomeado → import { x } from "./arquivo"
Importar default → import x from "./arquivo"

Próximo passo:
Babel → Webpack → módulos ES → bundling → tree shaking
*/
import { nome, sobrenome, idade, soma } from './modulo1.js';

console.log(nome, sobrenome, idade, soma);