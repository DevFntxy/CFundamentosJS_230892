console.warn("TIPOS DE DATOS")
//----------------------------------------------------------------------

console.warn("UNDEFINED")

let cliente;
//Es tipo undefined ya que no tiene valor
console.log(`El cliente es ${cliente}`);
console.log(`Es un tipo de dato: ${typeof(cliente)}`);
//Al tener valor ya cambie el tipo de dato 
cliente = 1980
console.log(`El cliente es ${cliente}`);
console.log(`Es un tipo de dato: ${typeof(cliente)}`);

//------------------------------------------------------------------------

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
 

//------------------------------------------------------

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
