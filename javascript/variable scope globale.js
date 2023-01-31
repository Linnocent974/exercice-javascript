//Global scope
let age = 50;
console.log('levariable est accessible en global scope ', age);

if(true){
    let age = 100;
    console.log('scope 1', age);

    if(true){
        let age2 = 22;
        console.log('scope 2', age);
    }
}