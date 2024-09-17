//ejersicio 1 declaracion de variables

console.warn("-------------- DECLARACION CON VAR");

//a) VAR= variable lo cual puede cambiar en el proceso del programa a como sea necesario
var miNombre = 'Derek'
var misApellidos ;
var edad=20;


//Console para imprimir los datos en la consola s
console.log(miNombre, misApellidos);

//Asiganando valor a apaellidos el cual si imprime
misApellidos= "sesni";
console.log(miNombre, misApellidos);

//b) CONST 
console.warn("-------------- DECLARACION CON CONST");

const miUniversidad ="UTXJ";
const matricula=230892;


console.log("Hola, ", miNombre,"",misApellidos,"Se que estudias en la" , miUniversidad , "Y tu matricula es",matricula, "Y tu edad es:",edad);


//Paara saber el tipo de datps
console.warn("-------------- PARA SABER EL TIPO DE DATPO SE UTILIZA typeOF()");
console.log("Analizando los datos puede decir que:")

console.log("Tu nombre es:",typeof(miNombre));
console.log("Tu apellido es:",typeof(misApellidos));
console.log("Tu edad es:",typeof(edad));
console.log("Tu universidad es:",typeof(miUniversidad));
console.log("Tu matricula es:",typeof(matricula));

//c)LET

let miFechaNacimiento ="2004-05-12";
let miColorFavorito;

console.warn("DECLARACION DE VARIABLE LOCAL USANDO: LET");
console.log ("Genial, te voy conociendo mejor nacieste el ", miFechaNacimiento,"mmmmmmmmmmm y tu color favorito es dejame pensar...");
miColorFavorito="Azul";
console.log(`Creo es el ${miColorFavorito}, le atine?`);//Se utiliza tilde inversa la cual nos permite concatenar string con algun dato 
console.log("Tu color favorito es:",typeof(miColorFavorito));
console.log("Tu fecha de nacimiento es  es:",typeof(miFechaNacimiento));