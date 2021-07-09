let miInput = document.getElementById("miInput")
let divContenido = document.getElementById("contenido")
//keyup
//el addEventListener escucha el evento que le indiquemos y nosotros podemos capturar ese evento en la funcion que esta como 2do parametro de addEventlistener

miInput.addEventListener("keyup", (evento) =>{
    //evento tarjet representa al propio elemento de donde se está disparando el evento
    console.log("tecla presionada",evento.key)
    console.log(evento.target.value)
    console.log("tecla presionada")
})

let boton = document.createElement("button")
boton.innerHTML = "Mostrar Valor"

boton.addEventListener("click",() => {
    //podemos obtener el valor, contenido de un input gracias a la propiedad value
    console.log(miInput.value)
})

divContenido.appendChild(boton)

let goToGoogle =document.createElement("a")
goToGoogle.setAttribute("href","http://google.com")
goToGoogle.innerHTML = "Llevame a google"
divContenido.appendChild(goToGoogle)

//se usa para detener un evento por defecto podemos utilizar el e.preventDefault, detiene el comportamiento por defecto por ejemplo de un hipervinculo hacia otra url
goToGoogle.addEventListener("click",(e) => {
    e.preventDefault()
})

let formulario = document.getElementById("formulario")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
})