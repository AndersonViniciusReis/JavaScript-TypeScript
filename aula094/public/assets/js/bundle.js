/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js"
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   idade: () => (/* binding */ idade),
/* harmony export */   nome: () => (/* binding */ nome),
/* harmony export */   sobrenome: () => (/* binding */ sobrenome),
/* harmony export */   soma: () => (/* binding */ soma)
/* harmony export */ });
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

//export {nome, sobrenome, idade, soma};
var nome = 'Luiz';
var sobrenome = 'Miranda';
var idade = 30;
function soma(x, y) {
  return x + y;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (x, y) {
  return x * y;
});
__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/set anonymous default export name */
/******/ 	(() => {
/******/ 		// set .name for anonymous default exports per ES spec
/******/ 		__webpack_require__.dn = (x) => {
/******/ 			(Object.getOwnPropertyDescriptor(x, "name") || {}).writable || Object.defineProperty(x, "name", { value: "default", configurable: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
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

console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__.nome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.idade, _modulo1__WEBPACK_IMPORTED_MODULE_0__.soma);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map