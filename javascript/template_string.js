const site = 'Clain';
const proprio = 'couti';
const nombreSite = '2';

//concatenation
console.log(' site web'+ ' site' + ' de Mr' + ' proprio' + ' contient' +' nombreSite');

//template string
console.log(`site web ${site} de Mr ${proprio} contient ${nombreSite}`);

//html template
let html = `
<h2>${site}</h2>;
<p>${proprio}</p>;
<span>${nombreSite}</span>
`;

console.log(html);