import axios from "axios";

const URL = `https://6104aac04b92a000171c5ca1.mockapi.io/productos`

const obtenerProductos = async () =>{
    try {
        //axios me devuelve la respuesta el estado datos de mi peticion data contiene los datos de la respuesta
        //axios.get . post .put
        let { data } = await axios.get(URL)
        return data
    } catch (error) {
        throw error
    }
}

export {
    obtenerProductos
}