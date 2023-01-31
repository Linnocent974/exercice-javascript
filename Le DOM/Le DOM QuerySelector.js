//Sauvegarder la réference d' élément dans une variable
const para = document.querySelector('p');
console.log(para);

//Sélection d'un élément avec réference
const para2 = document.querySelector('.error');
console.log(para2);

//Sélection d'un élément
const divError = document.querySelector('div.error');
console.log(divError);

//Obtenir la référence d'un élément à partir du navigateur
const refNav = document.querySelector('boby > h1');
console.log(refNav);

//Sélection multiple des éléments
const paras = document.querySelectorAll('p');
console.log(paras);

//Pour séléctionne un élément dans le NodeList
console.log(paras[0]);

//Utilisons [ForEach] pour faire parcourir le NodeList
paras.forEach(para => console.log(para));

//séléctionner toutes les classe avec le meme  nom
const errors = document.querySelectorAll('.error');
console.log(errors);