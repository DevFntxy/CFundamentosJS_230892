const bg = "linear-gradient(11deg, rgba(0,199,36,1) 0%, rgba(129,255,26,1) 33%, rgba(191,255,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//estilo para la salida de mensaje
console.warn("Práctica 07: Arreglos en Java Script")


console.log("%c1.- Condicionales - Si/Entonces ... (IF)", style_console);
//Le indica al programa que hacer o que no en vase a una prueba lógica de verdadero  o falso
let fechaActual= new Date();
//let fechaActual = new Date("2025/06/05");
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

// y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year: 'numeric',
        month:'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });

    console.log(`en formato local (México): ${fechaLocalMX}`);
    // Si es antes de las doce saluda con un buenos días
    if(fechaActual.getHours()<12)
    console.log(`Buenos días, hoy es: ${fechaLocalMX}`);
    // Existe un extensor de la sentencia if(Sí) que es else (en caso contrario)
    if(fechaActual.getMonth()<=6)
        console.log(`Estas en la primera mitad del año.`);
    else
        console.log(`Estas en la segunda mitad del año.`);
    
    //Que pasa si la validacion tiene varias operaciones

    const anio = fechaActual.getFullYear();

    let inicioPrimavera = new Date(anio,2,21);
    let inicioVerano = new Date(anio,5,21);
    let inicioOtonio = new Date(anio,8,23)
    let inicioInvierno = new Date(anio, 11,21);
    let esatacion;
    let horarioVerano = false;


    if(fechaActual >= inicioPrimavera && fechaActual < inicioVerano){
        console.log("Estamos en primavera...")
        console.log("Inicia la floracion de muchas plantas...")
        console.log("Los dias son mas largos y las noches mas cortas...")
        console.log("Muchos animales despiertan de la hibernacion...")

        esatacion="Primavera"
        horarioVerano=true;
    }
    else if (fechaActual >= inicioVerano && fechaActual<inicioOtonio){
        console.log("Estamos en Verano")
        console.log("En esta temporada los abunda los dias solados y calurosos...")
        console.log("En esta temporada el indece del turismo vacacional sube...")
        console.log("Mucha gente desa realizar actividades al aire")

        esatacion="Verano"
        horarioVerano=true
    }

    else if (fechaActual>= inicioOtonio && fechaActual < inicioInvierno){
      console.log("Estamos en OTOÑO...")
      console.log("Hay follaje")
      console.log("Se registran temperaturas mas templadas")
      console.log("Los animales comienza con la recoleccion de alimento y preparan sus espacion para la hibernacion, incluso algunas avaes migran")
        esatacion ="Otoño"
        horarioVerano= true
    }
    else{
        console.log("Estamos en INVIERNO ")
        console.log("En esta temporada los dias son mas cortos y las noches mas largas...")
        console.log("En algunas regiones suele nevar ... ")
        console.log("Bajo las bajas temperaturas muchas personas suelen tener resfriado")

            esatacion="Invierno"
            horarioVerano=false;
    }

    console.log("%c2.- Operador Ternario ( validacion?cumple:no_cumple) ", style_console);
    // En Java Script exista una operación simplicada que valida si una condición se cumple o no, y que hacer en cada caso
    
    const edadPersona = 18;
    const mayoriaEdadMX = 18;
    const mayoriaEdadUS = 21;
    
    let evaluarMayoriaEdad = (edad) =>
        edad>=18 ? "Eres mayor de edad.": "No eres mayor de edad."
    
    console.log("Evaluando la mayoría de edad de una persona...")
    console.log(evaluarMayoriaEdad(edadPersona));
    
    // Sin embargo tenemos que considerar que la mayoría de edad varia en cada país por cuestiones legales, por lo que debemos considerar un segundo parámmetro en la evalación.
    
    evaluarMayoriaEdad = (edad,pais) =>
        (edad>=18 && pais==="MX")?`En ${pais} eres mayor de edad `:`En ${pais} NO eres mayor de edad `;
    
    console.log("Evaluando la mayoría de edad de una persona en México...")
    console.log(evaluarMayoriaEdad(edadPersona, "MX"));
    
    console.log("Evaluando la mayoría de edad de una persona en Estados Unidos...")
    console.log(evaluarMayoriaEdad(edadPersona, "USA"));


    console.log("%c3.- SwITCH - CASE ( Elección por valor definido) ", style_console);

    // Calculando tu generación en base a tu edad
    anioNacimiento=2000;
    let asingaGeneracion = (anioNacimiento)=>{
        switch(true)
        {
            case(anioNacimiento<1968): 
                return "Baby Boomers";
    
            case (anioNacimiento>1968 && anioNacimiento<=1980): 
                return "Generación X";
    
            case (anioNacimiento>1980 && anioNacimiento<=1994):
                return "Milenials";
            
            case (anioNacimiento>1994 && anioNacimiento<=2010):
                return "Centenials";

            case (anioNacimiento>2010):
                return "Krystal";
        }
    }

    console.log(`Dado que nació en el año 1997 soy de la generación: ${asingaGeneracion(2004)}`);
    
    console.log("%c4.-Manejo de exepciones (TRY / CATCH)", style_console);
    //En algunas ocasiones existuran errores que no son culpa del programa, si no del usuario, la red, el so o inclusp de un midlleware, pero que si duda debemos 
    //controlar ára evitar las fallas de ejecucion

    try{
        let result = 0/10; // Dividir 0 entre un entero
        console.log("result");

    }catch(error){
        console.log ("Ocurrio un error: " + error.message);
    }
    // 
    try{
        let result = 0/10; // Dividir 0 entre un entero
        console.log("result");

    }catch(error){
        console.log ("Ocurrio un error: " + error.message);
    }
    //

    try{
        let result = 10/0; // Dividir 0 entre un entero
        console.log("result");

    }catch(error){
        console.log ("Ocurrio un error: " + error.message);
    }
    //
    console.log("Intentamos dividir : la variable a / 10 , el resultyado es:")
    try{
        let result = a/10; // Dividir 0 entre un entero
        console.log("result");

    }catch(error){
        console.log ("Ocurrio un error: " + error.message);
    }

    console.log("Intentamos dividir dos variables definidas  (x/y): ")

    try{
        let x =8, y=2 , result = x/y;
        console.log(result)
    }catch{
        console.log("Ocurrio un error"+ error.message)
    }

console.log("%c5.-Control de ciclos (BREAK/CONTINUE))", style_console);
//En algunas ocaciones sera umpirtante dertener un ciclo de manera abrupta para controloe casos especiales en un ciclo

    console.log("Vamos a contar del 1 al 10...")
        
        for(let numero= 1; numero<=10 ;  numero++){
         console.log(numero)
     }

    console.log("Ahora necesitamos que si llegas all 7 pares de contar... suponiendo que solo por hoy es de mala suerte")

     for(let numero= 1; numero<=10 ;  numero++){
    
         if(numero==7){
             break
          }else{
            console.log(numero)
         }
     }

    console.log("Ahora que si llegamos a 7 no lo cuente con CONTINUE")

    for(let numero= 1; numero<=10 ;  numero++){
    
        if(numero==7){
            continue
         }
         console.log(numero)
    }

console.log("%c6.-Ciclo iterativo - (For)", style_console);
//recorre de manera interativa(i) de incremental o decremental

console.log("Los dias de la semana en orden desendiente son")
let dias =["Domingo", "Lunes", "Martes", "Miercoles", "Jueves","Viernes", "Sabado"]

for ( let i=0; i <dias.length; i++){
    console.log(dias[i])
}

console.log("Los dias de la semana en orden desendiente son")
let meses =["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio", "Agosto", "Septiembe", "Octubre", "Noviembre", "Diciembre"]

for ( let i=meses.length -1; i >=0; i--){
    console.log(meses[i])
}

console.log("%c7.-Ciclos condicionales  - (While)", style_console);

    let= finDeSemana = false;
    let= mensaje = "";
    let recorrer = 0;

    while(recorrer<dias.length){
        switch(recorrer){
            case 0 : 
                finDeSemana = true;
                mensaje ="Momingooooooo.. ZZZzzzzzzzzzzzzZZ"
                break;
            case 1 :
                finDeSemana = false ;
                mensaje="San lunas a cambiar... "
                break;
            case 2 :
                finDeSemana = false;
                mensaje = "Segundo dias a darle"
                break;
            case 3 :
                finDeSemana = false;
                mensaje="Ombligo de semana"
                break;
            case 4 :
                finDeSemana = false;
                mensaje="Juebebeees"
                break;
            case 5 :
                finDeSemana = false;
                mensaje = "Viernesssssss"
                break
            case 6 :
                finDeSemana = false;
                mensaje = "Sabadrinkkkkk"
                break;
    }    

    if(!finDeSemana){
        console.log(`Dia ${dias[recorrer]}`)
        console.log(`Mensaje del dia${mensaje}`)
    }
    recorrer++
}

console.log("%c8.-Ciclos condicionales, que se ejecuta al menos una vez - (DO WHILE)", style_console);
    let episodios = [
        "Episodio 1: Pánico en la fiesta de pijamas",
        "Episodio 2: Problemas en el espacio Bultos",
        "Episodio 3: Prisioneros del amor",
        "Episodio 4: Tronquitos",
        "Episodio 5: El Enquiridión"
    ]

    let indice =0 ;
    let continuarViendo = true;

    do{
        console.log(`Reproduciendo ${episodios[indice]}`);

        //Simulamos la repoduccion del  episodio
        indice++;
        
        //Simulamos una pregunta al usuario si deas seguir viendo
        if(indice<episodios.length){
            continuarViendo = confirm ("¿Deseaconrinuar viendo?");
        }else{
            continuarViendo = false;//cuando se acaba la lista de episodias
        }
    }while(continuarViendo && indice <episodios.length);

    console.log("Fin de la reproduccio.");

    console.log("%c9.-Ciclos para recorrer elementos finitos(FOR....OF)", style_console);
    //Objeto para recorrer objetos iterables como mapas, arreglos, cadenas y conjuntos de datos

    let seriesTendencia = [
        {nombre: "Hora de Aventura", temporadas:7 , totalViewers: "2.1M", totalReproducciones:"30M"},
        {nombre: "Stranger Things", temporadas:4, totalViewers:"3.0M", totalReproducciones:"23M"},
        {nombre: "Un show Mas", temporadas:5, totalViewers:"2.0M",totalReproducciones:"21M"},
        {nombre: "Avengers",temporadas:6,totalViewers:"32M",totalReproducciones:"60M"}

    ];

    for(let serie of seriesTendencia){
        console.log(`Serie : ${serie.nombre},Temporadas :  ${serie.temporadas} , Total de espectadores ${serie.totalViewers}, Total Vistas ${serie.totalReproducciones},`);
    }
 
    /*
    try{
        console.log(`La ultima serie leida fue ${serie.nombre}`)
    }catch{
        console.log("Mensaje de error"+ error.mensaje)
    } */

 console.log("%c10.-Ciclos para recorrer elementos finitos(FOR....IN)", style_console);
    
    for(let i in seriesTendencia){
        console.log(`Serie${parseInt(i)+ 1}:`);
        for(let propiedad in seriesTendencia[i]){
            console.log(`${propiedad}: ${seriesTendencia[i][propiedad]}`);
        }
        console.log('--------------------')
    }

console.log("%c10.-Ciclos inintirrumpidos para cada uno de los elementos del arrglo (FOR EACH)", style_console);
    let seriesTendencia2 =[
        {nombre: "Hora de Aventura", temporadas:7 , Viewers: "222", reproducciones:"31221"},
        {nombre: "Stranger Things", temporadas:4, viewers:"333", reproducciones:"232121"},
        {nombre: "Un show Mas", temporadas:5, Viewers:"2443",reproducciones:"21212"},
        {nombre: "Avengers",temporadas:6,Viewers:"32433",reproducciones:"6021"}
    ];

    seriesTendencia2.forEach((serie,index)=>{
        let calif =(serie.reproducciones / serie.Viewers).toFixed(2);
        console.log(`Serie ${index + 1}`);
        console.log(`Nombre ${serie.nombre}`);
        console.log(`Temporadas ${serie.temporadas}`);
        console.log(`Viewers ${serie.viewers}`);
        console.log(`Reproducciones ${serie.reproducciones}`);
        console.log(`Calificacion ${calif}`);
        console.log('-------------------------------')

    });

    //Usando Filter para filtrar, y map para transdormar la indormacion
    //Listas de series deseadas

    let seriesDeseadas = ["Hora de Aventura","Un show Mas","Avengers"];

    //Usando map e includes ára filtar y obtener los nombres de series con 3 temporadas

    let seriesConTresTemporadas = seriesTendencia2.filter(serie => serie.temporadas <=3) .map(serie => serie.nombre) .filter (nombre => seriesDeseadas.includes(nombre));

    //Mostrar los resultados
    console.log("Series con 3 temporadas que estan en la lista deseada: ");
    console.log(seriesConTresTemporadas);