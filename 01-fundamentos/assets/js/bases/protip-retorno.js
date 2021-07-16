// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido
//     }
// }
 
const crearPersona = (nombre, apellido) => ({nombre, apellido}); 

const persona = crearPersona( 'Diego', 'Alvarez');
console.log(persona);

function imprimeArgumentos() {
    console.log( arguments );
}

const imprimeArgumentos2 = (edad, ...args) => { 
    // console.log({edad, args});
    return args;
}
//asignar variable a cada valor
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Fernando', 'hola');
console.log({casado, vivo, nombre, saludo});

//asignar nuevos valores
const {apellido: nuevoApellido} = crearPersona('fernando', 'alvarez');
console.log({nuevoApellido});

const tony = {
    nombre: 'tony stark',
    codeName: 'ironman',
    vivo: false,
    edad: 40,
    trajes: ['mark 1', 'mark V', 'hulkbuster']
}

const imprimePropiedades = ({nombre, codeName, vivo, edad = 14, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}
imprimePropiedades(tony);