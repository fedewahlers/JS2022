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

// //FUNCIONES DE ORDEN SUPERIOR CON  ARRAYSS//


// function mayorQue (n) {
//     return m  => m  > n;
// }

// //LE DIGO QUE LA VARIABLE MAYORQUECICNO GUARDE LO QUE RETORNA LA FUNCION MAYORQUE //

// let mayorQueCinco = mayorQue (5);

// console.log(mayorQueCinco(8)); 

// //CREO UNA FUNCION QUE CUADNO EL USUARIO INGRESE DOS NUMEROS REALIZE CIERTA FUNCION Y LA RETORNE ASI GUARDANDOSE EN LA VARIABLE CREADA//
// function operaciones (op){
//     if (op === "sumar"){
//         return(x, y) => x+y ;
//     }
// }

// let suma = operaciones ("sumar");

// //ACLARO QUE LA VARIABLE SUMA VA A GUARDAR LO QUE SE HAGA EN LA FUNCION OPERACIONES CON LOS TERMINOS DE SUMAR//
// console.log(suma(5, 20));
// //SUMO 5+20//


// //CREO NUEVA FUNCION//
// //CON LOS PARAMTEROS QUE DEFINIRE MAS ADELANTE//

// function recorrer (arreglo, funcion){
//    for (const numero of arreglo)  {
//     funcion(numero);

//    }
// }

// //DEFINO LOS PARAMTEROS, 1,4,6,7 PASA A SER EL ARREGLO
// //FUNCION PASA A SER EL CONSOLE LOG YAQUE ES UNA FUNCION YA DEFINIDA//

// recorrer ([1,4,3,5,6,7], console.log)


//METODOS AVANZADOS DE LOS ARRYASSS//

//FOR EACH//

//EL FOR EACH AL IGUAL QUE EL FOR, RECORRE TODO, PERO METIENDOZSWE EN CADA UNO DE LOS ITEMS DEL ARREGLO//

// const tatuajesStock = [

// { id: 1, nombre: "mariposa", precio: 1500},
// { id: 2, nombre: "palmera", precio: 1300},
// { id: 3, nombre: "perro", precio: 15000},
// { id: 4, nombre: "tribal", precio: 1520},
// ];

// //ACCEDO AL ARRAY UTILIZANDO EL . Y UTILIZO EL FOREACH//
// //SE ADENTRA EN EL ARRAY Y ME MUESTRA EN CONSOLA CADA ITEM(ID) CON SUS RESPECTIVAS PROPIEDADES YA DADAS//

// tatuajesStock.forEach(item => console.log(item));


//METODO FIND//
//ENCUENTRA DENTRO DEL ARRAY LO PRIMERO QUE CUMPLA LA CONDICION DESIGNADA//

// const tatuajesStock = [

// { id: 1, nombre: "mariposa", precio: 1500},
// { id: 2, nombre: "palmera", precio: 1300},
// { id: 3, nombre: "perro", precio: 15000},
// { id: 4, nombre: "tribal", precio: 1520},
// ];

//CREO UNA VARIABLE QUE VA A UTILIZAR EL METODO FIND, PARA BUSCAR ESE ITEM SI CUMPLE LAS CONDICIONES//
//USANDO UN ARROW FUNCTION QUE ACCEDA AL ITEM.NOMBRE DE LOS ITEMS DEL ARRAY DEFINIDO ARRIBA//

// let tattttt =  tatuajesStock.find(item => item.nombre === "mariposa")

// console.log(tattttt);

//INTERACTUO CON EL USUARIO PIDIENDOLE LO UE BUSCA Y DANDOLE DATAD E ESO
//LO QUE HAGO ES CREAR UNA VARIABE PARA Q EL USUARIO INTERACTUE//
//DECLARO OTRA VAR QUE DENTRA EN EN ARREGLO CON ITEMS//
//A LOS ITEMS LE DOY LA FUNCION DE QUE SI EL NOMRE DEL ITEM ES IGUAL A L NOMBRE INGRESADO//
//SI EL NOMBRE EESTA DEVUELVE EL PRECIO Y DEMAS//
//SINO ENTRA AL IF// 

// let nombre = prompt ("ingrese el estilo de tatuaje que busca para ver si hay en stock")
// let producto = tatuajesStock.find(item=> item.nombre === nombre);
// if (producto === undefined){
//     alert ("diseño no disponible");
// }else{let mensaje = `

// id: ${producto.id}
// Nombre: ${producto.nombre}
// Precio: $${producto.precio}

// `;
// alert (mensaje);

// }





//METODO FILTER//
//FITLRA LOS ELEMENTOS CON LA CONDICION, NO SOLO UNO SINO QUE MUCHOS

// const tatuajesStock = [

//     { id: 1, nombre: "mariposa", precio: 1500},
//     { id: 2, nombre: "palmera", precio: 1300},
//     { id: 3, nombre: "perro", precio: 15000},
//     { id: 4, nombre: "tribal", precio: 1520},
//     ];
// //TRAE LOS PRODUCTOS Q VALGAN MAS DEL NUMERO MINIMO INGRESADO POR EL USUARIO//

//     let precio =  prompt("ingrese el precio minimo")
//     let filtrados = tatuajesStock.filter(item => item.precio > precio );

//     console.log(filtrados);

//     //PARA MOSTRARLE AL USUSARIO LO QUE BUSCA SE USA UN FOR//

//     filtrados.forEach(item=>{
//         let mensaje =`
//         id: ${item.id}
//         Nombre: ${item.nombre}
//         Precio: $${item.precio}
        
//         `;
//         alert (mensaje);

//     });






//METODO SOME, VERIFICA SI AL MENOS UN ELEMTNO DEL ARRAY CUMPLE LA CONDICOIN//

// const tatuajesStock = [

//         { id: 1, nombre: "mariposa", precio: 1500},
//         { id: 2, nombre: "palmera", precio: 1300},
//         { id: 3, nombre: "perro", precio: 15000},
//         { id: 4, nombre: "tribal", precio: 1520},
//         ];
//BUSCA CON EL SOME SI ALGUN ELEMTNO CUMPLE LA CONCION Y LODE VUELVE MEDIANTE UN TRUE O FALSE//
        // console.log(tatuajesStock.some(item=> item.nombre === "perro"));






        //METODO MAP//
        //TRANFORMA LA ESTRUCTTURA DELOS ELEMTNOS DEL ARREGLO//

        // const tatuajesStock = [

        //     { id: 1, nombre: "mariposa", precio: 1500},
        //     { id: 2, nombre: "palmera", precio: 1300},
        //     { id: 3, nombre: "perro", precio: 15000},
        //     { id: 4, nombre: "tribal", precio: 1520},
        //     ];
        //     //ME DA LOS NOMBRES UNICAMENTE, DEL ARREGLO CON EL MAP// 
        //     const nombres = tatuajesStock.map (item => item.nombre);
        //     console.log(nombres);

        //     //UN EJEMPLO MAS CLARO SERIA PARA MODIFICAR SOLAMENTE LOS VALORES DE CIERTA PROPIEDAD DE UNA RREGLO HACIENDO LO SIGUIENTE//
        //     //ME METO EN EL PRECIO NADA MAS Y LO MODIFICO MULTIPLICANDOLE 0.21 AL ITEM YA HECHO//

        //     const stockActualizado = tatuajesStock.map (item => {
        //         return{
        //             id : item.id,
        //             nombre: item.nombre,
        //             precio: item.precio + item.precio * 0.21
        //             }
        //         });

        //         console.log(stockActualizado);







                //METODO REDUCE//
                //REDUCE TODO A UN SOLO VALOR//

            //     const ree = [1,2,3,4,5,6];

            //     //EL REDUCE RECIBE DOS PARAMETROS//
            //     //EL ACUMULADOR, VA ACUMULANDO TODO LO QUE RECIBA Y EL ITEM COMO EN LOS PUNTOS ANTERIORES, LO QUE HACE ES RECORRER UNO POR UNO. EL PRIMER ITEM ES 1, Y SE ACUMULA, LUEGO DOS Y SE ACUMULA HACIENDOQ UE SE ACUMULE UN 3//


            // //EL PARAMETRO 0 HACE REFERENCIA A DE DONDE ARRANCA, EN ESTE CASO DESDE 0//
            // //EL SEGUNDO PARAMETRO INICIALIZA EL ACUMULADOR//

            //     const total = ree.reduce((acumulador, item) => acumulador+item, 0);

            //     console.log(total);




            //USO DEL SORT//
            //RECIBE DOS PARAMETROS Y RETORNA UNA RESTA//

            // const numeros = [1,45,6,89];
            // //SE LE DA DOS PARAMETROS, A Y B PARA LO QUE INGRESE EL USUARIO Y 
            // console.log(numeros.sort((a,b) => a-b));//MENOR A MAYOR a - z
            // console.log(numeros.sort((a,b) => b-a));//MAYOR A MENOR z - a







        //     // OBJETO MATH//
        //     //PROVEEE HERRAMIENTAS DE MATEMATICA//

        //     console.log(Math.PI);

        //     //TE DEVUELVE RESULTADOS. POR EJEMPLO HACIENDO UN MAXIMO O MINIMO//
        //     //NOS MUESTRA EL NUMERO MAS GRANDE DE TODOS ESOS DADOS, POR CONSOLA//

        //     console.log(Math.max(1,5,78,98,33,22));

        //     //TAMBIEN AL IGUAL QUE EL MAXIMO FUNCION CON EL MINIMO//

        //     console.log(Math.min(2,1,4,5,87,56));

        //     //HAY UN COMANDO PARA REDONDEAR EN UN NUMERO, SI PONES 1,70, TE DA UN 2//

        //     console.log(Math.ceil(3.76));

        //     //TAMBIEN EXISTE EL QUE REDONDEA PERO PARA EL NUMERO DE MAS ABAJO, UN 3,14 TE DEVUELVE UN 3//

        //     console.log(Math.floor(3.14));

        //     //Y PARA QUE REDONDEE EN EL QUE MAS CERCANO TENGA SEA ABAJO O ARRIBA SE USA//

        //     console.log(Math.round(2.20));//DEVUELVE 2
        //     console.log(Math.round(2.60));//DEVUELVE 3

        //     //RSE PUEDEN HACER RAICES CUADRADAS//

        //     console.log(Math.sqrt(9));

        //     //POTENCIAS//

        //     console.log(Math.pow)



            //DATE////PODEMOS CONSTRUIR FECHAS XQ ES UNA CLASE//
        //     console.log(Date());

        //     //L DOy FECHA Y HORA//
        //     console.log(new Date(2022,1,12, 23, 4, 23));

        //     let fecha = new Date("Septiembre 1, 2022")
        //     //SE PUEDE ENCONTRAR COSAS CON FECHAS//

        //     console.log(fecha.getFullYear());
        //     console.log(fecha.getMonth());
        //     console.log(fecha.getDay());


             

            
            






















