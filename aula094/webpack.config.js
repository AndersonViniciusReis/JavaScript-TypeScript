/*
========================================
WEBPACK (BOILERPLATE)
========================================

Webpack é uma ferramenta que
organiza, junta e prepara
arquivos do projeto para produção.

Em palavras simples:

Ele pega:

HTML
CSS
JS
imagens

↓

organiza tudo

↓

gera versão final.

========================================

BOILERPLATE

Boilerplate é um projeto base
já configurado.

Ou seja:

ao invés de configurar
Webpack do zero

↓

você já começa com tudo pronto.

========================================

WEBPACK FAZ:

- junta arquivos (bundle)
- converte código moderno
- usa Babel
- organiza módulos
- otimiza produção
- recarrega navegador

========================================

EXEMPLO

ANTES:

src/

index.js
modulo.js
style.css


WEBPACK

↓

dist/

bundle.js


Tudo vira poucos arquivos.

========================================

COMANDOS

Criar projeto:

npm init -y


Instalar webpack:

npm install webpack webpack-cli --save-dev


Executar:

npx webpack


Modo desenvolvimento:

npx webpack --mode development


Modo produção:

npx webpack --mode production


========================================

ESTRUTURA COMUM

projeto/

src/
assets/

dist/

webpack.config.js

package.json


========================================

Fluxo:

Código
↓

Webpack

↓

Bundle

↓

Navegador

========================================
*/
const path = require('path'); // communJS

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
};