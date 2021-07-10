//es una manera que tenemos para trabajar con valores boleanos
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}


const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

//la negacion en javascript es '!'
console.warn('Not');
console.log( true );
console.log( !true);
console.log( !false);

console.log( !regresaFalse());

//se aplica con &&
console.warn('And');
console.log(true && true); //true
console.log(true && false); //false
console.log(true && !false); //true

console.log('========');
console.log(regresaFalse() &&);

