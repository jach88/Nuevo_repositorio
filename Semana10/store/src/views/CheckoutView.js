import {useState, useContext} from 'react'
import { CarritoContext } from '../context/carritoContext'

export default function CheckoutView() {

    const { carrito } = useContext(CarritoContext)

    return (
        <div className="container mt-4"> 
            <h1>Verificar Compra</h1>
            <p>Por favor verifique los productos e indique los datos solicitados</p>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h4>Productos en CarritoView</h4>
                    <ul className="list-group">
                        {carrito.map((prod,i)=>(
                            <li
                                className="list-group-item d-flex justify-content-between"
                                key={i}    
                            >
                                <div>
                                    <span className=""></span>
                                </div>

                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}
