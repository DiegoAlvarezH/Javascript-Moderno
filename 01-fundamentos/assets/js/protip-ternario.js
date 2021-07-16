const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = ( miembro ) => (miembro) ? '2 dolares' : '10 dolares'

console.log(elMayor(10, 15));
console.log(tieneMembresia(true));

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. strange',
    amigo ? 'Thor': 'Loki',
    //se puede utilizar adentro funciones
    elMayor(10, 15)
];

console.log(amigosArr);

const nota = 65;
const grado = nota >= 95 ? 'A+' :
            nota >= 90 ? 'B+' :
            nota >= 85 ? 'B' :
            nota >= 80 ? 'C+' :
            nota >= 75 ? 'C' : 'F';

console.log({nota, grado});
