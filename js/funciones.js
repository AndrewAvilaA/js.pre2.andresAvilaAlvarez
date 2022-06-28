function calcular (parCantidad, parValor){
    let precio = parseFloat(parCantidad * parValor)
    return precio
}

function generadorAutomatico() {
    productos.push(new Producto("ARIEL", "PRINCESA DISNEY", 3400))
    productos.push(new Producto("AURORA", "PRINCESA DISNEY", 3400))
    productos.push(new Producto("BLANCANIEVES", "PRINCESA DISNEY", 3200))
    productos.push(new Producto("DOLORES", "PRINCESA DISNEY", 3200))
    productos.push(new Producto("GROGU / BABY YODA", "STAR WARS", 3500))
    productos.push(new Producto("HIPOPOTAMO", "ANIMALES", 3000))
    productos.push(new Producto("LEIA", "STAR WARS", 3000))
    productos.push(new Producto("MOANA", "PRINCESA DISNEY", 3300))
    productos.push(new Producto("MOZART", "HISTORIA / MUSICA", 4000))
    productos.push(new Producto("PADME", "STAR WARS", 3000))
    productos.push(new Producto("SERENA", "SAILOR MOON / ANIME", 3000))
    productos.push(new Producto("TIGER", "ANIMALES", 3600))
}

generadorAutomatico()

function generadorDeCarrito() {
    carrito.push(new Producto("AURORA", "PRINCESA DISNEY", 3400))
    carrito.push(new Producto("HIPOPOTAMO", "ANIMALES", 3000))
    carrito.push(new Producto("PADME", "STAR WARS", 3000))
    carrito.push(new Producto("MOZART", "HISTORIA / MUSICA", 4000))
}

generadorDeCarrito()

function calcularCarrito(){
    debugger
    let total = carrito.reduce((acc, producto)=> acc + producto.precio, 0)
        console.table(carrito)
        console.log ("El total de tu compra: ",total,"$")
}

function listarProductos(){
    debugger
    productos.forEach( (producto)=>{
        console.log(producto.nombre)
    })
}

const inputBuscar = document.querySelector("#inputBuscar")

const botonBuscar = document.getElementById("botonBuscar")

botonBuscar.addEventListener("click", busqueda)

const listaBusqueda = document.querySelector("#listaBusqueda")

// inputBuscar.addEventListener("keyup", (e)=>{
//     if(e.keyCode === 13){
//         busqueda()
//     }
// })

function busqueda(){
    let plantilla = ``
    listaBusqueda.innerHTML = ""
    debugger
    let aBuscar = (inputBuscar.value).toUpperCase()
    const arrayResultados = productos.filter(l => l.nombre.includes(aBuscar) || l.tipo.includes(aBuscar))
        if (arrayResultados.length > 0) {
            for (elemento of arrayResultados){
            plantilla +=    `<card>
                                <h5 class="m-3">${elemento.nombre}</h3>
                                <p>${elemento.tipo}</p>
                                <p>Precio: ${elemento.precio}</p>
                            </card>`
        }
    }
    listaBusqueda.innerHTML += plantilla
}

const cartelPersonal = document.getElementById("cartelPersonal")

const inputCartel = document.querySelector("#inputCartel")

inputCartel.addEventListener("keyup", (e)=>{
    if(e.keyCode === 13){
        presupuestarCartel()
    }
})

const botonCartel = document.getElementById("botonCartel")

botonCartel.addEventListener("click", presupuestarCartel)

let carteles = []

function presupuestarCartel(){
    cartelPersonal.innerHTML = ""
    let cartel = inputCartel.value
    let letras = cartel.length
    let precio = calcular (letras, precioLetra)
    cartelPersonal.innerHTML += "<h3>"+cartel.toUpperCase()+"</h3><p> ¡Gracias por tu consulta! 😊 Este cartel tiene un valor de "+precio+" pesos.</p>"
    inputCartel.value = ""
        cartelesValuados.push(new CartelValuado(cartel.toUpperCase(), precio))
        localStorage.setItem("cartelesValuados", JSON.stringify (cartelesValuados))
}

const recuperarCartelesValuados = () => {
    if (localStorage.getItem("cartelesValuados")){
        let cart = JSON.parse(localStorage.getItem("cartelesValuados"))
            for (elemento of cart){
                cartelesValuados.push(elemento)
            }
    }
}

recuperarCartelesValuados()

const botonRefresh = document.querySelector("#botonRefresh")

botonRefresh.addEventListener("click", ()=> location.reload())