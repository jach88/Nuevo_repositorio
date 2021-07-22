//Este archivo servirá para manejar las peticiones dentro de nuestra aplicacion.
const URL = "https://60f60ddf18254c00176e0104.mockapi.io/productos"    //URL DE NUESTRA API

const obtenerProductos = () =>{
    return new Promise((resolve, reject) =>{
        //codigo asyncrono
        fetch(URL)
        .then((respuesta) => {
            return respuesta.json()   //tengo la rpta con el status
        })
        .then ((productosObtenidos) =>{
            resolve(productosObtenidos)   //tengo la data en JS
        })
        .catch(error => reject(error))   //en caso de error
    })
}

export{
    obtenerProductos
}

