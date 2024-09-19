//Objetooooooooooos

console.warn ("Objetos")

const producto = {
    nombre: "Tablet", //Para declarar una variable se ocupa : en vez de = y , al final de cada variable
    precio : 300,
    disponible : true
}

console.log(producto)
console.table(producto) // Imprimir las propiedades en una tabla

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