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