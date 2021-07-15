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

//se aplica con && operador and
console.warn('And'); //true si todos los valores son verdaderos
console.log(true && true); //true
console.log(true && false); //false
console.log(true && !false); //true

console.log('========');
//cuando la primera instruccion regresa false, solo se ejecuta regresaFalse()
// es decir la que se ejecute primero 
console.log(regresaFalse() && regresaTrue()); //false
console.log(regresaTrue() && regresaFalse());

console.log("+++++++++++++++++");
//Por lo menos una condicion debe dar true y siempre va a regresar true
console.warn('OR');
console.log( true || false);
console.log( false || false);

console.log(regresaTrue() || regresaFalse());

console.warn('Asignaciones')

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'hola mundo';
//no es tan comun hacer asignaciones con and &&
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
//es la primer cosa que se ejecute
const a4 = soyFalso || soyUndefined || soyNull || 'ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5});

if(regresaFalse() && regresaTrue() && (true || false || true)) {
    console.log('procesando');
}else {
    console.log('hacer otra cosa');
}