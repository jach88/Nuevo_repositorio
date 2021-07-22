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

const crearProducto =async (objProducto)=>{
    const configuracion ={
        method:'POST',
        body:JSON.stringify(objProducto),
        headers:{'Content-Type':'application/json'}
    }

    try {
        const respuesta = await fetch(URL, configuracion)
        const data = await respuesta.json()
        return data //resolve
    } catch (error) {
        throw error
    }
        
}

export{
    obtenerProductos,
    crearProducto
}

