/*
Le type de donnée {number} en js prend en charge tout type de chiffres et nombre comme [integer, double, float, ect ....]*/

let nombreEntier = 28;
let nombreDecimal = 12.4;

console.log(nombreEntier);
console.log (nombreDecimal);
console.log(typeof nombreEntier, typeof nombreDecimal);

//Opérateur mathématique [+,*,-,/,**,%]
console.log(nombreEntier-nombreDecimal);

let likes = 80;

likes = likes + 5;
console.log(likes);

likes ++
console.log(likes);

likes --;
console.log(likes);

likes += 10;
console.log(likes);

likes -= 10;
console.log(likes);

likes *= 2;
console.log(likes);

//NAN [not a number] c'est pas un nombre
console.log('bonjour' /2);

//concatenation d'un string à number
console.log('les publication de Clain ' + likes + ' likes');