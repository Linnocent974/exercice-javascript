// La puissance de la destructuration d'affectation est plus utilisée pour les objects
const personnel = {
    nom : 'Musole',
    postNom : 'Gloire',
    age : 32,
    addresse : {
        pays : 'xxx',
        ville : 'yyy'
    }
}

//Déstructuraction d'un object
const {nom, age, addresse} = personnel;
console.log(nom, age, pays, ville);

const personne2 = {...personnel, nom : 'Blaise'}

//Fonction avec destructuration en paramètre (argument)
const affichagePersonnes = (personne) => {
    console.log(
        `${nom} ${postNom} a ${age} ans et son adresse est
        ${pays} - ${ville}`
    );
};

affichagePersonnes(personnel);
affichagePersonnes(personne2);