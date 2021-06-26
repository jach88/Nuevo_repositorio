/***
 * Ejercicios1
 * 
 * Crea una funcion (clasica o flecha )
 * que reciba 3 parametros  nombre edad y cuidad con esos parametros debe retornar una presentacion
 * ej hola yo soy juan tengo x años y vengo de x cuidad
 */

// nombre=prompt("Ingresa tu nombre")
// edad=+prompt("Ingresa tu edad")
// ciudad=prompt("Ingresa tu ciudad")

// function presenta(nombre,edad,ciudad){
//     console.log(`hola yo soy ${nombre} tengo ${edad} años y vengo de  cuidad ${ciudad}`)
// }
// console.log(presenta(nombre,edad,ciudad))

// let arreglo=["Christian","Diego","Victor"]
// let nombre=prompt("ingresa el nombre")

// function encontrar(arreglo,nombre){
//     if(nombre===arreglo[i]){
//         console.log("Se encontro el nombre "+[i])
//     }else{
//         console.log("-1")
//     }
// }

function primo(numero){
    for(let i = 2; i < numero; i++){
        if (numero % i === 0){
            return console.log("No es primo")
           
        }
    }
    return console.log("Es primo")
}
console.log(primo(4))