// //CREO VARIABLES Y LAS UITILIZO JUNTO AL ESPECTADOR//

// let Uno =  prompt ("Ingresa tu nombre")
// let mensaje  = alert ("Bienvenido/a "+ Uno)
// let Edad = parseInt (prompt ("Ingresa tu edad")) 

// // // USO DEL CICLO FOR Y USO EL CNODICIONAL IF Y ELSE IF//


// for (i = 0; i <=5; i++){
//     if (Edad >= 18){
//         alert("Bienvenido a tattoo gallery")
//         break;
//     } else if (Edad < 18) {
//         Edad = prompt("No podés ingresar sos menor de edad ingresa una edad valida")
//     }

//      if (i == 5) {
//         alert("Ya superaste el maximo de intentos, estás baneado de IP")
//     }
// }

// //USO DEL WHILE //

// // let intentos = 0

// // if (edad >= 18) {
// //     alert("Podés pasar capo")
// // }

// // while (edad < 18) {

// //     let nuevaEdad = parseInt(prompt("No podés pasar capo, ingresá nuevamente la edad"))
// //     intentos = intentos + 1

// //     if(nuevaEdad >= 18) {
// //         alert("Ahora podés pasar jaja")
// //         break;
// //     } else if (intentos == 5) {
// //         alert("No podés intentar más")
// //         break;
// //     }
// // }










// //EJERCICIOS DE PRACTICA DEL USO DEL WHILE E IF DENTRO//







// // let numero = parseInt (prompt ("Ingrese un numero"))



// //  while (numero > 0) {
// //     let numeronuevo = parseInt(prompt ("Ingresa de nuevo un numero"))
// //     let numerowe = numero += numeronuevo

// //     if (numeronuevo == 0) {
// //         alert (numerowe)
// //         break;
        
// //     }
    
// //  }








// // let par = parseInt(prompt("Ingrese un numero par"))
// // let rese = par % 2
// // let total = 1

// // while (rese == 0 ){

// // let repar = parseInt (prompt("Ingrese otro numero par"))

// // let esimpar = repar % 2

// // if (esimpar != 0) {
// //     alert (`Ingresaste un total de $(total) numeros pares`)
// //     break;

// // }
// // total ++




// // }










// //EJERCICIOS CON EL USO DEL FOR//






// // let peticion = parseInt(prompt("Ingrese un numero"))



// // for (i=0 ; i<=peticion ; i++){

    

// // console.log (i+",");


    


// // }








// //EJERICIOS DEL USO DEL SWITCH//


// let opcion = prompt ("elegi una opcion  \n 1-consultar turnos \n 2-agregar al carrito \n 3-contactanos  ")

// switch (opcion) {

// case "1":
// alert ("para informaciuon sobre turnos comunicarse con el 112279593")
// break;

// case "2":


// alert("Gracias por su eleccion, podra elegir los diseños que usted quiera")
// break

// case"3":

// alert("nos encontramos en la galeria bond street ubicada sobre av santa fe")
// break
// ;
// default:
//     alert("ingresa una opcion para poder continuar navegando, saludos! GALLERY TATTOO")
//     break;

// }


// //FUNCIONES Y SU USO////CREE UNA FUNCION QUE DEVUELVE UNA NOTA TEORICA EN BASE A UNA NOTA NUMERICA INGRESADA POR EL USUARIO//




// // function Notas (num){
// //     var calif;

   

// //     switch (num){
// //         case 5:
// //             calif= " aprobado"
// //             break;

// //             case 6:
// //                 calif = " bien"
// //                 break;

// //                 case 7:

// //                 case 8:
// //                     calif = " notable"
// //                     break;

// //                      case 9:
// //                          calif = " sobresaliente"
// //                          break;
// //                          case 10:
// //                              calif =" matricula "
// //                           break;

// //                           default:
// //                              calif= " suspenso"


// //      }
// //  return calif;





// //  }

// //  let notaFinal = parseInt(prompt("Ingrese su nota numerica y te dire el promedio"))

// //  alert ("tu calificacion es"+ Notas(notaFinal))



// //OBJETOS Y METODOS//



// // const tatoo1 = {

// //     precio: 5400,
// //     tamaño: "mediano",
// //     color: "negro"


// // }





// //FUNCION CONSTRUCTORA//

// class tattoos {
//     constructor (diseño, tamaño ,color, precio){

//         this.diseño = diseño;
//         this.tamaño = tamaño;
//         this.color = color;
//         this.precio = parseInt(precio);
//     }
//      cambiarColor(){
//         console.log(`Cmbiando el color del tattoo ${this.color}`);
//     }
// }



// const tatto1 = new Tattoos ("flor", "20cm", "azul y negro", 5000);

// const tatto2 = new Tattoos ("tribal", "15cm", "negro y rojo", 3000);

// console.log( tatto2.cambiarColor() );   






// // //HERENCIA DE UNA CLASE//

// // //CREO UNA CLASE NUEVA DERIBADA DE LA CLASE AUTOS, LA HEREDA, HEREDA LAS PROPIEDADES Y LOS METODOS COMO CAMBIARCOLOR//


// // class AutoElectrico extends Autos{

// //     //EL CONSTRUCTOR HEREDA EL DE AUTOS USANDO EL SUPER TAMBIEN PONIENDO LOS PARAMETROS//


// //     constructor (marca, modelo, color, precio, encendido, motor){
// //         super(marca, modelo, color , precio);

// //         this.encendido = encendido;
// //         this.motor = motor;

// //     }
// // }

// // const tesla = new AutoElectrico ("tesla", "carrion", "azul", 2000, "manual", "gasolero")

// // tesla.cambiarColor() 







// //ARRAYS//



// //creo array//
// //Se puede combinar bulleanos, enteros y strings//

// const tipos1 = ["flor", "tribal", "cruz", "palmera"];


// //PARA INGRESAR A UN DATO DEL ARRAY POR CONSOLA SE HACE O SIGUIENE//
// //DENTRO DEL LOG (NOMBRE DEL ARRRAY [NUMERO DEL DATO, TENIENDO EN CUENTA QUE COMIENXA EL CONTEO DESDE 0])
// //LOS VALORES SE CUENTAN DESDE 0, ES DECIR QUE EN EL ARRAY 1 ANDRES SERIA EL 0 Y FABIO EL 1//

// console.log(tipos1[0]);

// //PARA SUMAR ENTRE ELLOS SE HACE//

// // console.log(array2[3] + array1 [1 ]);

// //USO DEL FOR EN LOS ARRAYS PARA RECORRER EL ARRAY//

// // for(let index = 0; index < array2.lenght; index++){
// //     //EL .LENGHT MIDE LA LONGITUD DE ESE ARRAY, ES DECIR CUANTOS ELEMENTOS HAY DENTRO//
// //     console.log(array2[index]);
// // }

// //EXISTE LA POSIBILIDAD DE AGREGAR UN ELEMENTO MAS AL ARRAY USANDO UN COMANDO//

// tipos1.push ( "mandala")
// //se agrega al final de todos los valores ya ingresados anteriormente//
// console.log(tipos1);

// //USANDO EL COMANDO .UNSHIFT SE LO AGREGA AL PRINCIPIO//

// array2.unshift ("Juan")

// //TAMBIEN SE PUEDEN QUITAR LOS ELEMENTOS TANTO DEL FINAL COMO DEL PRINCIPIO//

// //DEL FINAL SE LO QUITA CON .POP//

// array2.pop ();

// //para sacar del principio//

// array2.shift();

// //USO DEL SPLICE, SIRVE PARA ELIMINAR CIERTA CANTIDAD DE OBJETOS DENTRO DE UN ARRAY//
// //SE PARA EN LA PSOCION QUE NOSOTROS LE DEMOS HAVIEN DO REFERENCIA AL PRIMER NUMERO Y BORRA LA CANTIDAD DE OBJETOS QUE HACE REFERENCIA EL SEGUNDO NUMERO.//

// array2.splice(1,2);

// //SE PARA EN EL NUMERO UNO Y BORRA DOS// 
// console.log(array2);

// //USO DEL COMANDO JOIN//
// //UNE TODOS LOS BOJETOS O PARAMETROS EN UN MISMO STRING""//

// console.log(array2.join("-"));

// //USO DEL CONCAT (CONCATENA DOS ARRAYS)//

// console.log(array1.concat(array2));

// //USO DEL SLICE, NO SPLICE//

// //COPIA DESDE EL 2 AL 3, UNO ANTERIOR AL LIMITE QUE LE PONGAS//

// const copia = array2.slice(2,4);

// console.log(copia);

// //COMANDO INDEX OFF, TE DICE EN QUE POSICION ESTA EL ELEMNTO//

// console.log(array2.indexOf("Jorge"));

// //USO DEL INCLUDES, VERIFICA SI EL ELEMENTO QUE LE PREGUNTO ESTA DENTRO DEL ARRAY//
// //CON UN TRUE O FALSE7/

// console.log(array2.includes("Andres"));

// //REVERSE, DA VUELTA EL ORDEN DEL ARREGLO //

// console.log(array2.reverse);

// //FUNCION CON UN ARRAY//











