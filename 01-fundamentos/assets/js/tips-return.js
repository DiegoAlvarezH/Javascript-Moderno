// tunction createPersona(nombre, apellido) {
//     //objeto literal
//     return {
//         nombre: nombre,
//         apellido: apellido

//     }

// }

const createPersona = (nombre, apellido) {
    return {nombre, apellido}
}

const persona = createPersona('Alejo', 'Alvarez');
console.log(persona);

