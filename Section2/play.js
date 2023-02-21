//constante : readonly, à initialiser lors de la déclaration
const name = "Thomas";
//let : variable locale
let age = 21;

const resume = (userName,userAge) => {
    return(
        "Nom : " + userName +
        ", Age : " + userAge
    );
}

const add = (a,b) => a + b;

console.log(resume(name,age));
console.log(add(5,7));