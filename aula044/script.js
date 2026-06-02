/*
TRATANDO E LANÇANDO ERROS (TRY, CATCH, THROW)

TRY
- Bloco onde o código é executado
- Tenta executar o código normalmente

CATCH
- Captura erros caso aconteçam
- Evita que a aplicação pare completamente

THROW
- Lança/cria um erro manualmente

Exemplo:

function verificaNumero(num) {
    if (typeof num !== 'number') {
        throw new Error('Valor precisa ser um número');
    }

    return num;
}

try {
    console.log(verificaNumero('10'));
} catch (erro) {
    console.log('Erro:', erro.message);
}

Resumo:

try -> tenta executar
throw -> lança erro
catch -> captura erro
*/

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Não são números!');
    }

    return x + y;
}
try{
    console.log(soma(45, 74))
    console.log(soma('45', 74))
} catch(e) {
    console.log(e)
}