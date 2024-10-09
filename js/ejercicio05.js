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
    
    