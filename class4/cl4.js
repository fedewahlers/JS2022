let opcion = parseInt(prompt("elegi una oferta  \n 1- oferta 2x1 \n 2- mismo tamaño paga 1 \n 3- oferta 4x3"));

verOfertas()

function verOfertas () {

    let mensaje;

    switch (opcion) {
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