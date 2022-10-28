/*lista de estudantes */
const students = [{
        name: "Tamara",
        firstTest: 5,
        secondTest: 9,
    },
    {
        name: "Ana Julia",
        firstTest: 9,
        secondTest: 6,
    },
    {
        name: "Marjory",
        firstTest: 10,
        secondTest: 7,
    },
    {
        name: "Vitória",
        firstTest: 8,
        secondTest: 5,
    },
    {
        name: "Michael",
        firstTest: 5,
        secondTest: 7,
    }
]

function average(firstTest, secondTest){
return (((firstTest + secondTest) / 2).toFixed(1));
}
// let approved = (firstTest, secondTest) => {
//     return (((firstTest + secondTest) / 2).toFixed(1)) >= 7? "APROVADO" : "REPROVADO"
// }

function approved(average){

    if (average >= 7) {
        return `APROVADO`
    } else {
        return `REPROVADO`
    }
}

for(let student of students){
    let printaverage = average(student.firstTest, student.secondTest);
    let printapproved = approved(printaverage);


    alert (`Olá, ${student.name}!
    Sua média foi ${printaverage}
    Você foi ${printapproved} no concurso.
    `)

}

// console.log(students, approved, average)
