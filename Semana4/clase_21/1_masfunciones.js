// function saludar(texto){
//     console.log(`Hola, ${texto}`)
//     //no estoy retornando nada
// }

// saludar("como estas")
// saludar("soy Christian")
// saludar("que planes tienes")



// function multiplicacion(num1,num2){
//     //nosotros cuando ponemos un return la ejecucion de mi funcion se conta como el break
//     return num1 * num2
//     console.log("Estoy depues del return")
// }
// console.log(multiplicacion(10,72))




// function esPar(numero){
//     if(numero % 2===0){
//         //verdadero
//         return true
//         console.log("es verdadero") //Esto no se ejecuta
//     }else{
//         //falso
//         return false
//     }
// }
// console.log(esPar(21))


let texto = "aqui"

function sinArgumento(){
    console.log("No tengo argumentos " + texto)
}

sinArgumento()

console.log(sinArgumento())  //sin argumento no retorna nada es undifined

/**
 * 1. no necesariamente se tiene que recibir argumentos
 * 2. No necesariamente tienen que retornar algo, puede que solamente ejecuten en bloque de codigo que tienen dentro
 * 3. para utilizarlos los llamo por su nombre y parentesis, ej esPar()
 * 4. El codigo despues del return no se ejecuta finaliza la ejecucion de mi función
 */