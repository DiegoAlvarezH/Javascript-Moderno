let a = 5;

//esperando un valor booleano 
if(a < 10) {
    console.log('A es menor a 10 ');
}

// console.log('Fin del programa');

const fechaHoy = new Date();
let dia = fechaHoy.getDay(); //0: domingo, 1: lunes

console.log({dia});
// un = es apra asignar un valor.
// un doble == es para comparar si son iguales los valores, sin importar el tipo de dato.
//un triple === es para comparar estrictamente si son el mismo dato y su tipo.

// if (dia === 0) {
//     console.log('Domingo');
// } else {
//     console.log('No es Domingo');
// }

//conditional anidada
if (dia === 0) {
    console.log('Domingo');
} else if(dia === 1){
    console.log('Lunes');   
} else if(dia === 2){
    console.log('Martes');
} else {
    console.log('No es Domingo, ni lunes, ni martes');
}