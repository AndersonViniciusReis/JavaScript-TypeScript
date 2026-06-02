// FUNÇÕES GERADORAS (GENERATORS)

// Funções geradoras criam valores
// aos poucos usando "yield"

// São criadas com * após function


// 1. Exemplo básico

// function* geradora(){

//     yield 'Valor 1';
//     yield 'Valor 2';
//     yield 'Valor 3';
// }

// const g1 = geradora();

// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());

// Resultado:

// {value:'Valor 1', done:false}
// {value:'Valor 2', done:false}
// {value:'Valor 3', done:false}
// {value:undefined, done:true}


// value -> valor retornado
// done -> terminou ou não


// 2. Pegando apenas o valor

// function* numeros(){

//     yield 1;
//     yield 2;
//     yield 3;
// }

// const n = numeros();

// console.log(n.next().value);
// console.log(n.next().value);
// console.log(n.next().value);


// Resultado:

// 1
// 2
// 3


// 3. Percorrendo com for...of

// function* nomes(){

//     yield 'Anderson';
//     yield 'João';
//     yield 'Maria';
// }

// for(let nome of nomes()){
//     console.log(nome);
// }

// Resultado:

// Anderson
// João
// Maria


// 4. Generator infinito

// function* contador(){

//     let numero = 1;

//     while(true){

//         yield numero;

//         numero++;
//     }
// }

// const c = contador();

// console.log(c.next().value);
// console.log(c.next().value);
// console.log(c.next().value);


// Resultado:

// 1
// 2
// 3


// Resumo rápido:

// function* -> cria generator
// yield -> pausa e retorna valor
// next() -> próximo valor
// done -> terminou

function* geradora1() {
    //Código qualquer ...
    yield 'Valor 1';
    //Código qualquer ...
    yield 'Valor 2';
    //Código qualquer ...
    yield 'Valor 3';
}

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++
    }
}

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}
const g4 = geradora4();

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };

    // Mais códigos

    yield function() {
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1()
func2()