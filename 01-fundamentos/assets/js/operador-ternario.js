// como se si mi tienda esta abierta
const dia = 1; //0: domingo, 1: lunes, etc.
const horaActual = 10;

let horaApertura;
let mensaje; //Esta abierto, cerrado 

// if( dia === 0 ||  dia === 6 ){
 // IMPORTANTEEEE!!!!!!!!   //si algo existe dentro de los arreglos se utiliza el includes 
//     if([0,6].includes()) {
//     console.log(('dia de semana'));
//     horaApertura = 9; 
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }
horaApertura = ([0,6].includes(dia)) ? 9 : 11

// if(horaActual >= horaApertura) {
//     mensaje = 'Esta abierto'
// }else{
//     mensaje = `esta cerrado hoy abrimos a las ${horaApertura}`
// }

mensaje = (horaActual >= horaApertura) ? 'esta abierto': `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});