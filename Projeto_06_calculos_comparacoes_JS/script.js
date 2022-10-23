alert(`Vamos realizar algumas operações matemáticas e comparações.`);
let numberOne = prompt('Digite um número.');
let numberTwo = prompt('Digite outro número.');
numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

let sum = Number(numberOne + numberTwo);
let sub = Number(numberOne - numberTwo);
let mult = Number(numberOne * numberTwo);
let div = Number((numberOne / numberTwo).toFixed(2));
let rest = Number(numberOne % numberTwo);
let pairOdd = Number((numberOne + numberTwo) % 2);

let evenORodd = (numberOne, numberTwo) => {
    return (((numberOne + numberTwo) % 2) == 0) ? "Par" : "Ímpar";
}
let different = (numberOne, numberTwo) => {
    return (numberOne === numberTwo) ? "Igual" : "Diferente";
}


alert(`
 -- Cáluclos e Comparações --
-   A soma dos números ${numberOne} + ${numberTwo}  é = ${sum}
-   A subtração dos números ${numberOne} - ${numberTwo} é = ${sub}
-   A multiplicação dos números ${numberOne} * ${numberTwo} é = ${mult}
-   A divisão dos números ${numberOne} / ${numberTwo} é = ${div}
-   O resto da divisão dos números ${numberOne} e ${numberTwo} é = ${rest}
-   A soma dos dois números é ${evenORodd(numberOne, numberTwo)}.
-   Os números inseridos ${numberOne} e ${numberTwo} são ${different(numberOne, numberTwo)}.
    By TamaraSposito
`)




// if(pairOdd === 0){
//     alert(`
//     -- Par ou Ímpar --
// A soma dos dois números é Par.
// `)
// }else {
//     alert(`
//     -- Par ou Ímpar --
// A soma dos dois números é Ímpar.
// `)
// }

// if(numberOne === numberTwo){
//     alert(`
//    -- Iguais ou Diferentes --
// Os números inseridos são Iguais.`)
// }else {
//     alert(`
//    -- Iguais ou Diferentes --
// Os números inseridos são Diferentes.`)
// }

// alert('Projeto criado por Tamara Sposito')


