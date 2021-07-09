/**
 * 1. tenemos que obtener los elementos del dom
 */

let divContenido = document.getElementById("contenido")

console.log(typeof divContenido)  //es un objeto

divContenido.innerHTML = "<h1>Perú campeón</h1>"

let titulo = "AppStore"

divContenido.innerHTML =`<header>
                            <h1>
                                ${titulo}
                            </h1>
                        </header>`


//crear nodos/objetos element
let titulo2 = document.createElement("h2")

//cuando creamos elementos estos se crean en js, no tienen ni contenido ni estan colocados en el dom

//para dar contenido
titulo2.innerHTML = "Segundo titulo"

// para añadir al html
//recuerden 
//elementHTMLPadre.appendchild(elemenoHTMLHijo)
divContenido.appendChild(titulo2)

let imagen = document.createElement("img")

//element.setAttribute("nombre_atributo","valor")
imagen.setAttribute("src","https://images.unsplash.com/photo-1623228675987-57d5999f6c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80")

divContenido.prepend(imagen)

let bebidas = [
    {
        nombre:"Agua",
        suludable:true
    },
    {
        nombre:"CocaCola",
        saludable:false
    },
    {
        nombre:"Jugo de Papaya",
        saludable:true
    },
    {
        nombre:"Maltin",
        saludable:true
    },
    {
        nombre:"Cerveza",
        saludable:false
    }
]

//Vamos a convertir un arreglo de bebidas en una tabla, donde me muestre una columna el nombre y en otra columna si es saludable
//si es saludable es true que muestre 

/***
 * 1. de donde consigo los datos 
 * 1.1 los datos estan en la forma que neceisto
 * 2.Donde mostraremos esos datos
 * 2.1 crear un elemento
 * 2.2 estructurar ese elemento (añadirle atributos, o html)
 * 3. Convertir  a los datos html
 * 3.1 agregarlos
 * 4. Agregarlos a un elemento ya existente
 */

let tablita = document.createElement("table")

let headTabla =`<tr>
                    <th>Nombre</th>
                    <th>Recomendable</th>
                </tr>`

let contTabla ="";

bebidas.forEach((item)=>{
    contTabla =contTabla + 
    `<tr>
       <td>
         ${item.nombre}
       </td>
       <td style="color:${item.saludable === true ? 'green' : 'red'}">
         ${item.saludable === true ? "recomendado" : "malo"}
       </td>
    </tr>`
})

tablita.innerHTML = headTabla + contTabla
divContenido.appendChild(tablita)
