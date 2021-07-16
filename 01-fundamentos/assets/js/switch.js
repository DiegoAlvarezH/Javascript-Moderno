const dia = 0;

//cuando se utilizan valores exactos
switch(dia) {
//Colocamos el break si queremos que pare el case
// es decir si no colocamos el break se ejecutaran las funciones hacia abajo
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
    case 3:
        console.log('No es domingo, Lunes o martes');
}