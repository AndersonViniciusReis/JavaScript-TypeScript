/*
FINALLY

- Executa sempre no final do try/catch
- Executa mesmo se ocorrer erro
- Muito usado para limpeza de recursos, fechar conexões ou finalizar processos

Estrutura:

try {

} catch(erro) {

} finally {

}

Exemplo:

try {
    console.log('Executando...');
} catch(erro) {
    console.log('Ocorreu um erro');
} finally {
    console.log('Finalizado');
}

Resumo:

try -> tenta executar
catch -> captura erro
finally -> executa sempre no final
*/
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try{
    const data = new Date('01-01-1990 12:58:12');
const hora = retornaHora();
console.log(hora);
} catch(e) {
    // Tratar erro
    //console.log(e)
} finally {
    console.log('Tenha um bom dia!');
}
