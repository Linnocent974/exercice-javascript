/* Sets : Fonctionne comme Array (Tableau) 
Mais avec des valeur unique
C'est le meilleur de retirer des doublon dans un Array (tableau) */


const noms = ['Mussole', 'Blaise', 'Daniel'];
console.log(noms);

//Déclaration du Set
let set  = new Set(noms);
console.log(set);

//Ajout d'un élement dans le Set
set.add('Gloria');
console.log(set);

//Supression d'un  élément
set.delete('Blaise');
console.log(set);

console.log(set.has('Blaise'));
console.log(set.values());
set.forEach(element => console.log(element));
set.clear()
console.log(set);