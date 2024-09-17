console.warn("TIPOS DE DATOS")
////////////////////////////////////////////////////////////////////////

console.warn("UNDEFINED")

let cliente;
//Es tipo undefined ya que no tiene valor
console.log(`El cliente es ${cliente}`);
console.log(`Es un tipo de dato: ${typeof(cliente)}`);
//Al tener valor ya cambie el tipo de dato 
cliente = 1980
console.log(`El cliente es ${cliente}`);
console.log(`Es un tipo de dato: ${typeof(cliente)}`);

////////////////////////////////////////////////////////////////////////

console.warn("BOOLEAN")

//No lo se es un string por lo TANTO no es tipo booleno
let esPremium= "No lo se";
console.log(`El cliente tiene acceso premium ?  ${esPremium}`);
console.log(`Es un tipo de dato: ${typeof(esPremium)}`);

//Ya tiene valor booleano por lo tanto imprimira que es un tipo de dato booleano

esPremium = true;

console.log(`El cliente tiene acceso premium ?  ${esPremium}`);
console.log(`Es un tipo de dato: ${typeof(esPremium)}`);

if(esPremium){
    console.log("El cliente pago por usar el servicio");
}else{
    console.log("El cliente tiene plsn free");
}
 

///////////////////////////////////////////////////////

console.warn("NUMBER")

var cantidad;
const costo_producto=10.30;
let saldo_cuenta = -2500.40;
let monto_transaccion;

console.log(`Tu saldo del dia de hoy es de:  ${saldo_cuenta} Tipo de dato:   ${typeof(saldo_cuenta)}`);
console.log(`El producto que has seleccionado cuesta ${costo_producto} Tipo de dato:   ${typeof(costo_producto)}`);

cantidad=8;
console.log(`Haz elegido comprar: ${cantidad} Tipo de dato:   ${typeof(cantidad)}`);

console.log(`El monto total de la compra es de: ${costo_producto * cantidad} Tipo de dato:   ${typeof(saldo_cuenta)}`);

saldo_cuenta = saldo_cuenta - (costo_producto* cantidad)  

console.log(`Tu saldo actual es: ${saldo_cuenta} Tipo de dato:   ${typeof(saldo_cuenta)}`);

monto_transaccion=1550
console.log(`El abono de  ${monto_transaccion} , e recibido tu transaccion y tu saldo es  ${saldo_cuenta + monto_transaccion} Tipo de dato: ${typeof(saldo_cuenta)}`);

/////////////////////////////////////////////////////
console.warn("STRINGS")

const alumno = "Derek Sesni Carreño"
let producto ;

console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`)

producto="Monitor 20 \""

console.log(`El nombre del alumno es: ${producto}, que es un tipo de dato ${typeof(producto)}`)

//Manipulando los String 

console.log(`Mas adelante podremos transformar el contenido de los Strings usando funciones especificas como convertir
    a mayusculas  ${alumno} => ${alumno.toUpperCase()}`)

console.log(`o en su defecto convertir a minusculas  ${alumno} => ${alumno.toLowerCase()}`)

const numero = "30"
const numero2= 30 

console.log(typeof numero)
console.log(typeof numero2)

/////////////////////////////////////////////////////


console.warn("Big Int")

const numeroG= BigInt (9999999999999999999999999999999999999999999999999)
console.log(`El numero con funcion Big Int es:${typeof(numeroG)} `);

const numeroGd= 9999999999999999999999999999999999999999999999999
console.log(`El numero sin funcion Big Int es: ${typeof(numeroGd)} `);

const numeroGrande1 = 123456789
const numeroGrande2 = 123456789123456789
const numeroGrande3 = 123456789123456789123456789
const numeroGrande4 = 123456789123456789123456789123456789

console.log(`El primer experimento de un nuemro es:  ${numeroGrande1}, es tipo de dato ${typeof(numeroGrande1)}`)
console.log(`El numero: ${numeroGrande2}, es tipo de dato ${typeof(numeroGrande2)}`)
console.log(`El numero: ${numeroGrande3}, es tipo de dato ${typeof(numeroGrande3)}`)
console.log(`El numero: ${numeroGrande4}, es tipo de dato ${typeof(numeroGrande4)}`)


const numero11="10";
const numero22=10;

console.log (numero11+ Number(numeroG))

//////////////////////////////////////////////////7


console.warn("Symbol")

const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol == segundoSymbol)
console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())


////////////////////////////


console.warn("Null")
const descuento= null
console.log(typeof descuento)