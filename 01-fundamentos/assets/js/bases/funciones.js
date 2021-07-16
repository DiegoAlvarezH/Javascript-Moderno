//una funcion es una serie de instrucciones que podemos ejecutar y reutilizar en nuestro codigo
//termino tecnico = es centralizar la logica de un procedimiento que podemos reutilizar varias veces

//un metodo es una funcion que se encuentra dentro de un objeto

//todas las funciones en js retornan undefined si no le damos dicha instruccion

//undefined en las funciones

function saludar(nombre){
    console.log('Hola ' + nombre);
    return [1,2,3,4,5];
}

const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola ');
}
 
const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

// saludarFlecha2('Alejo');

//funcion anonima no tiene nombre pero se asigna
// const saludar2 = function(){
//     console.log('hola mundo');
// }

const retornoDeSaludar = saludar('Diego', 22, true, 'Colombia'); //1
// console.log(retornoDeSaludar);
// saludar2('Diego')
//llamar con ();

function sumar(a, b){
    return a + b;
}

//las funciones flecha se pueden retornar en una misma linea si solo tiene una linea de codigo.
const sumar2 = (a,b) => a + b;
// const sumar2 = (a,b) => {
//     return a+ b; 
// }

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random()


console.log( getAleatorio2() );