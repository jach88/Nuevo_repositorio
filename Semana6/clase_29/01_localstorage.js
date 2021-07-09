let nombre = prompt("Ingrese su nombre")

//localStorage.setItem("nombre","valor de lo que guardaremos")
localStorage.setItem("miNombre", nombre)

setTimeout(() => {
//localStorage.getItem("nombre con el que guardamos")
  let obtenido =  localStorage.getItem("miNombre")
    alert(obtenido)
}, 4000)

setTimeout(() => {
    //localStorage.getItem("nombre con el que guardamos")
      localStorage.removeItem("miNombre")
    }, 8000)


   //lo quita del local storage 
localStorage.setItem("ahorros", 5000)

let misAhorros = localStorage.getItem("ahorros")

console.log(typeof misAhorros)


//1. creamos el objeto
let objTaza ={
    precio:30,
    tamano:"mediano",
    color:"blanco",
    material:"ceramica"
}
// console.log(objTaza)


//2 lo convertimos en texto con el json
//JSON.stringify (lo que deseamos convertir a texto)
//lo convierte manteniendo su estructura JS
let objAJson = JSON.stringify(objTaza)
// console.log(objAJson)

//3. Guardamos el objeto en el local storage
localStorage.setItem("objeto",objAJson)

setTimeout(() =>{
    let JsonObtenido = localStorage.getItem("objeto")
    let jsonConvertido = JSON.parse(JsonObtenido)
    console.log(jsonConvertido)
},3000)