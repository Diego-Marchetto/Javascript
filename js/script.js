//1-MOSTRAR MENU AL USUARIO DE LA TIENDA
//2-ARMAR UNA LISTA DE PRODUCTOS, DECLARANDO VALOR Y STOCK DEL MISMO
//3-SUMAR LO COMPRADO A UN CARRITO DE COMPRAS PARA LUEGO PODER MOSTRARLE AL USUARIO, RESTAR STOCK SEGUN LO QUE VA PIDIENDO EL USUARIO
//4-CONFIRMAR COMPRA PREGUNTANDO METODO DE PAGO Y HACIENDO DESCUENTOS

let nombreProductoA = 'CPU'
let precioProductoA = 10000
let stockProductoA = 27

let nombreProductoB = 'Monitor'
let precioProductoB = 5000
let stockProductoB = 78

let precioTotal = 0 //VALOR TOTAL DE LA COMPRA

let comprasA = 0 //Cantidad de compras del producto A
let comprasB = 0 //Cantidad de compras del producto B

let descuento = 0.15 //Descuento transferencia bancaria

function mostrarCarrito(){ //Muestra el carrito del usuario
    if((comprasA>=1)&&(comprasB==0)){ //No me gusta para nada este metodo, pero no se me ocurrio otra manera de verificar varios productos para mostrar o no dentro del ALERT.
        alert("TU CARRITO: \n\n-" + comprasA + " CPU, valor: $" + (comprasA * precioProductoA) + "\n\n VALOR TOTAL: $" + precioTotal)
    }
    else if((comprasA>=1)&&(comprasB>=1)){
        alert("TU CARRITO: \n\n-" + comprasA + " CPU, valor: $" + (comprasA * precioProductoA) + ". \n-" + comprasB + " Monitores, valor: $" + (comprasB * precioProductoB) + "\n\n VALOR TOTAL: $" + precioTotal)
    }
    else if((comprasA==0)&&(comprasB>=1)){
        alert("TU CARRITO: \n\n-" + comprasB + " Monitores, valor: $" + (comprasB * precioProductoB) + "\n\n VALOR TOTAL: $" + precioTotal)
    }
    else{
        alert("Tu carrito esta vacio.")
    }
}

function calcularStock(cantidad, stockActual, precio, nombre){
    if(cantidad <= stockActual){ 
        if(stockActual==stockProductoA){//verifico cual es la variable a la que tengo que descontar
            stockProductoA -= cantidad
            comprasA += cantidad //agregado de variable para sumar X cantidad de compras de X producto para mostrar en carrito
        }
        else if(stockActual==stockProductoB){
            stockProductoB -= cantidad
            comprasB += cantidad //agregado de variable para sumar X cantidad de compras de X producto para mostrar en carrito
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
        let metodoPago = parseInt(prompt("Ingrese el metodo de pago que va a utilizar: \n\n1-MercadoPago\n2-Transferencia bancaria (15% de descuento)"))
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
    comprasA = 0
    comprasB = 0
}

alert("Bienvenido a nuestra tienda Gamer") //Dar bienvenida

let menu = parseInt(prompt("MENU: \n1-Comprar \n2-Mostrar carrito\n3-Confirmar compra \n0-Salir")) //Mostrar el menu al usuario

while(menu != 0){ //While para navegar en el menu principal
    if(menu==1){
            let producto = parseInt(prompt("Estos son algunos de nuestros productos: \n1-CPU -STOCK: " + stockProductoA + " \n2-Monitor -STOCK: " + stockProductoB + "\n\nIngrese el producto que desea comprar con su numeracion correspondiente.\n\n0-Volver al Menu"))
        while(producto != 0){ //While para navegar sobre el menu COMPRAS            
            if(producto == 1){ //Comprar producto A
                if(stockProductoA>0){
                    let cantidadCPU = parseInt(prompt("Contamos con un stock de " + stockProductoA + " " + nombreProductoA + ", cuantas desea comprar?:"))
                    calcularStock(cantidadCPU, stockProductoA, precioProductoA, nombreProductoA)
                }
                else{
                    alert("No contamos con stock de ese producto.")
                }
            }
            else if(producto == 2){ //Comprar producto B
                if(stockProductoB>0){
                let cantidadMonitor = parseInt(prompt("Contamos con un stock de " + stockProductoB + " " + nombreProductoB + ", cuantas desea comprar?:"))
                calcularStock(cantidadMonitor, stockProductoB, precioProductoB, nombreProductoB)
                }
                else{
                    alert("No contamos con stock de ese producto.")
                }
            }
            else{ //No existe el producto
                alert("No tenemos ese producto a la venta.")
            }
            producto = parseInt(prompt("Que otro producto desea comprar?: \n1-CPU -STOCK: " + stockProductoA + " \n2-Monitor -STOCK: " + stockProductoB + "\n\nIngrese el producto que desea comprar con su numeracion correspondiente.\n\n0-Volver al Menu"))
        }
    }
    else if (menu==2){ //Si el usuario elige la opcion 2 (MENU PRINCIPAL) le muestra el carrito
        mostrarCarrito()
    }

    else if (menu==3){ //Confirmar compra, elegir metodo de pago
        metodoPago()
    } 
    else{ //Se ingresa un valor no valido
        alert("La opcion es invalida, vuelva a seleccionar por favor.")
    }
    menu = parseInt(prompt("MENU: \n1-Comprar \n2-Mostrar carrito \n3-Confirmar comprar \n0-Salir"))
}

alert("Gracias por visitar nuestra tienda!") //Despedir al usuario