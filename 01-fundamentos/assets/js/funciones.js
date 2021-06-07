//una funcion es una serie de instrucciones que podemos ejecutar y reutilizar en nuestro codigo
//termino tecnico = es centralizar la logica de un procedimiento que podemos reutilizar varias veces

//un metodo es una funcion que se encuentra dentro de un objeto

//todas las funciones en js retornan undefined si no le damos dicha instruccion

function saludar(nombre){
    console.log('Hola ' + nombre);
    return 1;
}

const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola flecha');
}
 
const saludarFlecha2 = (nombre) => {
    console.log('Hola flecha' + nombre);
}


//funcion anonima no tiene nombre pero se asigna
// const saludar2 = function(){
//     console.log('hola mundo');
// }


saludar('Diego', 22, true, 'Colombia'); 
// saludar2('Diego')
saludarFlecha2('Alejo');


//llamar con ();