//1-MOSTRAR MENU AL USUARIO DE LA TIENDA
//2-ARMAR UNA LISTA DE PRODUCTOS, DECLARANDO VALOR Y STOCK DEL MISMO
//3-SUMAR LO COMPRADO A UN CARRITO DE COMPRAS PARA LUEGO PODER MOSTRARLE AL USUARIO, RESTAR STOCK SEGUN LO QUE VA PIDIENDO EL USUARIO
//4-CONFIRMAR COMPRA PREGUNTANDO METODO DE PAGO Y HACIENDO DESCUENTOS

function Producto(nombre, precio, stock){ //OBJETOS
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}

let productoA = new Producto("CPU", 5350, 20) //Genero objetos
let productoB = new Producto("RAM", 2330, 89)
let productoC = new Producto("MOTHER", 4780, 22)
let productoD = new Producto("SSD", 1500, 70)
let productoE = new Producto("PLACA DE VIDEO", 11700, 10)

let listaProductos = [productoA, productoB, productoC, productoD, productoE] //Armar array con los productos

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0) //Filtrar en un array los productos con stock

let listaNombres = listaProductosConStock.map((prod) => prod.nombre) //Mapear el nombre de los productos con stock a un array nuevo

let precioTotal = 0 //VALOR TOTAL DE LA COMPRA

let comprasA = 0
let comprasB = 0
let comprasC = 0
let comprasD = 0
let comprasE = 0

let descuento = 0.15 //Descuento transferencia bancaria

function calcularStock(cantidad, stockActual, precio, nombre){
    if(cantidad <= stockActual){ 
        if(stockActual==productoA.stock){//verifico cual es la variable a la que tengo que descontar
            productoA.stock -= cantidad
            comprasA += 1
        }
        else if(stockActual==productoB.stock){
            productoB.stock -= cantidad
            comprasB += 1
        }
        else if(stockActual==productoC.stock){
            productoC.stock -= cantidad
            comprasC += 1
        }
        else if(stockActual==productoD.stock){
            productoD.stock -= cantidad
            comprasD += 1
        }
        else if(stockActual==productoE.stock){
            productoE.stock -= cantidad
            comprasE += 1
        }
        precioTotal += (cantidad * precio) //Actualizo el precio total de la compra
        alert("Agregaste " + cantidad + " " + nombre + " al carrito!")
    }
    else{
        alert("No contamos con stock suficiente, actualmente tenemos " + stockActual + " unidades de este producto.")
    }
}

function metodoPago(){
    if((comprasA>0)||(comprasB>0)){ //Si el carrito no esta vacio
        let metodoPago = parseInt(prompt("Ingrese el metodo de pago que va a utilizar: \n\n1-MercadoPago\n2-Transferencia bancaria (15% de descuento) \n\nTotal a pagar: " + precioTotal))
        if(metodoPago==1){ //Finalizo compra y reseteo variables
            alert("Muchas gracias por tu compra, compraste un total de $" + precioTotal + ".")
            reset()
        }
        else if(metodoPago==2){ //Se calcula el precio total menos el 15% y reseteo variables
            alert("Beneficio por pagar mediante transferencia bancaria:\n\n Antes: $" + precioTotal + "\n Ahora: $" + (precioTotal - (precioTotal * descuento))  + "\n\nMuchas gracias por comprar en nuestra tienda!")
            reset()
        }
        else{
            alert("Opcion invalida.")
        }
    }
    else{
        alert("Tu carrito esta vacio.") //Si el carrito esta vacio no lo deja confirmar ninguna compra
    } 
}

function reset(){
    precioTotal = 0
}

alert("Bienvenido a nuestra tienda Gamer") //Dar bienvenida

let menu = parseInt(prompt("MENU: \n1-Comprar \n2-Confirmar compra \n0-Salir")) //Mostrar el menu al usuario

while(menu != 0){ //While para navegar en el menu principal
    if(menu==1){
            let producto = parseInt(prompt("Estos son nuestros productos: \n - " + listaNombres.join("\n - ") + "\n\nIngrese el producto que desea comprar con su numeracion correspondiente.\n\n0-Volver al Menu"))
        while(producto != 0){ //While para navegar sobre el menu COMPRAS            
            if(producto == 1){ //Comprar producto A
                if(productoA.stock>0){
                    let cantidadCPU = parseInt(prompt("Contamos con un stock de " + productoA.stock + " " + productoA.nombre + ", cuantas desea comprar?:"))
                    calcularStock(cantidadCPU, productoA.stock, productoA.precio, productoA.nombre)
                }
                else{
                    alert("No contamos con stock de ese producto.")
                }
            }
            else if(producto == 2){ //Comprar producto B
                if(productoB.stock>0){
                let cantidadRAM = parseInt(prompt("Contamos con un stock de " + productoB.stock + " " + productoB.nombre + ", cuantas desea comprar?:"))
                calcularStock(cantidadRAM, productoB.stock, productoB.precio, productoB.nombre)
                }
                else{
                    alert("No contamos con stock de ese producto.")
                }
            }
            else if(producto == 3){ //Comprar producto C
                if(productoC.stock>0){
                let cantidadMOTHER = parseInt(prompt("Contamos con un stock de " + productoC.stock + " " + productoC.nombre + ", cuantas desea comprar?:"))
                calcularStock(cantidadMOTHER, productoC.stock, productoC.precio, productoC.nombre)
                }
                else{
                    alert("No contamos con stock de ese producto.")
                }
            }
            else if(producto == 4){ //Comprar producto D
                if(productoD.stock>0){
                let cantidadSSD = parseInt(prompt("Contamos con un stock de " + productoD.stock + " " + productoD.nombre + ", cuantas desea comprar?:"))
                calcularStock(cantidadSSD, productoD.stock, productoD.precio, productoD.nombre)
                }
                else{
                    alert("No contamos con stock de ese producto.")
                }
            }
            else if(producto == 5){ //Comprar producto E
                if(productoE.stock>0){
                let cantidadGrafica = parseInt(prompt("Contamos con un stock de " + productoE.stock + " " + productoE.nombre + ", cuantas desea comprar?:"))
                calcularStock(cantidadGrafica, productoE.stock, productoE.precio, productoE.nombre)
                }
                else{
                    alert("No contamos con stock de ese producto.")
                }
            }
            else{ //No existe el producto
                alert("No tenemos ese producto a la venta.")
            }
            producto = parseInt(prompt("Estos son nuestros productos: \n - " + listaNombres.join("\n - ") + "\n\nIngrese el producto que desea comprar con su numeracion correspondiente.\n\n0-Volver al Menu"))
        }
    }
    else if (menu==2){ //Confirmar compra, elegir metodo de pago
        metodoPago()
    } 
    else{ //Se ingresa un valor no valido
        alert("La opcion es invalida, vuelva a seleccionar por favor.")
    }
    menu = parseInt(prompt("MENU: \n1-Comprar \n2-Confirmar comprar \n0-Salir"))
}

alert("Gracias por visitar nuestra tienda!") //Despedir al usuario
