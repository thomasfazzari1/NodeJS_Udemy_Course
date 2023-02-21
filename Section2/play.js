//constante : readonly, à initialiser lors de la déclaration
const name = "Thomas";
//let : variable locale
let age = 21;

//type nom = (parametres) => {corps de la fonction}
const resume = (userName,userAge) => {
    return(
        "Nom : " + userName +
        ", Age : " + userAge
    );
}
//exemple sans parametres avec retour unique 
const unPlusDeux = () => 1 + 2;

console.log(resume(name,age));
console.log(unPlusDeux());