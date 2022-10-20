//1-DETTOSTORE - CARRITO DE COMPRAS

function Producto(nombre, precio, stock, img, categoria, id, cant){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.img = img;
    this.categoria = categoria;
    this.id = id;
    this.cant = cant;
    this.restarStock = function(cantidad){
        if(this.stock > 0){
            this.stock -= cantidad
        }
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
    this.sumarCompra = function(cantidad){
        this.cant += cantidad
    }
    this.restarCompra = function(cantidad){
        this.cant -= cantidad
    }
}

let productoA = new Producto("Ryzen 5 5600G", 5350, 2, "./imgs/cpu.jpg", "Procesadores", 1, 0)
let productoB = new Producto("Ryzen 5 5600X", 5350, 2, "./imgs/cpu.jpg", "Procesadores", 2, 0)
let productoC = new Producto("Ryzen 7 5700G", 5350, 2, "./imgs/cpu7.jpg", "Procesadores", 3, 0)
let productoD = new Producto("Ryzen 7 5700X ", 5350, 2, "./imgs/cpu7.jpg", "Procesadores", 4, 0) 

let productoE = new Producto("RAM", 2330, 5, "./imgs/ram.jpg", "Memorias RAM", 5, 0)
let productoF = new Producto("RAM", 2330, 5, "./imgs/ram.jpg", "Memorias RAM", 6, 0)
let productoG = new Producto("RAM", 2330, 5, "./imgs/ram.jpg", "Memorias RAM", 7, 0)
let productoH = new Producto("RAM", 2330, 5, "./imgs/ram.jpg", "Memorias RAM", 8, 0)

let productoI = new Producto("MOTHER", 4780, 10, "./imgs/mother.jpg", "Motherboards", 9, 0)
let productoJ = new Producto("MOTHER", 4780, 10, "./imgs/mother.jpg", "Motherboards", 10, 0)
let productoK = new Producto("MOTHER", 4780, 10, "./imgs/mother.jpg", "Motherboards", 11, 0)
let productoM = new Producto("MOTHER", 4780, 10, "./imgs/mother.jpg", "Motherboards", 12, 0)

let productoN = new Producto("SSD", 1500, 20, "./imgs/ssd.jpg", "Discos Solidos", 13, 0)
let productoO = new Producto("SSD", 1500, 20, "./imgs/ssd.jpg", "Discos Solidos", 14, 0)
let productoP = new Producto("SSD", 1500, 20, "./imgs/ssd.jpg", "Discos Solidos", 15, 0)
let productoQ = new Producto("SSD", 1500, 20, "./imgs/ssd.jpg", "Discos Solidos", 16, 0)

let productoR = new Producto("PLACA DE VIDEO", 11700, 10, "./imgs/gpu.jpg", "Placas de Video", 17, 0)
let productoS = new Producto("PLACA DE VIDEO", 11700, 10, "./imgs/gpu.jpg", "Placas de Video", 18, 0)
let productoT = new Producto("PLACA DE VIDEO", 11700, 10, "./imgs/gpu.jpg", "Placas de Video", 19, 0)
let productoU = new Producto("PLACA DE VIDEO", 11700, 10, "./imgs/gpu.jpg", "Placas de Video", 20, 0)

let listaProductos = [productoF, productoC, productoB, productoE, productoD, productoA, productoK, productoM, productoN, productoO, productoJ, productoI, productoH, productoG, productoQ, productoS, productoR, productoT, productoU, productoP] //Armar array con los productos

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0) //Filtrar en un array los productos con stock

let listaNombres = listaProductosConStock.map((prod) => prod.nombre) //Mapear el nombre de los productos con stock a un array nuevo

let carrito = []
let sumarCarrito = 0
let totalPrice = 0

//ELEMENTOS HTML
let catalogo = document.getElementById("lista")
let all = document.getElementById("all") //Borrar filtros
let menuFiltro = document.getElementById("menuFiltro")
let sumarCantidad = document.getElementById("cant") //Valor numerico del carrito
let mostrarCarrito = document.getElementById("listaCarrito")

let botonCarrito = document.getElementById("carrito") //Abrir y cerrar carrito
let x = document.getElementById("containerCarrito")
let price = document.getElementById("totalPrice")

//EVENTOS
botonCarrito.addEventListener("click", ()=> {abrirCarro()})
menuFiltro.addEventListener("change", ()=> {selectFiltro()})
/*menuFiltro.addEventListener("change", function() {
    if(menuFiltro.options[menuFiltro.selectedIndex].text == "Sin filtrar")
    {
        render(listaProductosConStock)
    }else{
        render(listaProductos.filter((prod)=>prod.categoria == (menuFiltro.options[menuFiltro.selectedIndex].text)))
    }   
});*/


//FUNCIONES
function selectFiltro(){
    if(menuFiltro.options[menuFiltro.selectedIndex].text == "Sin filtrar")
    {
        render(listaProductosConStock)
    }else{
        render(listaProductos.filter((prod)=>prod.categoria == (menuFiltro.options[menuFiltro.selectedIndex].text)))
    }   
}

function abrirCarro(){
    if(x.style.display == "none"){
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


function printItem(item){

    let carro = document.createElement("div")
    carro.className = "item"
    carro.id = `item${item.id}`

    carro.innerHTML = `<img src="${item.img}" alt="${item.nombre}" alt="">
    <h2 class="titulo">${item.nombre}</h2>
    <p>Precio: $${item.precio}</p>
    <div class="cantidad"><p>Cantidad: </p><p id="cant${item.id}">${item.cant}</p></div>
    <button id="borrar${item.id}">ELIMINAR</button>`

    mostrarCarrito.append(carro)

    const botonBorrar = document.getElementById(`borrar${item.id}`)
    botonBorrar.addEventListener("click", ()=> borrarDelCarrito(item.id))
    

}

function noClonar(noClon){
    const existe = document.getElementById(`cant${noClon.id}`)
    existe.innerHTML = `${noClon.cant}`
}

function deleteItem(item){
    const deleteItem = document.getElementById(`item${item.id}`)
    mostrarCarrito.removeChild(deleteItem)
}

//CARRITO

const agregarCarrito = (prodId, stock) => {
    const newItem = listaProductosConStock.find((prod) => prod.id === prodId)

        if(stock > 0){
            if (newItem.cant > 0){
                newItem.restarStock(1)
                newItem.sumarCompra(1)
                noClonar(newItem)
            }else{
                newItem.restarStock(1)
                newItem.sumarCompra(1)
                carrito.push(newItem)
                printItem(newItem)
                }
                totalPrice += newItem.precio
                price.innerHTML = `Precio total: $${totalPrice}`
            }
            sumarCarrito += 1
            sumarCantidad.textContent = sumarCarrito
            render(listaProductosConStock)
            guardarProducto(newItem, newItem.nombre)
            selectFiltro()
}

const agregarCarritoLS = (prodId, stock) => {
    const newItem = listaProductosConStock.find((prod) => prod.id === prodId)
    
    if(stock > 0){
            if (newItem.cant > 0){
                noClonar(newItem)
                selectFiltro()
                render(listaProductosConStock)
            }else{
                carrito.push(newItem)
                selectFiltro()
                printItem(newItem)
                render(listaProductosConStock)
                }
            }

}

const borrarDelCarrito = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)

    const cantTotal = document.getElementById(`cant${prodId}`).textContent

    carrito.splice(indice, 1)

    const resta = (item.precio * cantTotal)
    totalPrice -= resta
    price.innerHTML = `Precio total: $${totalPrice}`

    const cantidad = item.cant
    const producto = listaProductosConStock.find((prod) => prod.id === prodId)

    producto.restarCompra(cantidad)
    producto.sumarStock(cantidad)

    sumarCarrito -= cantTotal
    sumarCantidad.innerText = sumarCarrito

    borrarProducto(prodId)
    render(listaProductosConStock)
    deleteItem(item)
    selectFiltro()
}

//LocalStorage

function guardarProducto(producto){
    let productos
    productos = obtenerProductos()

    productos.push(producto)
    localStorage.setItem("productos", JSON.stringify(productos))

}

function obtenerProductos(){
    let carritoLS
    if(localStorage.getItem("productos") === null){
        carritoLS = []
    }
    else{
        carritoLS = JSON.parse(localStorage.getItem("productos"))
    }
    return carritoLS;
}

function borrarProducto(producto){

    let productosLS;
    productosLS = obtenerProductos();
    productosLS.forEach(function(carritoLS, index){
        if(carritoLS.id === producto){
            const existe = document.getElementById(`cant${producto}`).textContent
            productosLS.splice(index, existe)
        }
    })

    localStorage.setItem("productos", JSON.stringify(productosLS))
}

function leerStorage(){
    const printCarro = obtenerProductos()
    carrito = obtenerProductos()
    let long = printCarro.length
    sumarCantidad.textContent = long
    sumarCarrito = parseInt(sumarCantidad.textContent)
    for(const prod of printCarro){
        const existe = document.getElementById(`cant${prod.id}`)
        const newItem = listaProductosConStock.find((producto) => producto.id === prod.id)
        if(existe != null){
            existe.innerHTML = `${prod.cant}`
        }else{
            agregarCarritoLS(prod.id, prod.stock)
        }
        newItem.sumarCompra(1)
        newItem.restarStock(1)
        render(listaProductosConStock)
        totalPrice += prod.precio
        price.innerHTML = `Precio total: $${totalPrice}`
    }

}

price.innerHTML = `Precio total: $${totalPrice}`
render(listaProductosConStock)
leerStorage()


