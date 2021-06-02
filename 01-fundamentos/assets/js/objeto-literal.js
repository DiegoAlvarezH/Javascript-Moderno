//los objetos que tienen pares de valores
//estos tienen una propiedad {} y para asignar :
//no tiene limite, se pueden anidar
//utiliza camelcase
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.443,
        lng: -118.67
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265', 
        ubicacion: 'Malibu, CA'
    },
    'Ultima-pelicula': 'Infinity war'
};
//imprime en orden alfabetico, pero VScode lo puede arreglar tambien si a la hora de escribir se te olvida
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coords', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
//para obtener el ultimo traje, asi se agreguen otros   
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje.vivo);

//cuando queremos ultilizar un espacio o un guion, lo ideal es que lo hagamos con comillas simples 
console.log('Ultima pelicula', personaje['Ultima-pelicula']);

//mas detalles 
//borrar propiedad se utiliza la propiedad delete
delete personaje.edad 

console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log( entriesPares );

//metodo para congelar lo que tenga, es decir que es inmutable(bloqueado) que no se puede cambiar, a la hora de yo ejecutar dicho metodo.

Object.freeze(personaje)

//pero este no congela las propiedades de los objetos que estan dentro del objeto padre, o muy bien pasarle el freeze a dicha propiedad
personaje.dinero = 1000000000;
personaje.direccion.ubicacion = 'Costa rica';

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});