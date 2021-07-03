//document es un objeto que me va a permitir modificar el DOM
//el DOM es una serie de nodos (objetos) creados al momento de interpretar el HTML, cada nodo seria una etiqueta html

//document.getElementById("id_elemento")
let titulo = document.getElementById("titulo")

console.log(titulo)

//innerHTML, es una propiedad, que contiene el html dentro de un elemento
titulo.innerHTML = "<i>Nuevo Titulo de mi App</i>"

//kebab-case -> background-color
//camelCase -> backgroundColor

titulo.style.color = "rebeccapurple"
titulo.style.backgroundColor = "lime"
titulo.style.padding = "10px"

let listaItems = document.getElementsByClassName("lista_item")
console.log(listaItems)

let arregloItems = Array.from(listaItems)

console.log(arregloItems)

// arregloItems.forEach((item) => {
//     item.style.
// })

let cajitas = document.querySelectorAll(".cajita")

console.log(cajitas)

cajitas.forEach((caja)=>{
    caja.innerHTML = "Contenido Caja"
    //anñadir una clase al elemento
    caja.style.width ="200px"
    caja.style.height="200px"
    caja.classList.add("resaltado")
    caja.classList.add("redondeado")

    console.log(caja.classList)
})

let miParrafo = document.querySelector("#miParrafo")
console.log(miParrafo)

miParrafo.classList.add("resaltado")

setTimeout(()=>{
miParrafo.classList.remove("resaltado")
},4000)
// set interval se ejecuta cada x tiempo
setInterval(()=>{
    //
    miParrafo.classList.toggle("resaltado")
    console.log("pop!")
},2000) 

let divContenido = document.getElementById("contenido")

divContenido.innerHTML = "<p id='p1'>parrafo desde JS</p>" //si quiero modificarlo voy a tener que asegurarmoe que exista antes

let parrafo1 = document.getElementById("p1")
console.log("parrafo1",parrafo1)

//document.createElement("etiqueta")
//crea un obejto element (elementoHTML) de forma nativa

let parrafo2 =document.createElement("p")
parrafo2.innerHTML = "Texto parrafo 2"

//appendChild hace que un elemento se añada como hijo de otro elemento
divContenido.appendChild(parrafo2)

//1 creo el elemento
let imagen = document.createElement("img")

//2 configuro atributos de ser necesarios
//element.setAttribute("nombre_del_atributo", "valor del atributo")
imagen.setAttribute("src","http://picsum.photos/200")
imagen.setAttribute("alt","fotoooooo")

//3 lo agrego en alguna parte del dom, como hijo de otro elemento
divContenido.appendChild(imagen)

let seleccion = ["Lapadula", "Gallese","Carrillo","Cuevita","Yotun","Tapia","Flores","Ramos","Corzo"]

let lista = document.createElement("ul")

let htmlitems = "";

seleccion.forEach((jugador) => {
    htmlitems = htmlitems + `<li>${jugador}</li>`
})

// console.log(htmlitems)
lista.innerHTML = htmlitems
divContenido.appendChild(lista)
