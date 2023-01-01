//Math
console.log(Math);

//Accés aux methodes liées au Math object
console.log(Math.PI);

const value = 8.1;

//Arrondissement par excés ou par défaut
console.log(Math.round(value));

//conversion d'un nombre décimal entier 
console.log(Math.floor(value));

// Arrondissement par excés
console.log(Math.ceil(value));

//Random numbers (Génération d'un nombre aléatoire)
const random = Math.random();
console.log(random);

//Personnaliser un générateur de nombre aléatoire, ex: 0-100
console.log(Math.round(random * 1000));