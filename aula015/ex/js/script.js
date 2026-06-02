const num1 = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");
numeroTitulo.innerHTML = num1;

let raiz = Math.sqrt(num1);
let inteiro = Number.isInteger(num1);
let nan = Number.isNaN(num1);
let ardB = Math.floor(num1);
let ardC = Math.ceil(num1);
let duasDec = num1.toFixed(2);

texto.innerHTML += `<p>Raiz quadrada: <strong>${raiz}</strong> <br /></p>`;
texto.innerHTML += `<p>É inteiro? <strong>${inteiro}</strong> <br /></p>`;
texto.innerHTML += `<p>É NaN? <strong>${nan}</strong> <br /></p>`;
texto.innerHTML += `<p>Arredondar para baixo: <strong>${ardB}</strong> <br /></p>`;
texto.innerHTML += `<p>Arredondar para cima: <strong>${ardC}</strong> <br /></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${duasDec}</strong> <br /></p>`;

texto.innerHTML += `Valor inteiro: <strong>${parseInt(num1)}</strong> <br />`;