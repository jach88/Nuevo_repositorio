let miBoton = document.getElementById("boton")
let divContenido =document.getElementById("contenido")

//element.addEventListener ("evento",funcion)
miBoton.addEventListener("click", ()=>{
    //codigo a ejecutar cuando le demos click al boton!!!
    alert("Me haz hecho click!!!!")
})

let caja = document.createElement("div")
caja.style.width = "400px"
caja.style.height = "400px"
caja.style.borderColor = "black"
caja.style.borderWidth = "2px"
caja.style.borderStyle = "solid"
caja.style.backgroundColor = "slateblue"

divContenido.appendChild(caja)

caja.addEventListener("mouseover",() =>{
    console.log("Paso por encima")  //cuando el mouse pasa por encima del elemento
})

let libros = [
    "La sombra de John Katzenbach!",
    "El tunel",
    "el vizconde de Bragelone",
    "La historia de corrupcion en el peru",
    "Fortaleza digital",
    "La sombra",
    "Madre, maximo gorki",
    "Los 12 apostoles de la economia peruana",
    "El espia del inca",
    "El hobbit",
    "el fin de los tiempos",
    "el principito",
    "Un mundo para julius",
    "Tokio blues",
    "la chica invisible",
    "blue jeans",
    "el diario de ana frank"
]

libros.forEach((book) => {
    let nuevoParrafo = document.createElement("p")
    nuevoParrafo.innerHTML = book;
    divContenido.appendChild(nuevoParrafo)

    //podemos agregar un listener directamente en el foreach
    nuevoParrafo.addEventListener("dblclick",()=>{
        alert(`Has hecho click en ${book}`)
    })
})

let input = document.createElement("input")
input.setAttribute("type", "password")
divContenido.appendChild(input)

let btnVer = document.createElement("button")
btnVer.innerHTML = "Ver Password"
divContenido.appendChild(btnVer)

let esVisible = false
btnVer.addEventListener("click", () =>{
    //! es un NOT
    esVisible = !esVisible
    if(esVisible === true){
        input.setAttribute("type","text")
    }else{
        input.setAttribute("type","password")
    }
})