const form = document.getElementById("form")
const grades = ["admin", "ingénieur", "technicien","ouvrier"]


class Employer {
    constructor(id, nom, prenom, age, grade, adresse) {
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.grade = grade
        this.adresse = adresse
    }
}

function create(id, nom, prenom, age, grade, adresse) {
    if (!parseInt(id)) 
        throw(new Error("Id non numérique"))
    
    
    if (! nom.match(/[A-Z a-z]/)) 
        throw(new Error("le nom ne doit contenir que des lettres et des espaces"))
    if (nom.length<=3) 
        throw(new Error("le nom doit être >3 caractéres"))
    
    if (! prenom.match(/[A-Z a-z]/)) 
        throw(new Error("le prénom ne doit contenir que des lettres et des espaces"))
    
    
    if (!parseInt(age))  //isNAN(age)
        throw(new Error("l'age dois être numérique"))
    
    if (age < 20) 
        throw(new Error("l'age doit être supérieur à 20 ans"))
    if (adresse.length < 20) 
        throw(new Error("l'Adresse doit être de 20 caractéres au mois"))
    
    if (! adresse.match(/[ ]/)) 
        throw(new Error("l' adresse doit comporter au moins un espace"))
    
    if (! grades.includes(grade.toLowerCase())) 
        throw(new Error("la grade doit être correcte"))
    
    new Employer(id, nom, prenom, age, grade, adresse)
    
}

form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("soumission");
    const id = document.getElementById("id").value
    const nom = document.getElementById("nom").value
    const prenom = document.getElementById("prenom").value
    const age = document.getElementById("age").value
    const adresse = document.getElementById("adresse").value

    const grade = document.getElementById("grade").value
    try {
        create(id, nom, prenom, age, grade, adresse);
        document.getElementById("message").innerHTML = `<div class='alert alert-success' role='alert'>valide</div>`;
    } catch (err) {
        document.getElementById("message").innerHTML = `<div class='alert alert-danger' role='alert'>${err}</div>`;
        console.log(err);
    }
})
