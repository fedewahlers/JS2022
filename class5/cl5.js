



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