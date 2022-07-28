/*le type de donnée [string] en js definit un caractère ou une chaîne de caractères*/

console.log('A');//un caractère
console.log('bonjour tout le  monde');//chaîne de caractères
console.log("l'apprentissage de javascript");//si il y a une apostrophe il faut utiliser deux guillemets

//déclaration et affectation des variable type [string]
let email = 'email@gmail.com';
console.log(email);

//concontenation d'un [string] a un autre
let nom = 'Clain';
let postNom = 'gouzy';
let nomComplet = nom + ' ' + postNom;
console.log(nomComplet);

//Obtenir le caractère d'un string via une position
console.log(nomComplet[4]);

//Obtenir un nombre de caractère d'un [string]
console.log(nomComplet.length);

//Fonction et methode d'un [string]

/* La fonction et une bloc de code qui effectue une tache specifique */

/*La methode et une fontion qui et attacher a un objet ou un type de données*/

//methode sans argument ou parametre
console.log(nomComplet.toUpperCase());
console.log(nomComplet.toLowerCase());

//methode avec argument ou parametre
console.log(nomComplet.indexOf('g'));
console.log(nomComplet.slice(0,11));
console.log(nomComplet.replace('C', 'M'));
