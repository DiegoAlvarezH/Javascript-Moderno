
let a = 10;
let b = a;

console.log({a, b});

let juan = {nombre: 'Juan'};
//separar la referencia y romperarla  
//operador spread 
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});

const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});

//arreglos 
const frutas = ['manzana', 'pera', 'banano'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('mango');

console.table({ frutas, otrasFrutas});