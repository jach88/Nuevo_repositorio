import axios from "axios";

const URL = `${process.env.REACT_APP_API}productos`

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

const crearProducto = async (NuevoProducto) => {
    try {
        const headers = {
            "Content-Type": "application/json"
        }
        let { data } = await axios.post(URL, NuevoProducto, { headers })
        return data
    } catch (error) {
        throw error
    }
}

export {
    obtenerProductos,
    crearProducto
}