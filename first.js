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










//EJERCICIOS DE PRACTICA DEL USO DEL WHILE E IF DENTRO//







// let numero = parseInt (prompt ("Ingrese un numero"))



//  while (numero > 0) {
//     let numeronuevo = parseInt(prompt ("Ingresa de nuevo un numero"))
//     let numerowe = numero += numeronuevo

//     if (numeronuevo == 0) {
//         alert (numerowe)
//         break;
        
//     }
    
//  }








// let par = parseInt(prompt("Ingrese un numero par"))
// let rese = par % 2
// let total = 1

// while (rese == 0 ){

// let repar = parseInt (prompt("Ingrese otro numero par"))

// let esimpar = repar % 2

// if (esimpar != 0) {
//     alert (`Ingresaste un total de $(total) numeros pares`)
//     break;

// }
// total ++




// }










//EJERCICIOS CON EL USO DEL FOR//






// let peticion = parseInt(prompt("Ingrese un numero"))



// for (i=0 ; i<=peticion ; i++){

    

// console.log (i+",");


    


// }








//EJERICIOS DEL USO DEL SWITCH//


let opcion = prompt ("elegi una opcion  \n 1-consultar turnos \n 2-agregar al carrito \n 3-contactanos  ")

switch (opcion) {

case "1":
alert ("para informaciuon sobre turnos comunicarse con el 112279593")
break;

case "2":


alert("Gracias por su eleccion, podra elegir los diseños que usted quiera")
break

case"3":

alert("nos encontramos en la galeria bond street ubicada sobre av santa fe")
break
;
default:
    alert("ingresa una opcion para poder continuar navegando, saludos! GALLERY TATTO")
    break;

}


//FUNCIONES Y SU USO////CREE UNA FUNCION QUE DEVUELVE UNA NOTA TEORICA EN BASE A UNA NOTA NUMERICA INGRESADA POR EL USUARIO//




function Notas (num){
    var calif;

   

    switch (num){
        case 5:
            calif= " aprobado"
            break;

            case 6:
                calif = " bien"
                break;

                case 7:

                case 8:
                    calif = " notable"
                    break;

                     case 9:
                         calif = " sobresaliente"
                         break;
                         case 10:
                             calif =" matricula "
                          break;

                          default:
                             calif= " suspenso"


     }
 return calif;





 }

 let notaFinal = parseInt(prompt("Ingrese su nota numerica y te dire el promedio"))

 alert ("tu calificacion es"+ Notas(notaFinal))



//OBJETOS Y METODOS//



// const tatoo1 = {

//     precio: 5400,
//     tamaño: "mediano",
//     color: "negro"


// }


//FUNCION CONSTRUCTORA//

class Autos {
    constructor (marca, modelo ,color, precio){

        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = parseInt(precio);
    }
     cambiarColor(){
        console.log(`Cmbiando el color del auto ${this.color}`);
    }
}



const auto1 = new Autos ("suzuki", "quingorreado", "azul", 5000);

const auto2 = new Autos ("chevrolet", "corsa", "negro", 10000);

    auto2.cambiarColor() ;






//HERENCIA DE UNA CLASE//

//CREO UNA CLASE NUEVA DERIBADA DE LA CLASE AUTOS, LA HEREDA, HEREDA LAS PROPIEDADES Y LOS METODOS COMO CAMBIARCOLOR//


class AutoElectrico extends Autos{

    //EL CONSTRUCTOR HEREDA EL DE AUTOS USANDO EL SUPER TAMBIEN PONIENDO LOS PARAMETROS//


    constructor (marca, modelo, color, precio, encendido, motor){
        super(marca, modelo, color , precio);

        this.encendido = encendido;
        this.motor = motor;

    }
}

const tesla = new AutoElectrico ("tesla", "carrion", "azul", 2000, "manual", "gasolero")

tesla.cambiarColor()


