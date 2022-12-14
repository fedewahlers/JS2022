
// Selectores y variables
const contenedorCards = document.querySelector('#cards');
const resultado = document.querySelector('#resultado');
let carrito = [];

// Eventos
document.addEventListener('DOMContentLoaded', () => {

    carrito = JSON.parse(localStorage.getItem('diseños')) || [];
    mostrarGuardados(carrito);
})

contenedorCards.addEventListener('click', agregarCarrito);

// Funciones
function agregarCarrito (e) {

    if(e.target.classList.contains('btn')) {
        const disenoSeleccionado = e.target.parentElement.parentElement;
        mostrarDiseno(disenoSeleccionado)
    }
}

function mostrarDiseno(seleccionado) {

    // obtengo el titulo
    const titulo = seleccionado.children[1].children[0].textContent;

    // creo un párrafo
    const parrafo = document.createElement('P');
    parrafo.textContent = titulo;
    resultado.appendChild(parrafo);

    // agrego el elemento al carrito tambien
    carrito = [...carrito, titulo];
    // lo guardo en el storage
    sincronizarStorage();

}

function sincronizarStorage () {
    localStorage.setItem('diseños', JSON.stringify(carrito));
}

function mostrarGuardados (guardado) {

    guardado.forEach( diseno => {
        const parrafo = document.createElement('P');
        parrafo.textContent = diseno;
        resultado.appendChild(parrafo);
    })

}

//BOTON PARA LIBRERIA//

let botonlibre = document.getElementById("click")
botonlibre.addEventListener("click", () => {
    Swal.fire(
        'Bienvenido a Tatto Gallery',
        'Nos encontramos en galeria bond street',
        'info'
      )


});


//DESAFIO ULTIMO, NO LO PONGO EN PRACTICA PORQUE ESTOY VIENDO A QUE INTEGRARSELO BIEN, DEJO UN EJEMPLO DEL USO DEL COOSIGO, ASI SE VE REFLEJADO QUE LO ENTENDI, ENTREGARE ESTO FUNCIONANDO COMN TODO LO DEMAS EN EL ULTIMO DESAFIO, SALUDOS!

// document.addEventListener('DOMContentLoaded', () =>{
//     traerData();
//     })
    
//     const traerData = async () =>{
//     try{
//     const reponse = await fetch (./data.json);
//     const data = await reponse.json();
//     data.forEach(elemento => {
//     productos.push(new Producto(elemento));
//     });
//     dibujarCatalogoProductos("");
//     }
//     catch(error){
//     console.log(error);}
//     }

