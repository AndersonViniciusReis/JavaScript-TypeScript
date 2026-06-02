// Operação ternária (?) pode ser usada no lugar do if else se ele for mais simples usando apenas 1 if e 1 else
// Exemplo de operação ternária:
//const dadoRecebido = ...;
//const dadoResposta (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario);

//exemplo de Operação ternária (?) em If Else
//if (pontuacaoUsuario >= 1000) {
//    console.log('Usuário VIP');
//} else{
//    console.log('Usuário normal');
//}

//Também tem outro encurtador do if else, o || também conhecido como OU.
//Exemplo de uso do ||:
//const corUsuaio = null;
//const corPadrao = corUsuario || 'Preta';
//console.log(corPadrao)
