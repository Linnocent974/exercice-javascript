//Affection de la reférence
const link = document.querySelector('a');
console.log(link.getAtttribute('href'));

//Modification de l'attribut
link.setAttribute('href', 'https://www.facebook.com');
link.innerText = 'Visitez Facebook';

//Pour le paragraphe error
const errorMsg = document.querySelector('p');
errorMsg.setAttribute('class', 'success');
errorMsg.setAttribute('style', 'color:green;');
errorMsg.innerText = 'Success';