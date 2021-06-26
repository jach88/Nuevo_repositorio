// function restar(num1 = 100,num2 = 20){
//     return num1 - num2
// }

// console.log(restar(10,2))

// console.log(restar())

// console.log(retar(50))


function saludar(texto="Hola!"){
    console.log(texto)
}

saludar()
saludar("Buenas tardes")

//funcines anonimas

//importante
//nosotros podemos asignar una variable a casi cualquier cosa

let division = function(num1,num2){
    return num1 / num2
}
console.log(division(1000,4)) 



// //cosa curiosa para ejecutar codigo en x tiempo

// setTimeout(function(){
//     console.log("BOMBA!")
// },3000)


//Funciones Flecha
// let despedirse = (texto) =>{
//     return `Adios,${texto}`
// }

// si es solo un argumento no necesitos parentesis en la parte que recibe argumentos si es solo uno

// let despedirse = texto =>{
//     return `Adios,${texto}`
// }

//si es algo simple no tiene varias lineas se puede reducir a una sola linea, lo que vaya despues de la flecha automaticamente se sobreentiende que se retorna

let despedirse = texto => `Adios,${texto}`


console.log(despedirse("No eres tú, soy yo"))