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

const eliminarProducto = async (id) =>{
    const configuracion = {
        method:'DELETE'
    }
    try {
        const respuesta = await fetch(`${URL}/${id}`, configuracion)
        return "Eliminado"
    } catch (error) {
        throw error
    }
}

const obtenerProductosPorId = async (id) =>{
    try {
        const respuesta = await fetch(`${URL}/${id}`)
        const producto = await respuesta.json()
        return producto
    } catch (error) {
        throw error
    }
}

const actualizarProducto = async (objProducto) => {
    const configuracion = {
        method:'PUT',
        body:JSON.stringify(objProducto),
        headers:{'Content-Type':'application/json' }
    }
    try {
        const respuesta = await fetch(`${URL}/${objProducto.prod_id}`, configuracion)
        const productoActualizado = await respuesta.json()
        return productoActualizado
    } catch (error) {
        throw error
    }
}


export{
    obtenerProductos,
    crearProducto,
    eliminarProducto,
    obtenerProductosPorId,
    actualizarProducto
}

