//Boucle [while]
let i = 0;
while(i < 5){
    console.log('Dans la boucle while', i);
    i++
}

//Parcourir une liste des noms avec la boucle [while]
let noms = ['Couti', 'salamie'];
let j = 0;
while(j < noms.length){
    console.log(j, noms[j]);
    j++;
}

//Méthode pour l éxcution d'un bloque des codes avant la vérification des condition
let x = 15;
do{
    console.log('la valeur de x est: ', x);
    x++;
}while(x<5);