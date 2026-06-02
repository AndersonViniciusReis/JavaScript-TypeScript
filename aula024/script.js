/*if (condição) {
    // código a ser executado se a condição for verdadeira
} else if (outra condição) {
    // código a ser executado se a outra condição for verdadeira
} else {
    // código a ser executado se nenhuma das condições anteriores for verdadeira
}*/

// If pode ser usado sozinho, ou com um ou mais blocos else if, e um bloco else opcional no final. O bloco else é executado quando nenhuma das condições anteriores é verdadeira. O bloco else if é usado para testar várias condições diferentes. O bloco if é obrigatório, enquanto os blocos else if e else são opcionais.

var idade = 21;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else if (idade < 18) {
    console.log("Você não é maior de idade.");
}else {
    console.log("Idade inválida.");
}