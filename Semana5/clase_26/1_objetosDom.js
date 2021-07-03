window.console.log("Hola")

window.setTimeout(() => {
    console.log("Pum!")
},2000)

console.log(typeof window)

console.log(this)

//
window.navigator.geolocation.getCurrentPosition((infoUbicacion) => {
    console.log(infoUbicacion)
} )

console.log(`info de la url ${location}`)

console.log(`info del navegador`, navigator.userAgent)

console.log(`Ancho navegador ${innerWidth}`)

console.log(`Ancho navegador ${innerHeight}`)

console.log(typeof document)

let titulo = document.querySelector("h1")
console.log(titulo)