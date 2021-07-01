//sintaxis  class <nombre_Clase>
//el nombre de la clase debe iniciar en mayusculas
//no lleva paremtesis defrente llaves
class Pokemon{
    //0. Definiremos que caracteristicas va a tener mi plantilla
    //se pone tal cual no lleva let ni var ni ;
    //no es obligatorio
    Nombre
    Tipo
    Vida
    Poder
    Agilidad
    Nivel
    //1.- constructor, toda clase tiene un constructor, el constructor es un metodo
    //El constructor de una clase es lo primero que se ejecuta y se ejecuta obligatoriamente
    constructor(nombre,tipo,vida,poder,agilidad,nivel){
        //aca adentro del constructor vamos a construir el objeto
        //this va a hacer referencia al objeto que en ese momento se está trabajando
        this.Nombre = nombre
        this.Tipo = tipo
        this.Vida = vida
        this.Poder = poder
        this.Agilidad = agilidad
        this.Nivel = nivel
        
        console.log("Construyendo...")
    }

    aparecer(){
        console.log(`Un ${this.Nombre} salvaje aparecio`)
    }
}

// cuando creamos un nuevo objeto a partir de una clase estamos instanciando o creando una instancia 
let ratonAmarillo = new Pokemon("Pikachu","Electrico",60,50,80,4)

let lechuguita = new Pokemon("Bulbasaur","vegetal",70,45,50,4)
console.log(ratonAmarillo)
console.log(lechuguita)
lechuguita.aparecer()


//funcion contructor
let personaConstructor = (nombre,edad) => {
    let objPersona ={
        Nombre:nombre,
        Edad:edad,
    }
    return objPersona
}
let alumno = personaConstructor("Carlos",25)
console.log(alumno)








