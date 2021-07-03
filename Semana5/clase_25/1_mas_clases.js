let gato = {
    nombre:"Garfield",
    edad:15,
    raza: "Siames",
    color:"Marron",
    peso:1,
   mostrarInfo:function(){
       //this hace referencia al objeto donde esta metido
        console.log(this)
    }, 
    mostrarNombre:() =>{
        //this dentro de unas funcion flecha hace referencia a un objeto window
        console.log(this)
    }
}

// gato.mostrarInfo()

// gato.mostrarNombre()


class Animal{
    Nombre
    Edad
    Familia
    Tamaño
    constructor(nombre,edad,familia,tamanio){
        this.Nombre = nombre
        this.Edad = edad
        this.Familia = familia
        this.Tamaño = tamanio
    }
    correr(velocidad){
        console.log(`${this.Nombre} puede correr a ${velocidad}`)
    }
    detener(){
        console.log(`${this.Nombre} se detuvo, esta alerta`)
    }
}

let panda = new Animal("Panda",20,"Mamiferos","Muy Grande")
console.log(panda)

//con extends lo que hacemos es heredar las propiedades de una clase de mayor jerarquia
class Conejo extends Animal{
    constructor(nombre,edad,familia,tamanio,salto){
        //permite acceder al construcctor de la clase padre (animal)
        super(nombre,edad,familia,tamanio)
        //declaramos lo que no hemos heredado
        this.Salto = salto
    }
    esconder(){
        console.log(`${this.Nombre} se oculta en un agujero ${this.Tamaño} con un salto de ${this.Salto} metro`)
    }


}
let bugs = new Conejo("Bugs Bunny",5,"herviboros","Chiquito",1)
console.log(bugs)

bugs.correr(2)
bugs.esconder()