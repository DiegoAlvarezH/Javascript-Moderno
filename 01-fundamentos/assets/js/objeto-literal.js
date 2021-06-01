//los objetos que tienen pares de valores
//estos tienen una propiedad {} y para asignar :
//no tiene limite, se pueden anidar
//utiliza camelcase
let personaje = {
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
    }
};
//imprime en orden alfabetico, pero VScode lo puede arreglar tambien si a la hora de escribir se te olvida
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje.nombre);

