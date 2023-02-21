//constante : readonly, à initialiser lors de la déclaration
const name = "Thomas";
//let : variable locale
let age = 21;
//arrow function : type nom = (parametres) => {corps de la fonction}
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


//objet
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



//spread operator : copie un par un les éléments
const hobbiesCopy = [...hobbies];
console.log(hobbiesCopy);
//exemple 2 :
const personCopy = {...person}
console.log(personCopy);

//rest operator : nombre flexible de parametres
const rest = (...args) => {
    //retourne chaque élément passé en parametre
    return args;
}
console.log(rest(1,2,3,4,5,6,7,8,9,10));
/*
En résumé :
    Spread : Permet de déconstruire les itérables (tableaux/objets/chaînes) en éléments uniques
    Rest: Rassemble tous les éléments restants dans un tableau
*/



//object destructuring : syntaxe raccourcie
const printName = ({ name }) => {
    console.log(name);
}
printName(person);


//template literals 
const prenom = 'Thomas';
console.log(`Bonjour ${prenom}`);




