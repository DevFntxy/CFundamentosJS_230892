// Objetos

const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables Independientes", style_console);
//Declaramos valores independientes relacionadas a un PRODUCTO
let Producto_Nombre = "Laptop\n";
let Producto_Marca = "Huawei"
let Producto_Modelo = "D16"
let Producto_Precio = 15000.50;
let Producto_Disponibilida = true;
let Producto_SKU = Symbol("535N1")
let Producto_Stock = 23;
let Producto_Imagen = null;
let Producto_Barcode;
let Producto_Categorias = ["Electrónicos", "Computación", "Bonita"];


// Accedemos a los valores de las carácterísticas del producto de manera indepentiente
console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof (Producto_Nombre)}>
    Marca:  ${Producto_Marca}, Tipo de Dato <${typeof (Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof (Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof (Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilida}, Tipo de Dato <${typeof (Producto_Disponibilidad)}>   
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof (Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof (Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof (Producto_Imagen)}>
    Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof (Producto_Categorias)}>`);

console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior");
console.log(Producto_SKU);
console.log(typeof (Producto_SKU));

// Declaramos ahora estas variables pero dentro de un objeto
console.log("%c2.- Objeto", style_console);
let Producto =
{
    ID: 12,
    Nombre: "Celular",
    Marca: "Xiaomi",
    Modelo: "12 lite",
    Precio: 3361.25,
    Disponibilidad: false,
    Stock: 2,
    SKU: "X120M1-233",
    Imagen: "../assets/products/celulares/xiaomi.png",
    Barcode: null,
    Categorias: ["Gama Media", "Bonito"]
}
// Ahora leemos el objeto completo
console.table(Producto)

console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if (Producto.Disponibilidad == 0)
    console.log(`Estatus: Agotado`)
else
    console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);


// Desestructuración de Objetos.

console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2 =
{
    ID: 22,
    Clave: 316,
    Nombre: "Celular",
    Marca: "Huawei",
    Modelo: "9 lite",
    Precio: 6829.00,
    Disponibilidad: true,
    Stock: 5,
    SKU: "HUAW31-9L1T3",
    Imagen: "../assets/products/celulares/Huawei9lite.png",
    Barcode: 888392491626,
    Categorias: [ "Bonito", "Gama-Baja", "Celular"]
}


let Comprador =
{
    ID:1222,
    Clave: 3216,
    Nombre: "Derek",
    Apellidos: "Sesni Carreño",
    Tipo: "Poco Frecuete",
    Correo: "dereksesni@gmail.com",
    PaisOrigen: "México",
    SaldoActual: 12000.00
}

let Pedido = {
    ID:33,
    Producto_Clave: 316,
    Comprador_Clave: 3216,
    Cantidad: 2,
    Estatus: "Carrito de Compra",
    TipoPago: "TarjetadeCrédito"
}

// En base  a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor

let { Precio: Producto_Precio2 } = Producto2;
let { Cantidad: Pedido_Cantidad } = Pedido;
let { SaldoActual: Cliente_SaldoActual } = Comprador;
let Costo_Compra = Producto_Precio2 * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} undidades, con un costo total de: $${Costo_Compra}`);
if (Costo_Compra < Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente.");

// Actualizar el valor de los Objetos
console.log("%c4.- Actualización de los valores de las propiedades de un Objeto", style_console);

console.log(`El objeto actualmente tiene los siguientes valores`)
console.log(JSON.stringify(Producto2, null, 2));
//console.log(Producto2);
// Convierte el objeto a una cadena para evitar problemas con la referencia
console.log(`Por cuestiones de inflación el costo del producto ha  cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)
// Para podificiar el valor de un objeto basta con igualar el nuevo valor de la proppiedad deseada
Producto2.Precio = 6915.50;
console.log(`Los nuevos valores del Prodcuto son:  `)
console.log(Producto2);

// ¿Puedo cambiar no solo el valor , sino el tipo de dato de un Objeto en JavaScript?
console.log(`------------------------------------------------------------`)
console.log(`El objeto actualmente tiene los siguientes valores`)
let tipoDisponibilidad = typeof (Producto2.Disponibilidad)
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2, null, 2));    // Disponiblidad Booleano
Producto2.Disponibilidad = "Sí";
let nuevoTipoDisponibilidad = typeof (Producto2.Disponibilidad)
console.log(Producto2);
console.log(`El nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`)

//Agregar nuevas propiedades a un objeto existente

console.log("%c5.- Agregacion de propiedades de un objeto (MUTACION) ", style_console);

console.log("Objeto antes de ser modificado")
console.table(Comprador);

// Agregando prpiedades

Comprador['Direccion']="Jardines del sur , Apizaco , Tlaxcala,Mexico"
Comprador['Tipo']="Free"
Comprador ['Estatus']="Inactivo"
Comprador['TotalCompras']= "3444"
console.log("Objeto depues de  ser modificadi")
console.table(Comprador)

//Eliminar propiedades

console.log("%c6.- Eliminacion de propiedades", style_console);
console.log("Objeto antes de eliminar propiedades");
console.table(Pedido)
//Eliminamos la propiedad tipo de pago
delete Pedido.TipoPago
console.table(Pedido)

console.log("%c7.-Metodos para controlar la mutabilidad de los Objetos, Congelacion (FREEZE)", style_console);

//Si desamos que los objetos no sean modificados ni en estructura ni en valor utilizaremos el metodo freezer

console.log('La esturctura del objeto actual COMPRADOR es:')

console.table(Comprador)
Object.freeze(Comprador);

//intentamos agregar, eliminar o modificar los valores de sus propiedades

Comprador.Nombre="No soy Derek"
delete Comprador.Apellidos;
Comprador.Direccion="No tiene direcion"
console.log("Verificamos si se realizaron cambios al comprador:")
console.table(Comprador)

console.log("%c8.-Metodos para controlar la mutabilidad de los Objetos, sellado (SEAL)", style_console);
//Si olo deseamos modificar los valores pero no esturcctura usamos SEAL

console.log("Objeto original")
console.table(Pedido)

Object.seal(Pedido)
//Intentamos modificar su estructura
Pedido['FechaPedido'] ="24/82/12"
delete Pedido.Producto_Clave;

console.log("Verificamos si se realizaron cambios al Objeto Pedido:")
console.table(Pedido)


//Intentamos modificar el valor de las propiedades

Pedido.Cantidad = 20;

console.log("Verificamos si se realizaron cambios al Objeto Pedido:")
console.table(Pedido)

//Destructuracion de 2 objetos o mas  objetos 

console.log("%c9.-Destructuracion de  2 objetos", style_console);

const {} = Producto;
let{Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo} = Comprador
let{Precio: ProductoPrecio, SKU: ProductoSKU, Marca: ProductoMarca}= Producto


if (ProductoPrecio> 2000)
    ProductoPrecio="Caro"  
else
    ProductoPrecio = "Barato"


if (clienteSaldo>0)
    clienteSaldo = "A favor"
else if (clienteSaldo < 0)
    clienteSaldo = "En contra"
else
    clienteSaldo = "Sin deuda"

let clienteNivel;

    if(clienteTipo =="Premium")
        clienteNivel=1;
    if(clienteTipo == "Fremium")
        clienteNivel =2 ;
    if(clienteNivel=="No identificado")
        clienteNivel =3;

if(clientePais == "Mexico")
    clientePais = "Nacional"
else
    clientePais="Extrangero"


let datosClientesPromociones={clienteCorreo,clientePais,clienteNivel,clienteSaldo,ProductoMarca,ProductoPrecio}

console.log("Los datos del cliente y sus habitos de compra son: ")
console.table(datosClientesPromociones)
//Operaciones sobre Objetos 

console.log("%c10.-Union de objetos", style_console);

console.log("Imprimimos la estructura y valores del objeto PRODUCTO")
console.table(Producto);

console.log("Imprimimos ña estructura y valores del objeto PEDIDO")
console.table(Pedido);



let Producto3 ={...Producto}
const Venta = Object.assign(Producto3, Pedido);
console.log("Consultamos este nuevo objeto Venta");
console.table(Venta);

// ! assign no solo permite la fusion de 2 o mas objetos, tambien muta los objetos originales, permituendo el valor el original del ID en este caso  

//Conservando propiedades que lleven el mismo nombre

 console.log("%c11.-Union de objetos (Conservando variables iguales)", style_console);

 console.table(Producto);
 
 console.table(Comprador);
 
 console.table(Pedido);

 let venta2 = {

    producto:{...Producto},
    comprador:{...Comprador},
    pedido:{...Pedido}
 }

 console.log("Fusionamos los 3 objetos de en uno nuevo, sin perdida de informacion")

 console.table(venta2)

 console.log("%c11.-Union de objetos (Conservando variables iguales)", style_console);

 //Verificar el status de mutabilidad del objeto 
 console.log("Vamos a verificar el estatus de mutabilidad del pbjeto PEDIDO")
 console.log(`Esta el objeto de Pedido Congelado? : ${Object.isFrozen(Pedido)}`)
 console.log(`Esta el objeto de Pedido Sellado? : ${Object.isFrozen(Pedido)}`)

 console.log("Vamos a verificar el estatus de mutabilidad del pbjeto COMPRADOR")
 console.log(`Esta el objeto de Pedido Congelado? : ${Object.isFrozen(Comprador)}`)
 console.log(`Esta el objeto de Pedido Sellado? : ${Object.isFrozen(Comprador)}`)

 console.log("Vamos a verificar el estatus de mutabilidad del pbjeto PRODUCTO")
 console.log(`Esta el objeto de Pedido Congelado? : ${Object.isFrozen(Producto)}`)
 console.log(`Esta el objeto de Pedido Sellado? : ${Object.isFrozen(Producto)}`)

 //Modificamos la estructura de producto , agregando una nueva propiedad
 Producto[`isLegacy`]=false;

 console.log(venta2);