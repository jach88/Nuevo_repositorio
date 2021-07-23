//to do
//obtener datos
//estan en  la estructura que necesito
//convertir datos a html
//agragar al dom

import { obtenerProductos, crearProducto, eliminarProducto } from "./productoService.js"
import { imprimirProductos } from "./Interfaz.js"


const btnCrear = document.getElementById("btnCrear")
const modalCrear = document.getElementById("modalCrear")
const bsModalCrear = new bootstrap.Modal(modalCrear)
const formCrear = document.getElementById("formCrear")

const getProductos = () =>{
    obtenerProductos()
    .then(productos =>{
        //console.log(productos)
        imprimirProductos(productos)
        getBotonesEliminar()
    })
}
getProductos()

btnCrear.addEventListener("click",() => {
    bsModalCrear.show()
})

//escuchar el submit
formCrear.addEventListener("submit",async (e) =>{
  e.preventDefault()     //para evitar que no se recargue  

  const nuevoProducto ={
      prod_nombre: formCrear["prod_nombre"].value,
      prod_descripcion: formCrear[`prod_descripcion`].value,
      prod_precio: formCrear[`prod_precio`].value,
      prod_stock: formCrear[`prod_stock`].value,
      prod_oferta: formCrear[`prod_oferta`].value,
  }

  try {
    let rpta = await crearProducto(nuevoProducto)
    // console.log(rpta) 
    formCrear.reset() //Limpio de formulario
    bsModalCrear.hide()  //escondo el modal
    getProductos() //obtengo los productos actualizados 
  } catch (error) {
      console.log(error)
  }
  
})

const getBotonesEliminar = () =>{
    const btnsEliminar = document.getElementsByClassName("eliminar")
    const arrBtnsEliminar = Array.from(btnsEliminar)
    
    arrBtnsEliminar.forEach((boton)=>{
        boton.addEventListener("click",async() => {
            const id = boton.getAttribute("data-id")

            Swal.fire({
                icon:'warning',
                title:'Deseal eliminar el producto',
                showConfirmButton:true,
                confirmButtonText:'Si, eliminar',
                showCancelButton:true,
                cancelButtonText:'No, cancelar'
            }).then(async (result) => {
                if(result.isConfirmed){
                    let respuesta = await eliminarProducto(id)
                    console.log(respuesta)
                    getProductos()
                }
            })

            
        })
    })
}

const getBotonesActualizar = () =>{
    const btnsActualizar = document.getElementsByClassName("actualizar")
    const arrBtnsActualizar = Array.from(btnsActualizar)

    arrBtnsActualizar.forEach((boton)=>{
        boton.addEventListener("click", () => {
            console.log("Click actualizar!")
        })
    })
}