import {useState, useEffect} from 'react'
import { obtenerProductos } from "../services/productoService";

export default function ListaProductosView() {
    const [productos, setProductos] = useState([])

    const getProductos = async () =>{
        try {
            const productosObtenidos = await obtenerProductos()
            console.log(productosObtenidos)
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(() => {
        getProductos()
    },[])

    return (
        <div>
            
        </div>
    )
}
