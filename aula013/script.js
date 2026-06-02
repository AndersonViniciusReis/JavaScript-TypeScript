//  '/"/"' é usado para escapar as aspas dentro de uma string
// Exemplo: "Um \"texto\""
//Strings são indexadas, ou seja, cada caractere em uma string tem um índice associado a ele, começando do zero. Você pode acessar caracteres individuais usando colchetes [] e o índice correspondente.
//Strings são imutáveis, ou seja, uma vez criada, não pode ser alterada. No entanto, é possível criar uma nova string com base na original.
//Strings são usadas para armazenar texto, ou seja, uma sequência de caracteres. As strings podem ser criadas usando aspas simples (' '), aspas duplas (" ") ou crases (` `) para template literals.
//Strings são uma das estruturas de dados mais comuns em programação e são amplamente utilizadas para manipular e exibir texto em aplicativos, sites e outros contextos de software.

/**formas de modificar uma string:
 * string.replace() - Substitui parte da string por outra string.
 * string.toUpperCase() - Converte a string para letras maiúsculas.
 * string.toLowerCase() - Converte a string para letras minúsculas.
 * string.trim() - Remove espaços em branco no início e no final da string.
 * string.slice() - Extrai uma parte da string com base em índices.
 * string.split() - Divide a string em um array de substrings com base em um separador.
 * string.concat() - Concatena duas ou mais strings em uma nova string.
 * string.repeat() - Repete a string um número especificado de vezes.
 * string.includes() - Verifica se a string contém uma substring específica.
 * string.indexOf() - Retorna o índice da primeira ocorrência de uma substring na string.
 * string.lastIndexOf() - Retorna o índice da última ocorrência de uma substring na string.
 * string.startsWith() - Verifica se a string começa com uma substring específica.
 * string.endsWith() - Verifica se a string termina com uma substring específica.
 * string.charAt() - Retorna o caractere em um índice específico da string.
 * string.charCodeAt() - Retorna o código Unicode do caractere em um índice específico da string.
 * string.length - Retorna o comprimento da string (número de caracteres).
 * string.substring() - Extrai uma parte da string entre dois índices.
 * string.substr() - Extrai uma parte da string com base em um índice inicial e um comprimento.
 * string.match() - Retorna um array de correspondências de uma expressão regular na string.
 * string.replaceAll() - Substitui todas as ocorrências de uma substring por outra string.
 * string.toString() - Retorna a string como uma representação de texto.
 * string.valueOf() - Retorna o valor primitivo da string.
 * string.localeCompare() - Compara a string com outra string e retorna um valor indicando a ordem de classificação.
 * string.normalize() - Normaliza a string usando a forma de normalização Unicode.
 * string.padStart() - Preenche a string com caracteres no início até atingir um comprimento especificado.
 * string.padEnd() - Preenche a string com caracteres no final até atingir um comprimento especificado.
 */
let umaString = "Um texto"
console.log(umaString); // Retorna 't', pois o índice 4 corresponde à letra 't' na string "Um texto"