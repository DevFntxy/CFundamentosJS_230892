/////////////////////////////////////7
console.warn("STRINGS")

const alumno = "Derek";
let producto = 'Sesni'


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