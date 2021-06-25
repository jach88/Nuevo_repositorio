let edad =18


if(edad<18){
    console.log("No, eres menor de edad")
}
else{
    console.log("Ok, eres mayor, anda vota")
}


// let edad2 =50

// if(edad2 >= 65){
//     console.log("Te toca tu pensión 65")
// }else if (edad2 ==50) {
//     console.log("Como tienes 50 años, te damos un reloj")
// }else if(edad2>=18){
//     console.log("Te toca un bono familiar")
// }else{
//     console.log("Te toca una beca")
// }

let edad2 =50

if(edad2 >= 65){
    console.log("Te toca tu pensión 65")
}else if (edad2 ==50) {
    console.log("Como tienes 50 años, te damos un reloj")
}else if(edad2>=18){
    console.log("Te toca un bono familiar")
}else if(edad2<18 && edad2 >= 0){
    console.log("Te toca un bono familiar")
}
else{
    console.log("edad invalida")
}