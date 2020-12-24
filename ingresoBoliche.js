/* Hacer un sistema que controle la entrada a un boliche:
-Entrada admitida +18 años
-La primer persona que ingresa a las 02AM no paga entrada
-horario 00-07AM
*/

let free = false;

function validarEntrada(hora){
    let edad = prompt ("¿Cuantos años tenes?");
    if (edad >= 18) {
        if( hora     >= 2 && hora < 7 && free == false){
            alert(`Son las ${hora}:hs pasas gratis`);
            free = true;
        }
        else{
            alert(`Son las ${hora}:hs podes pasar y pagas la entrada`)
        }
        
    } else{
        alert("¡Sos menor de edad, no podes pasar!")
    }
}

validarEntrada(0);
validarEntrada(0.15);
validarEntrada(0.30);
validarEntrada(0.1);
validarEntrada(1.15);
validarEntrada(2);
validarEntrada(2.15);
validarEntrada(3);
validarEntrada(4);
validarEntrada(5);
validarEntrada(6);




















