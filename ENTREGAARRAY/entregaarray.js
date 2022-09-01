let Uno =  prompt ("Ingresa tu nombre")
let mensaje  = alert ("Bienvenido/a "+ Uno)
let Edad = parseInt (prompt ("Ingresa tu edad")) 

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

let opcion = prompt ("elegi una opcion  \n 1-consultar turnos \n 2-agregar al carrito \n 3-contactanos  ")

switch (opcion) {

case "1":
alert ("para informaciuon sobre turnos comunicarse con el 112279593")
break;

case "2":

    let opcion22 = parseInt(prompt("elegi una oferta  \n 1- oferta 2x1 \n 2- mismo tamaño paga 1 \n 3- oferta 4x3"));

verOfertas()

function verOfertas () {

    let mensaje;

    switch (opcion22) {
        case 1: 
            alert("elija dos diseños y pague 1");
        break;
        case 2:
            alert("seleccione dos diseños del mismo tamaño y obtenga un descuento");
        break;
        case 3:
            alert("elija 4 tatuajes y pague 3")
        break;
        default:
            alert("no eligio ninguna oferta");
        break;
    }

    return mensaje;

}
break

case"3":

alert("nos encontramos en la galeria bond street ubicada sobre av santa fe")
break
;
default:
    alert("ingresa una opcion para poder continuar navegando, saludos! GALLERY TATTOO")
    break;

}








const tatoo23 = {

    precio: 5400,
    tamaño: "mediano",
    color: "negro"
}

class tattoos {
    constructor (diseño, tamaño ,color, precio){

        this.diseño = diseño;
        this.tamaño = tamaño;
        this.color = color;
        this.precio = parseInt(precio);
    }
     cambiarColor(){
        console.log(`Cmbiando el color del tattoo ${this.color}`);
    }
}
const tatto1 = new Tattoos ("flor", "20cm", "azul y negro", 5000);

const tatto2 = new Tattoos ("tribal", "15cm", "negro y rojo", 3000);

console.log( tatto2.cambiarColor() );   


const tipos1 = ["flor", "tribal", "cruz", "palmera"];

console.log(tipos1[0]);


tipos1.push ( "mandala")

console.log(tipos1);












