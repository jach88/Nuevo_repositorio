//to do
//obtener datos
//estan en  la estructura que necesito
//convertir datos a html
//agragar al dom

import { obtenerProductos } from "./productoService.js"

const getProductos = () =>{
    obtenerProductos()
    .then(productos =>{
        console.log(productos)
    })
}
getProductos()
