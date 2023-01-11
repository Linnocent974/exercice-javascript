//Boucle [Loop] : c'est une structure de controle
// qui permet de répéter un bloc de code

//Boucle [for]
for(let i=0; i<5; i++){
    console.log('interaction en boucle', i);
}

console.log("Une instruction en dehors de la boucle");

//Parcourir les éléments de la liste avec boucle [for]
let noms = ['Coutie', 'Blaise', 'Alice', 'bouloche' ];
for(let i=0; i<noms.length; i++){
    console.log(i, noms[i]);
}