//-----LISTA DE PRODUCTOS-----
const contenedorProductos = document.querySelector("#cards-container")
const contenedorCarrito = document.querySelector("#carrito-contenedor")
const contadorCarrito = document.querySelector("#contadorCarrito")
const contadorPrecioTotal = document.querySelector("#precioTotal")


const carrito = []

stockProductos.forEach((producto) => {
    const div = document.createElement("div")

    div.className = "producto"
    div.innerHTML =`
        <div class="card">
         <div class="card-container-img"><img src="${producto.image}" class="card-img" alt=""></div>
         <div class="card-container-data"><h1 class="name-product">${producto.title}</h1>
             <p class="specification">${producto.description}</p>
             <p class="price">$${producto.price}</p>
         </div>
      </div>   
    `
    //Boton de las cards
    const button = document.createElement ("button")
    button.className = "btn-carrito"
    button.innerHTML = "Agregar<i class='fa-solid fa-cart-shopping'>"
    button.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
   
    div.append(button)
    contenedorProductos.append(div)
});


// ----- MODAL -----

const modalOpen = document.querySelector('#modal-open')
const modalClose = document.querySelector ('#modal-close')
const modalContainer = document.querySelector('#modal-container')

//boton abrir modal carrito
modalOpen.addEventListener('click', () => {
    modalContainer.classList.add('modal-container-active')

});

//boton cerrar modal cerrar
modalClose.addEventListener('click', () => {
    modalContainer.classList.remove('modal-container-active')
})

// agregar al carrito

const agregarAlCarrito = (id) => {
    const producto = stockProductos.find ((item) => item.id === id)
    carrito.push(producto)

    console.log(carrito)
    renderCarrito()
    
}
 
// cards de modal

const renderCarrito = () => {
    renderListadoCarrito()
    renderCantidadCarrito()
    renderTotalCarrito()
}

const renderListadoCarrito = () =>{
    contenedorCarrito.innerHTML = ""

    carrito.forEach((producto) => {
        const div = document.createElement("div")
        div.className = "productoEnCarrito"
        div.innerHTML =`
            <img src="${producto.image}" class="img-modal" >
                <p><strong>${producto.title}</strong></p>
                <div class="productoEnCarritoFin">
                 <p>Precio: $${producto.price}</p>
                <i class="fa-solid fa-trash" id="eliminarItem"></i>
               </div>
            `
            
            // prueba eliminar item


            // /const btnEliminarItem = document.querySelector("#eliminarItem")

            // btnEliminarItem.addEventListener("click", () => {
            //    let index = id
            //    contenedorCarrito.splice(index, 1)
            //  })

            // contenedorCarrito.querySelector(carrito.id).remove()




        contenedorCarrito.append(div)
    })  

}

// contador carrito

const renderCantidadCarrito = () => {
    contadorCarrito.innerHTML = carrito.length
}

// render total carrito

const renderTotalCarrito = () => {
    contadorPrecioTotal.innerHTML = 0
    let total = 0

    carrito.forEach((producto) => {
        total += producto.price

    })

    contadorPrecioTotal.innerHTML = total
}

// vaciar carrito

const vaciarCarrito = document.querySelector("#vaciarCarrito")

vaciarCarrito.addEventListener("click", () => {
    contenedorCarrito.innerHTML = ""
    contadorPrecioTotal.innerHTML = 0
})






