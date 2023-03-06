//Rest_operator
const addition = (...nombres) => {
    return nombres.forEarch(nombre => {
        console.log(`${nombre} x ${nombre} = ${nombre*nombre}`);
    });
};

const resultat = addition(10,20,30,40);
console.log(resultat);

//Spread Operator
//Copier les éléments d'un array dans un nouveau array
const eleves4ieme = ['Musole', 'tarzan', 'Michou'];
const eleves5ieme = [...eleves4ieme, 'Eric Thomas', 'coach Pain', 'Sonny Court'];
console.log(eleves4ieme);
console.log(eleves5ieme);

//Passer les éléments d'un array comme paramétre d'une function
const tousEleves = (laListeFinal = [...eleves5ieme, 'Hilaire', ' Jonathan']) => {
    laListeFinal.forEach((eleve, index) => { 
        console.log(`${index} ${eleve}`);
   });
};

tousEleves([...eleves5ieme, 'hilaire', 'jonathan']);