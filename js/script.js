//1-DETTOSTORE - CARRITO DE COMPRAS

function Producto(nombre, precio, stock, img, categoria, id){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.img = img;
    this.categoria = categoria;
    this.id = id;
    this.restarStock = function(cantidad){
        if(this.stock > 0){
            this.stock -= cantidad
        }
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}

let productoA = new Producto("Ryzen 5 5600G", 5350, 2, "./imgs/cpu.jpg", "Procesadores", 1)
let productoB = new Producto("Ryzen 5 5600X", 5350, 20, "./imgs/cpu.jpg", "Procesadores", 2)
let productoC = new Producto("Ryzen 7 5700G", 5350, 20, "./imgs/cpu7.jpg", "Procesadores", 3)
let productoD = new Producto("Ryzen 7 5700X ", 5350, 20, "./imgs/cpu7.jpg", "Procesadores", 4) 

let productoE = new Producto("RAM", 2330, 89, "./imgs/ram.jpg", "Memorias RAM", 5)
let productoF = new Producto("RAM", 2330, 89, "./imgs/ram.jpg", "Memorias RAM", 6)
let productoG = new Producto("RAM", 2330, 89, "./imgs/ram.jpg", "Memorias RAM", 7)
let productoH = new Producto("RAM", 2330, 89, "./imgs/ram.jpg", "Memorias RAM", 8)

let productoI = new Producto("MOTHER", 4780, 22, "./imgs/mother.jpg", "Motherboards", 9)
let productoJ = new Producto("MOTHER", 4780, 22, "./imgs/mother.jpg", "Motherboards", 10)
let productoK = new Producto("MOTHER", 4780, 22, "./imgs/mother.jpg", "Motherboards", 11)
let productoM = new Producto("MOTHER", 4780, 22, "./imgs/mother.jpg", "Motherboards", 12)

let productoN = new Producto("SSD", 1500, 70, "./imgs/ssd.jpg", "Discos Solidos", 13)
let productoO = new Producto("SSD", 1500, 70, "./imgs/ssd.jpg", "Discos Solidos", 14)
let productoP = new Producto("SSD", 1500, 70, "./imgs/ssd.jpg", "Discos Solidos", 15)
let productoQ = new Producto("SSD", 1500, 70, "./imgs/ssd.jpg", "Discos Solidos", 16)

let productoR = new Producto("PLACA DE VIDEO", 11700, 10, "./imgs/gpu.jpg", "Placas de Video", 17)
let productoS = new Producto("PLACA DE VIDEO", 11700, 10, "./imgs/gpu.jpg", "Placas de Video", 18)
let productoT = new Producto("PLACA DE VIDEO", 11700, 10, "./imgs/gpu.jpg", "Placas de Video", 19)
let productoU = new Producto("PLACA DE VIDEO", 11700, 10, "./imgs/gpu.jpg", "Placas de Video", 20)

let listaProductos = [productoF, productoC, productoB, productoE, productoD, productoA, productoK, productoM, productoN, productoO, productoJ, productoI, productoH, productoG, productoQ, productoS, productoR, productoT, productoU, productoP] //Armar array con los productos

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0) //Filtrar en un array los productos con stock

let listaNombres = listaProductosConStock.map((prod) => prod.nombre) //Mapear el nombre de los productos con stock a un array nuevo

//ELEMENTOS HTML
let catalogo = document.getElementById("lista")
let all = document.getElementById("all") //Borrar filtros

let sumarCantidad = document.getElementById("cant") //Valor numerico del carrito
let mostrarCarrito = document.getElementById("listaCarrito")

let botonCarrito = document.getElementById("carrito") //Abrir y cerrar carrito
let x = document.getElementById("containerCarrito")

//EVENTOS
botonCarrito.addEventListener("click", ()=> {abrirCarro()})
all.addEventListener("click", ()=>{render(listaProductosConStock)})


//FUNCIONES
function SelectFiltro(){
var combo = document.getElementById("menuFiltro");
var selected = combo.options[combo.selectedIndex].text;
render(listaProductos.filter((prod)=>prod.categoria == selected));
}

function abrirCarro(){
    if((x.style.display == "none")&&(carrito.length > 0)){
        x.style.display = "block"
    }
    else{
        x.style.display = "none"
    }   
}

function render(lista) {
    catalogo.innerHTML = ""

    for(const prod of lista){
        let card = document.createElement("div")
        card.className = "item"
        if(prod.stock > 0){
            card.innerHTML = `<img src="${prod.img}" alt="${prod.nombre}" alt=""><h2 class="titulo">${prod.nombre}</h2><p>Precio: $${prod.precio}</p><button id="${prod.id}">SUMAR AL CARRITO</button>`
        }
        else{
            card.innerHTML = `<img src="${prod.img}" alt="${prod.nombre}" alt=""><h2 class="titulo">${prod.nombre}</h2><p>Precio: $${prod.precio}</p><button id="${prod.id}" class="nostock">SIN STOCK</button>`
        }
        catalogo.append(card)
        const boton = document.getElementById(`${prod.id}`)
        boton.addEventListener("click", ()=> agregarCarrito(prod.id, prod.stock))
    }
}
render(listaProductosConStock)

function renderCarrito(listaCarrito) {
    mostrarCarrito.innerHTML = ""

    if(carrito.length < 1){
        x.style.display = "none"
    }

    for(const prod of listaCarrito){

        let carro = document.createElement("div")
        carro.className = "item"
        carro.innerHTML = `<img src="${prod.img}" alt="${prod.nombre}" alt=""><h2 class="titulo">${prod.nombre}</h2><p>Precio: $${prod.precio}</p><button id="borrar${prod.id}">ELIMINAR</button>`
        mostrarCarrito.append(carro)

        const botonBorrar = document.getElementById(`borrar${prod.id}`)
        botonBorrar.addEventListener("click", ()=> borrarDelCarrito(prod.id))
    }
}

//CARRITO
let carrito = []
let sumarCarrito = 0

const agregarCarrito = (prodId, stock) => {
    const newItem = listaProductosConStock.find((prod) => prod.id === prodId)
    
    if(stock > 0){
        carrito.push(newItem)
        let cantidad = 1
        newItem.restarStock(cantidad)

        sumarCarrito += 1
        sumarCantidad.textContent = sumarCarrito

        render(listaProductosConStock)
        renderCarrito(carrito)
        guardarProducto(newItem)
    }
    else{
        console.log("No hay stock")
    }
}

const borrarDelCarrito = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    sumarCarrito -= 1
    sumarCantidad.textContent = sumarCarrito

    render(listaProductosConStock)
    renderCarrito(carrito)
    borrarProducto(prodId)
}


//LocalStorage

function guardarProducto(producto){
    let productos
    productos = obtenerProductos()
    productos.push(producto)
    localStorage.setItem("productos", JSON.stringify(productos))
}

function obtenerProductos(){

    if(localStorage.getItem("productos") === null){
        carrito = []
    }
    else{
        carrito = JSON.parse(localStorage.getItem("productos"))
    }
    return carrito;
}

function borrarProducto(producto){
    let productosLS;
    productosLS = obtenerProductos();
    productosLS.forEach(function(carrito, index){
        if(carrito.id === producto){
            productosLS.splice(index, 1)
        }
    })

    localStorage.setItem("productos", JSON.stringify(productosLS))
}

function leerStorage(){
    carrito = obtenerProductos()
    let long = carrito.length
    sumarCantidad.textContent = long
    sumarCarrito = parseInt(sumarCantidad.textContent)
}

leerStorage()
renderCarrito(carrito)


