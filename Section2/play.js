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

const person={
    name: "Thomas",
    age: 21,
    //pas d'arrow function dans un objet
    fonction() {
        console.log("Bonjour, je m'appelle " + this.name);
    }
}
person.fonction();

const hobbies = ["Sport","Lecture"];
//équivaut à un for (let hobby of hobbies) {...}
console.log(hobbies);
//.map
console.log(hobbies.map(hobby => "Loisir : "+hobby));