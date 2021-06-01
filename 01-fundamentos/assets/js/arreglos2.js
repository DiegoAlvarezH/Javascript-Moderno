//los metodos son funciones que vienen internas de los arreglos
//y las propiedades son una variable que vienen en los arreglos

let juego = [
    'zelda',
    'mario',
    'chrono',
    'battlefield'
];

console.log('Largo:', juego.length);

let primero = juego[3 - 3]

let ultimo = juego[juego.length - 1]; 

console.log({primero, ultimo});

//el  forEach va a ejecutar una accion independiente, segun cada posicion del arreglo
juego.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

//el metodo .push para agregar a nuestro array *al final*
//el metodo es una funcion que se va a ejecutar cuando nosotros le indiquemos

let nuevojuego = juego.push( 'Mortal kombat' );
console.log({nuevojuego, juego});

//el metodo para agregar al principio de nuestro array(arreglo) es .unshift()

juegodemoda = juego.unshift('fail guys');
console.log({juegodemoda, juego});

//el metodo para eliminar el primer elemento del array(arreglo) es .pop
let juegoborrado = juego.pop();
console.log({ juegoborrado, juego});

//eliminar un elemento del array en una posicion especifica

let pos = 1;

console.log({juego});
let juegoBorrado = juego.splice( pos, 2);
console.log({ juegoBorrado, juego});

//buscar un valor del array (este retorna la posicion)

let metroidIndex = juego.indexOf('zelda');
console.log({ metroidIndex });