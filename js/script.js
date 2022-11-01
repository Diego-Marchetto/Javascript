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

let productoA = new Producto("Procesador AMD Ryzen 5 5600G 4.4GHz Turbo + Wraith Stealth Cooler", 39700, 2, "./imgs/cpu.jpg", "Procesadores", 1, 0)
let productoB = new Producto("Procesador AMD Ryzen 5 5600X 4.6GHz Turbo AM4 + Wraith Stealth Cooler", 51200, 2, "./imgs/cpu.jpg", "Procesadores", 2, 0)
let productoC = new Producto("Procesador AMD Ryzen 5 5600X 4.6GHz Turbo AM4 + Wraith Stealth Cooler", 65450, 2, "./imgs/cpu7.jpg", "Procesadores", 3, 0)
let productoD = new Producto("Procesador AMD Ryzen 7 5700X 4.6GHz Turbo AM4 - No incluye Cooler", 61500, 2, "./imgs/cpu7.jpg", "Procesadores", 4, 0) 

let productoE = new Producto("Memoria Patriot Viper DDR4 8GB 3200MHz", 10900, 5, "./imgs/ram.jpg", "Memorias RAM", 5, 0)
let productoF = new Producto("Memoria Adata DDR4 8GB 2666MHz", 7650, 5, "./imgs/ram1.jpg", "Memorias RAM", 6, 0)
let productoG = new Producto("Memoria GeiL DDR4 16GB 3000MHz RGB", 18450, 5, "./imgs/ram2.jpg", "Memorias RAM", 7, 0)
let productoH = new Producto("Memoria Team DDR4 8GB 3200MHz Vulcan Red", 9500, 5, "./imgs/ram3.jpg", "Memorias RAM", 8, 0)

let productoI = new Producto("Mother ASUS ROG STRIX B550-F GAMING AM4 PCI-E 4.0", 54150, 10, "./imgs/mother.jpg", "Motherboards", 9, 0)
let productoJ = new Producto("Mother Gigabyte GA-A320M-H AM4", 13100, 10, "./imgs/mother1.jpg", "Motherboards", 10, 0)
let productoK = new Producto("Mother Asrock B550M Steel Legend AM4", 32030, 10, "./imgs/mother2.jpg", "Motherboards", 11, 0)
let productoM = new Producto("Mother ASUS ROG X570 CROSSHAIR VIII AM4 DARK HERO", 125750, 10, "./imgs/mother3.jpg", "Motherboards", 12, 0)

let productoN = new Producto("Disco Sólido SSD Gigabyte 240GB 500MB/s", 5660, 20, "./imgs/ssd.jpg", "Almacenamiento", 13, 0)
let productoO = new Producto("Disco Solido SSD M.2 Gigabyte 500GB 5000MB/s NVMe", 20360, 20, "./imgs/ssd1.jpg", "Almacenamiento", 14, 0)
let productoP = new Producto("Disco Solido SSD Team 256GB GX2 530MB/s", 4980, 20, "./imgs/ssd2.jpg", "Almacenamiento", 15, 0)
let productoQ = new Producto("Disco Sólido SSD M.2 ADATA 256GB XPG 3500MB/s", 8050, 20, "./imgs/ssd3.jpg", "Almacenamiento", 16, 0)

let productoR = new Producto("Placa de Video ASUS GeForce GTX 1660 TI 6GB GDDR6 OC", 92450, 10, "./imgs/gpu.jpg", "Placas de Video", 17, 0)
let productoS = new Producto("Placa de Video ASUS GeForce RTX 3070 Ti 8GB GDDR6", 195000, 10, "./imgs/gpu1.jpg", "Placas de Video", 18, 0)
let productoT = new Producto("Placa de Video MSI Radeon RX 6700 XT 12GB GDDR6 MECH 2X", 119000, 10, "./imgs/gpu2.jpg", "Placas de Video", 19, 0)
let productoU = new Producto("Placa de Video XFX Radeon RX 6600 8GB GDDR6", 79500, 10, "./imgs/gpu3.jpg", "Placas de Video", 20, 0)

let productoV = new Producto("Gabinete Corsair ICUE 220T RGB Tempered Glass Black", 31150, 10, "./imgs/gab1.jpg", "Gabinetes", 21, 0)
let productoW = new Producto("Gabinete Deepcool MATREXX 55 MESH ADD-RGB 4F", 26750, 10, "./imgs/gab2.jpg", "Gabinetes", 22, 0)
let productoX = new Producto("Gabinete Cooler Master H500P Mesh ARGB", 45250, 10, "./imgs/gab3.jpg", "Gabinetes", 23, 0)
let productoY = new Producto("Gabinete Lian Li O11 Dynamic XL ROG Certify White ARGB", 76700, 10, "./imgs/gab4.jpg", "Gabinetes", 24, 0)

let productoZ = new Producto("Fuente Gamemax 800W 80 Plus Bronze VP-800", 15410, 10, "./imgs/fnt1.jpg", "Fuentes de Alimentacion", 25, 0)
let producto1 = new Producto("Fuente Aerocool Dorado 850W 80 Plus Gold ARGB", 21920, 10, "./imgs/fnt2.jpg", "Fuentes de Alimentacion", 26, 0)

let producto2 = new Producto(`Monitor Gamer ASUS 27" GAMING VG27VQ 165Hz FHD`, 112750, 10, "./imgs/mon1.jpg", "Monitores", 27, 0)
let producto3 = new Producto(`Monitor Gamer BENQ Zowie 24" XL2411K 144hz 1Ms`, 93550, 10, "./imgs/mon2.jpg", "Monitores", 28, 0)

let listaProductos = [productoS, productoR, productoV, productoT, productoU, productoP, productoZ, productoW, productoK, producto2, productoM, productoN, productoX, productoO, productoJ, productoI, producto3, productoH, producto1, productoG, productoQ, productoF, productoY, productoC, productoB, productoE, productoD, productoA]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

let carrito = []
let sumarCarrito = 0
let totalPrice = 0

//ELEMENTOS HTML
let catalogo = document.getElementById("lista")
let all = document.getElementById("all")
let menuFiltro = document.getElementById("menuFiltro")
let sumarCantidad = document.getElementById("cant")
let mostrarCarrito = document.getElementById("listaCarrito")

let botonCarrito = document.getElementById("carrito")
let x = document.getElementById("containerCarrito")
let price = document.getElementById("totalPrice")

//EVENTOS
botonCarrito.addEventListener("click", ()=> {abrirCarro()})
menuFiltro.addEventListener("change", ()=> {selectFiltro()})

//FUNCIONES

function selectFiltro(){ //Filter
    if (menuFiltro.options[menuFiltro.selectedIndex].text == "Sin filtrar"){
        render(listaProductosConStock)
    }else if(menuFiltro.options[menuFiltro.selectedIndex].text == "Combos de Actualizacion"){
        fetch('combos.json')
            .then(response => response.json())
            .then(json => renderC(json))
    }else{
        render(listaProductos.filter((prod)=>prod.categoria == (menuFiltro.options[menuFiltro.selectedIndex].text)))
    }
}

function abrirCarro(){ //Open cart
    (x.style.display == "none") ? x.style.display = "block" : x.style.display = "none"
}


function render(lista) { //Render products array
    catalogo.innerHTML = ""

    for(const prod of lista){
        let card = document.createElement("div")
        card.className = "item"
        if(prod.stock > 0){
            card.innerHTML = `<img src="${prod.img}" alt="${prod.nombre}" alt=""><h2 class="titulo">${prod.nombre}</h2><p class="priceColor">${formatter.format(prod.precio)}</p><button id="${prod.id}">SUMAR AL CARRITO</button>`
        }
        else{
            card.innerHTML = `<img src="${prod.img}" alt="${prod.nombre}" alt=""><h2 class="titulo">${prod.nombre}</h2><p class="priceColor">${formatter.format(prod.precio)}</p><button id="${prod.id}" class="nostock">SIN STOCK</button>`
        }
        catalogo.append(card)
        const boton = document.getElementById(`${prod.id}`)
        boton.addEventListener("click", ()=> agregarCarrito(prod.id, prod.stock))
        
    }
}

function renderC(lista) { //Render products Json
    catalogo.innerHTML = ""

    for(const prod of lista){
        let card = document.createElement("div")
        card.className = "item"

        card.innerHTML = `<img src="${prod.img}" alt="${prod.nombre}" alt=""><h2 class="titulo">${prod.nombre}</h2><p class="priceColor">${formatter.format(prod.precio)}</p><button id="${prod.id}" class="nostock">SIN STOCK</button>`
        catalogo.append(card)
        const boton = document.getElementById(`${prod.id}`)
    }
}

function printItem(item){ //Print item in the cart

    let carro = document.createElement("div")
    carro.className = "item"
    carro.id = `item${item.id}`

    carro.innerHTML = `<img src="${item.img}" alt="${item.nombre}" alt="">
    <h2 class="titulo">${item.nombre}</h2>
    <p class="priceColor">${formatter.format(item.precio)}</p>
    <div class="cantidad"><p>Cantidad:</p><p id="cant${item.id}">${item.cant}</p></div>
    <button id="borrar${item.id}">ELIMINAR</button>`

    mostrarCarrito.append(carro)

    const botonBorrar = document.getElementById(`borrar${item.id}`)
    botonBorrar.addEventListener("click", ()=> borrarDelCarrito(item.id))
    

}

function noClonar(noClon){ //No clon in the cart
    const existe = document.getElementById(`cant${noClon.id}`)
    existe.innerHTML = `${noClon.cant}`
}

function deleteItem(item){ //Delete item in the cart
    const deleteItem = document.getElementById(`item${item.id}`)
    mostrarCarrito.removeChild(deleteItem)
}

//CARRITO

const agregarCarrito = (prodId, stock) => { //Add item in the cart
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
                price.innerHTML = `Precio total: ${formatter.format(totalPrice)}`
                sumarCarrito += 1
                sumarCantidad.textContent = sumarCarrito
                guardarProducto(newItem)
                render(listaProductosConStock)
                selectFiltro()
                Swal.fire({
                    title: 'Procesado',
                    text: newItem.nombre + ' agregado al carrito!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                  })
            }
            
}

const agregarCarritoLS = (prodId, stock) => { //Add item in the cart after charge LS
    const newItem = listaProductosConStock.find((prod) => prod.id === prodId)
    
    if(stock > 0){
            if (newItem.cant > 0){
                newItem.restarStock(1)
                newItem.sumarCompra(1)
                noClonar(newItem)
                selectFiltro()
                render(listaProductosConStock)
            }else{
                newItem.restarStock(1)
                newItem.sumarCompra(1)
                carrito.push(newItem)
                selectFiltro()
                printItem(newItem)
                render(listaProductosConStock)
                }
            }

}

const borrarDelCarrito = (prodId) => { //Delete item in the cart

    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)

    const cantTotal = document.getElementById(`cant${prodId}`).textContent

    carrito.splice(indice, 1)

    const resta = (item.precio * cantTotal)
    totalPrice -= resta
    price.innerHTML = `Precio total: ${formatter.format(totalPrice)}`

    const cantidad = item.cant
    const producto = listaProductosConStock.find((prod) => prod.id === prodId)

    producto.restarCompra(cantTotal)
    producto.sumarStock(cantTotal)

    sumarCarrito -= cantTotal
    sumarCantidad.innerText = sumarCarrito

    borrarProducto(prodId)
    render(listaProductosConStock)
    deleteItem(item)
    selectFiltro()
}

const formatter = new Intl.NumberFormat('en-US', { //Money
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })

//LocalStorage

function guardarProducto(producto){ //Save product in LS
    let productos
    productos = obtenerProductos()

    productos.push(producto)
    localStorage.setItem("productos", JSON.stringify(productos))

}

function obtenerProductos(){ //Get products in LS
    let carritoLS
    (localStorage.getItem("productos") === null) ? carritoLS = [] : carritoLS = JSON.parse(localStorage.getItem("productos"))
    return carritoLS;
}

function borrarProducto(producto){ //Delete products in LS

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

function leerStorage(){ //Get content in LS and print cart
    const printCarro = obtenerProductos()
    let long = printCarro.length
    sumarCantidad.textContent = long
    sumarCarrito = parseInt(sumarCantidad.textContent)
    for(const prod of printCarro){
        const existe = document.getElementById(`cant${prod.id}`)
        const newItem = listaProductosConStock.find((producto) => producto.id === prod.id)
        if(existe != null){
            existe.innerHTML = `${prod.cant}`
            newItem.restarStock(1)
            newItem.sumarCompra(1)
        }else{
            agregarCarritoLS(prod.id, prod.stock)
        }
        render(listaProductosConStock)
        totalPrice += prod.precio
        price.innerHTML = `Precio total: ${formatter.format(totalPrice)}`
    }
}

price.innerHTML = `Precio total: ${formatter.format(totalPrice)}`
render(listaProductosConStock)
leerStorage()




