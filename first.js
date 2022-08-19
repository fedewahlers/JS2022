//CREO VARIABLES Y LAS UITILIZO JUNTO AL ESPECTADOR//

let Uno =  prompt ("Ingresa tu nombre")
let mensaje  = alert ("Bienvenido/a "+ Uno)
let Edad = parseInt (prompt ("Ingresa tu edad")) 

// USO DEL CICLO FOR Y USO EL CNODICIONAL IF Y ELSE IF//


for (i = 0; i <=5; i++){
    if (Edad >= 18){
        alert("Bienvenido a tattoo gallery")
        break;
    } else if (Edad < 18) {
        Edad = prompt("No podés ingresar sos menor de edad ingresa una edad valida")
    }

     if (i == 5) {
        alert("Ya superaste el maximo de intentos, estás baneado de IP")
    }
}

//USO DEL WHILE //

// let intentos = 0

// if (edad >= 18) {
//     alert("Podés pasar capo")
// }

// while (edad < 18) {

//     let nuevaEdad = parseInt(prompt("No podés pasar capo, ingresá nuevamente la edad"))
//     intentos = intentos + 1

//     if(nuevaEdad >= 18) {
//         alert("Ahora podés pasar jaja")
//         break;
//     } else if (intentos == 5) {
//         alert("No podés intentar más")
//         break;
//     }
// }
  


