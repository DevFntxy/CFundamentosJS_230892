//Objetooooooooooos

console.warn ("Objetos")

const producto = {

    nombre: "Laptop", //Para declarar una variable se ocupa : en vez de = y , al final de cada variable
    marca : "Huawei",
    modelo : "D16",
    costoCompra : 3000.12,
    costoVenta: 3500,
    disponible : true,
    SKU: Symbol("S3SN1"),
    colores: ["Gris","Gris claro"]
}

console.log(producto)
console.table(producto) // Imprimir las propiedades en una tabla

//Accder a las propiedades de un objeto

console.warn("Leyendo las propiedades de un objeto y sus tipo de datos \n")

console.log( `Nombre del producto: ${producto.nombre} que es del tipo ${typeof(producto.nombre)}
 Marca del producto: ${producto.marcae} que es del tipo ${typeof(producto.marca)} 
  Modelo del producto: ${producto.producto} que es del tipo ${typeof(producto.producto)} 
  Costo de compra del producto: ${producto.costoCompra} que es del tipo ${typeof(producto.costoCompra)} 
  Costo de venta  del producto: ${producto.costoVenta} que es del tipo ${typeof(producto.costoVenta)} 
  Colores del producto: ${producto.colores} que es del tipo ${typeof(producto.colores)}` )



console.log(producto.nombre) //Solo imprime una propiedad

/////////////////////////////////////////////////////////////7

console.warn ("Desturction")

const { imagen } = producto; // Puedes crear una  variable 
console.log (typeof (imagen)) // Indefinidooo


const { nombre , precio , disponible} = producto; //Extrae las propiedades del objeto

console.log (nombre)
console.log (precio)
console.log (disponible)

const autenticado = true;
const usuario = "Juan"

const nuevoObjeto = {

    autenticado,
    usuario
}

console.table(nuevoObjeto)