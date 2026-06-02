// Date = objeto de datas e horas

// Data atual
//const data = new Date();

// Criar data específica
//const data2 = new Date(2026, 4, 18);

// IMPORTANTES:

//Os mesês começam no 0 EX: janeiro = 0

//os valores reais do objeto data são contados em millisegundos

//data.getFullYear(); // ano
//data.getMonth();    // mês (0-11)
//data.getDate();     // dia
//data.getDay();      // dia da semana
//data.getHours();    // hora
//

// Timestamp
//Date.now();

// Formatar
//data.toLocaleDateString("pt-BR");

// IMPORTANTE:
// mês começa do 0
// 0 = janeiro | 11 = dezembro

//const data = new Date(2019, 3, 20, 15, 14, 60);//a, m, d, h, M, s, ms.
//console.log(data.toString());

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${ano}/${mes}/${dia} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log (dataBrasil);