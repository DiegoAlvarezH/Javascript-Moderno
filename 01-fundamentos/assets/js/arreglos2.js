//los metodos son funciones que vienen internas de los arreglos
//y las propiedades son una variable que vienen en los arreglos

let juego = [
    'zelda',
    'mario',
    'chrono',
    'battlefield',
    123
];

console.log('Largo:', juego.length);

let primero = juego[3 -3 ]

let ultimo = juego[juego.length - 1]; 

console.log({primer, ultimo});

//el  forEach va a ejecutar una accion independiente, segun cada posicion del arreglo
juego.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, err});
});