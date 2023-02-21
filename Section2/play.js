//constante : readonly, à initialiser lors de la déclaration
const name = "Thomas";
//let : variable locale
let age = 21;

function resume(userName,userAge){
    return(
        "Nom : " + userName +
        ", Age : " + userAge
    );
}

console.log(resume(name,age));