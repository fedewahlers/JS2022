// // //FUNCIONES DE ORDEN SUPERIOR CON  ARRAYSS//


// // function mayorQue (n) {
// //     return m  => m  > n;
// // }

// // //LE DIGO QUE LA VARIABLE MAYORQUECICNO GUARDE LO QUE RETORNA LA FUNCION MAYORQUE //

// // let mayorQueCinco = mayorQue (5);

// // console.log(mayorQueCinco(8)); 

// // //CREO UNA FUNCION QUE CUADNO EL USUARIO INGRESE DOS NUMEROS REALIZE CIERTA FUNCION Y LA RETORNE ASI GUARDANDOSE EN LA VARIABLE CREADA//
// // function operaciones (op){
// //     if (op === "sumar"){
// //         return(x, y) => x+y ;
// //     }
// // }

// // let suma = operaciones ("sumar");

// // //ACLARO QUE LA VARIABLE SUMA VA A GUARDAR LO QUE SE HAGA EN LA FUNCION OPERACIONES CON LOS TERMINOS DE SUMAR//
// // console.log(suma(5, 20));
// // //SUMO 5+20//


// // //CREO NUEVA FUNCION//
// // //CON LOS PARAMTEROS QUE DEFINIRE MAS ADELANTE//

// // function recorrer (arreglo, funcion){
// //    for (const numero of arreglo)  {
// //     funcion(numero);

// //    }
// // }

// // //DEFINO LOS PARAMTEROS, 1,4,6,7 PASA A SER EL ARREGLO
// // //FUNCION PASA A SER EL CONSOLE LOG YAQUE ES UNA FUNCION YA DEFINIDA//

// // recorrer ([1,4,3,5,6,7], console.log)


// //METODOS AVANZADOS DE LOS ARRYASSS//

// //FOR EACH//

// //EL FOR EACH AL IGUAL QUE EL FOR, RECORRE TODO, PERO METIENDOZSWE EN CADA UNO DE LOS ITEMS DEL ARREGLO//

// // const tatuajesStock = [

// // { id: 1, nombre: "mariposa", precio: 1500},
// // { id: 2, nombre: "palmera", precio: 1300},
// // { id: 3, nombre: "perro", precio: 15000},
// // { id: 4, nombre: "tribal", precio: 1520},
// // ];

// // //ACCEDO AL ARRAY UTILIZANDO EL . Y UTILIZO EL FOREACH//
// // //SE ADENTRA EN EL ARRAY Y ME MUESTRA EN CONSOLA CADA ITEM(ID) CON SUS RESPECTIVAS PROPIEDADES YA DADAS//

// // tatuajesStock.forEach(item => console.log(item));


// //METODO FIND//
// //ENCUENTRA DENTRO DEL ARRAY LO PRIMERO QUE CUMPLA LA CONDICION DESIGNADA//

// // const tatuajesStock = [

// // { id: 1, nombre: "mariposa", precio: 1500},
// // { id: 2, nombre: "palmera", precio: 1300},
// // { id: 3, nombre: "perro", precio: 15000},
// // { id: 4, nombre: "tribal", precio: 1520},
// // ];

// //CREO UNA VARIABLE QUE VA A UTILIZAR EL METODO FIND, PARA BUSCAR ESE ITEM SI CUMPLE LAS CONDICIONES//
// //USANDO UN ARROW FUNCTION QUE ACCEDA AL ITEM.NOMBRE DE LOS ITEMS DEL ARRAY DEFINIDO ARRIBA//

// // let tattttt =  tatuajesStock.find(item => item.nombre === "mariposa")

// // console.log(tattttt);

// //INTERACTUO CON EL USUARIO PIDIENDOLE LO UE BUSCA Y DANDOLE DATAD E ESO
// //LO QUE HAGO ES CREAR UNA VARIABE PARA Q EL USUARIO INTERACTUE//
// //DECLARO OTRA VAR QUE DENTRA EN EN ARREGLO CON ITEMS//
// //A LOS ITEMS LE DOY LA FUNCION DE QUE SI EL NOMRE DEL ITEM ES IGUAL A L NOMBRE INGRESADO//
// //SI EL NOMBRE EESTA DEVUELVE EL PRECIO Y DEMAS//
// //SINO ENTRA AL IF// 

// // let nombre = prompt ("ingrese el estilo de tatuaje que busca para ver si hay en stock")
// // let producto = tatuajesStock.find(item=> item.nombre === nombre);
// // if (producto === undefined){
// //     alert ("diseño no disponible");
// // }else{let mensaje = `

// // id: ${producto.id}
// // Nombre: ${producto.nombre}
// // Precio: $${producto.precio}

// // `;
// // alert (mensaje);

// // }





// //METODO FILTER//
// //FITLRA LOS ELEMENTOS CON LA CONDICION, NO SOLO UNO SINO QUE MUCHOS

// // const tatuajesStock = [

// //     { id: 1, nombre: "mariposa", precio: 1500},
// //     { id: 2, nombre: "palmera", precio: 1300},
// //     { id: 3, nombre: "perro", precio: 15000},
// //     { id: 4, nombre: "tribal", precio: 1520},
// //     ];
// // //TRAE LOS PRODUCTOS Q VALGAN MAS DEL NUMERO MINIMO INGRESADO POR EL USUARIO//

// //     let precio =  prompt("ingrese el precio minimo")
// //     let filtrados = tatuajesStock.filter(item => item.precio > precio );

// //     console.log(filtrados);

// //     //PARA MOSTRARLE AL USUSARIO LO QUE BUSCA SE USA UN FOR//

// //     filtrados.forEach(item=>{
// //         let mensaje =`
// //         id: ${item.id}
// //         Nombre: ${item.nombre}
// //         Precio: $${item.precio}
        
// //         `;
// //         alert (mensaje);

// //     });






// //METODO SOME, VERIFICA SI AL MENOS UN ELEMTNO DEL ARRAY CUMPLE LA CONDICOIN//

// // const tatuajesStock = [

// //         { id: 1, nombre: "mariposa", precio: 1500},
// //         { id: 2, nombre: "palmera", precio: 1300},
// //         { id: 3, nombre: "perro", precio: 15000},
// //         { id: 4, nombre: "tribal", precio: 1520},
// //         ];
// //BUSCA CON EL SOME SI ALGUN ELEMTNO CUMPLE LA CONCION Y LODE VUELVE MEDIANTE UN TRUE O FALSE//
//         // console.log(tatuajesStock.some(item=> item.nombre === "perro"));






//         //METODO MAP//
//         //TRANFORMA LA ESTRUCTTURA DELOS ELEMTNOS DEL ARREGLO//

//         // const tatuajesStock = [

//         //     { id: 1, nombre: "mariposa", precio: 1500},
//         //     { id: 2, nombre: "palmera", precio: 1300},
//         //     { id: 3, nombre: "perro", precio: 15000},
//         //     { id: 4, nombre: "tribal", precio: 1520},
//         //     ];
//         //     //ME DA LOS NOMBRES UNICAMENTE, DEL ARREGLO CON EL MAP// 
//         //     const nombres = tatuajesStock.map (item => item.nombre);
//         //     console.log(nombres);

//         //     //UN EJEMPLO MAS CLARO SERIA PARA MODIFICAR SOLAMENTE LOS VALORES DE CIERTA PROPIEDAD DE UNA RREGLO HACIENDO LO SIGUIENTE//
//         //     //ME METO EN EL PRECIO NADA MAS Y LO MODIFICO MULTIPLICANDOLE 0.21 AL ITEM YA HECHO//

//         //     const stockActualizado = tatuajesStock.map (item => {
//         //         return{
//         //             id : item.id,
//         //             nombre: item.nombre,
//         //             precio: item.precio + item.precio * 0.21
//         //             }
//         //         });

//         //         console.log(stockActualizado);







//                 //METODO REDUCE//
//                 //REDUCE TODO A UN SOLO VALOR//

//             //     const ree = [1,2,3,4,5,6];

//             //     //EL REDUCE RECIBE DOS PARAMETROS//
//             //     //EL ACUMULADOR, VA ACUMULANDO TODO LO QUE RECIBA Y EL ITEM COMO EN LOS PUNTOS ANTERIORES, LO QUE HACE ES RECORRER UNO POR UNO. EL PRIMER ITEM ES 1, Y SE ACUMULA, LUEGO DOS Y SE ACUMULA HACIENDOQ UE SE ACUMULE UN 3//


//             // //EL PARAMETRO 0 HACE REFERENCIA A DE DONDE ARRANCA, EN ESTE CASO DESDE 0//
//             // //EL SEGUNDO PARAMETRO INICIALIZA EL ACUMULADOR//

//             //     const total = ree.reduce((acumulador, item) => acumulador+item, 0);

//             //     console.log(total);




//             //USO DEL SORT//
//             //RECIBE DOS PARAMETROS Y RETORNA UNA RESTA//

//             // const numeros = [1,45,6,89];
//             // //SE LE DA DOS PARAMETROS, A Y B PARA LO QUE INGRESE EL USUARIO Y 
//             // console.log(numeros.sort((a,b) => a-b));//MENOR A MAYOR a - z
//             // console.log(numeros.sort((a,b) => b-a));//MAYOR A MENOR z - a







//             // OBJETO MATH//
//             //PROVEEE HERRAMIENTAS DE MATEMATICA//

//             console.log(Math.PI);

//             //TE DEVUELVE RESULTADOS. POR EJEMPLO HACIENDO UN MAXIMO O MINIMO//
//             //NOS MUESTRA EL NUMERO MAS GRANDE DE TODOS ESOS DADOS, POR CONSOLA//

//             console.log(Math.max(1,5,78,98,33,22));

//             //TAMBIEN AL IGUAL QUE EL MAXIMO FUNCION CON EL MINIMO//

//             console.log(Math.min(2,1,4,5,87,56));

//             //HAY UN COMANDO PARA REDONDEAR EN UN NUMERO, SI PONES 1,70, TE DA UN 2//

//             console.log(Math.ceil(3.76));

//             //TAMBIEN EXISTE EL QUE REDONDEA PERO PARA EL NUMERO DE MAS ABAJO, UN 3,14 TE DEVUELVE UN 3//

//             console.log(Math.floor(3.14));

//             //Y PARA QUE REDONDEE EN EL QUE MAS CERCANO TENGA SEA ABAJO O ARRIBA SE USA//

//             console.log(Math.round(2.20));//DEVUELVE 2
//             console.log(Math.round(2.60));//DEVUELVE 3

//             //RSE PUEDEN HACER RAICES CUADRADAS//

//             console.log(Math.sqrt(9));

//             //POTENCIAS//

//             console.log(Math.pow)



//             //DATE////PODEMOS CONSTRUIR FECHAS XQ ES UNA CLASE//
//             console.log(Date());

//             //L DOy FECHA Y HORA//
//             console.log(new Date(2022,1,12, 23, 4, 23));

//             let fecha = new Date("Septiembre 1, 2022")
//             //SE PUEDE ENCONTRAR COSAS CON FECHAS//

//             console.log(fecha.getFullYear());
//             console.log(fecha.getMonth());
//             console.log(fecha.getDay());