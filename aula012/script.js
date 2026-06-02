let varA = 'A';
let varB = 'B';
let varC = 'C';     
 
let varD = varA; // varD recebe o valor de varA, que é 'A'
varA = varB; // varA recebe o valor de varB, que é 'B'
varB = varC; // varB recebe o valor de varC, que é 'C'
varC = varD; // varC recebe o valor de varD, que é 'A'  

console.log(varA, varB, varC); // A B C