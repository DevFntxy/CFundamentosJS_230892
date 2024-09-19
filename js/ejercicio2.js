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
let numeroGrande3 = 123456789123456789123456789
let numeroGrande4 = 123456789123456789123456789123456789

console.log(`El primer experimento de un nuemro es:  ${numeroGrande1}, es tipo de dato ${typeof(numeroGrande1)}`)
console.log(`El primer experimento de un nuemro es:  ${numeroGrande2}, es tipo de dato ${typeof(numeroGrande2)}`)
console.log(`El primer experimento de un nuemro es y se pierde precision:  ${numeroGrande3}, es tipo de dato ${typeof(numeroGrande3)}`)
console.log(`El primer experimento de un nuemro es y se pierde precision:  ${numeroGrande4}, es tipo de dato ${typeof(numeroGrande4)}`)

//Pra declarar el tipo de datos BigINt debemos invocar la funcionBigInt o usar la letra "n" al final del numero en la asignacion de valor

console.log("Declaramos los valores numericos gran tamaño...")
numeroGrande3= BigInt (123456789123456789123456789)
numeroGrande4= BigInt (9999999999999999999999999n)
console.log(`El Segundo experimento de un nuemro es:  ${numeroGrande3}, es tipo de dato ${typeof(numeroGrande3)}`)
console.log(`El Segundo experimento de un nuemro es:  ${numeroGrande4}, es tipo de dato ${typeof(numeroGrande4)}`)


// Hay que considerar que los tipos de datos declarados como BigInt no son operables con los de tipo Number 

let numero23 = 238;
console.log(`El resultado de la operacion de:numeroGrande4 y numero es = a: ${numeroGrande4 / BigInt(numero23)}`)

//Si intentamos realizar una operacion matematica entre estos dos tipos de datos , optendremos un error critico de operacion

//////////////////////////////////////////////////7


console.warn("Symbol")

const numero1111=2;
const numero2222= 2.0;
const numero3333= "2"
const numero4444 = "2.0"
const numero5555 = Symbol(2);
const numero6666 = Symbol(2.0);
const numero7777 = Symbol("2");
const numero8888 = Symbol("2.0");
const numero9999 = Symbol(2);


console.log(`-------------------Comparacion 1------------------`)

if(numero1111 == numero2222){
    console.log(`Se han comparado los valores de numero1111 y numero2222, confirmado que tiene el mismo valor`)
}
else{
    console.log(`Se han comparado los valores de numero1111 y numero2222, confirmado que NO tiene el mismo valor`)
}
    

console.log(`----------------------Comparacion 2 -----------------`)
if(numero1111 ==numero3333){
    console.log(`Se han comparado los valores de numero1111 y numero2222, confirmado que tiene el mismo valor`)
}
else{
    console.log(`Se han comparado los valores de numero1111 y numero2222, confirmado que NO tiene el mismo valor`)
}

console.log(`----------------------Comparacion 3 -----------------`)
if(numero1111 ===numero3333){
    console.log(`Se han comparado los valores de numero1111 y numero3333, confirmado que tiene el mismo valor`)
}
else{
    console.log(`Se han comparado los valores de numero1111 y numero3333, confirmado que NO tiene el mismo valor`)
}

console.log(`----------------------Comparacion 4 -----------------`)
if(numero1111 == numero4444){
    console.log(`Se han comparado los valores de numero1111 y numero4444, confirmado que tiene el mismo valor`)
}
else{
    console.log(`Se han comparado los valores de numero1111 y numero4444, confirmado que NO tiene el mismo valor`)
}

console.log(`----------------------Comparacion 5 -----------------`)
if(numero1111 === numero4444){
    console.log(`Se han comparado los valores de numero1111 y numero4444, confirmado que tiene el mismo valor`)
}
else{
    console.log(`Se han comparado los valores de numero1111 y numero4444, confirmado que NO tiene el mismo valor`)
}

console.log(`----------------------Comparacion 7 -----------------`)
if(numero5555 == numero7777){
    console.log(`Se han comparado los valores de numero5555 y numero7777, confirmado que tiene el mismo valor`)
}
else{
    console.log(`Se han comparado los valores de numero5555 y numero7777, confirmado que NO tiene el mismo valor`)
}

console.log(`----------------------Comparacion 8 -----------------`)
if(numero5555 == numero9999){
    console.log(`Se han comparado los valores de numero5555 y numero9999, confirmado que tiene el mismo valor`)
}
else{
    console.log(`Se han comparado los valores de numero5555 y numero9999, confirmado que NO tiene el mismo valor`)
}

console.warn("NULL")

////////////////////////////


let nombreUsuario = null;
let passUsuario = null;
let generoUsuario = null ;
let estatusRelacionSencitmental = null;
let fecha_ultimoPost; 

// Supongamos que estamos programando una Red Social, tipo Fcabbol en la que parte de la informacion se publicaara



//Supongamos que el usuario Derek Sesni con correo derek@gmail.com desea ingresar con la contraseña pass123

nombreUsuario= "derek@gmail.com"
passUsuario="pass123"

console.log(`El nousuario que ${nombreUsuario} desea logrearse con una contraseña de : ${passUsuario}`);

//Lo  que prosigue en el sistema constejara los datos ingresados con la base de datos y en caso de que los datos sean correctos comenzara la sesion
//en la plataforma actualizando los valores

//Dado que Derek es del genero Masculino y denota que su estadis de relacion no a sido capturado o lo mantiene provado esto generar la actualizacion de valores

generoUsuario="M"
estatusRelacionSencitmental= null;

console.log(`El usuario ${nombreUsuario} se ha logeado existosamente, al tener acceso a su informacion de perfil y podemos dedusir que
    su genero es: ${generoUsuario}, y su situacion sentimental es: ${estatusRelacionSencitmental} y su ultima publicacion de realizo ${fecha_ultimoPost}` )


    //Comparando null vs Undefield
    //Si bien undenfined }

    //Mismo valor diferenye dato
    console.log("Comparacion de equidad")
    console.log(
    (fecha_ultimoPost == estatusRelacionSencitmental)?
        console.log("Ambas varieables tienen el mismo valor "):
        console.log("La variable no tienen el mismo valor ")
    );

    console.log("Comparacion de identidad")
    console.log(
        (fecha_ultimoPost === estatusRelacionSencitmental)?
            console.log("Ambas varieables tienen el mismo valor y el mismo tipo de dato "):
            console.log("La variables tienen el mismo valor, pero no el mismo tipo  de dato")
    );

    console.warn("FUCTION")

    //Declaramos una funcion que nos permita recivir un parametro en este caso el nombre de la persona a salidar y le enciamos un saludo, esta funcion
    //La asigna,os a una constante

    const saludar = function (nombre) {return `Hola ${nombre} `}
    console.log(saludar('Derek Sensi'));
    console.log('El tipo de dato de la constante es ${typeoff}');
