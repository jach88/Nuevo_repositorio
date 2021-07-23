//to do
//obtener datos
//estan en  la estructura que necesito
//convertir datos a html
//agragar al dom

import { obtenerProductos, 
         crearProducto, 
         eliminarProducto,
        obtenerProductosPorId,
        actualizarProducto } from "./productoService.js"
import { imprimirProductos } from "./Interfaz.js"


const btnCrear = document.getElementById("btnCrear")
const modalCrear = document.getElementById("modalCrear")
const bsModalCrear = new bootstrap.Modal(modalCrear)
const formCrear = document.getElementById("formCrear")

let modoActualizar = false
let productoActualizar; //guarda el id a actualizar

const getProductos = () =>{
    obtenerProductos()
    .then(productos =>{
        //console.log(productos)
        imprimirProductos(productos)
        getBotonesEliminar()
        getBotonesActualizar()
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
 
  const productoEditado ={
    prod_id:productoActualizar,  
    prod_nombre: formCrear["prod_nombre"].value,
    prod_descripcion: formCrear[`prod_descripcion`].value,
    prod_precio: formCrear[`prod_precio`].value,
    prod_stock: formCrear[`prod_stock`].value,
    prod_oferta: formCrear[`prod_oferta`].value,

  }

  try {
      if(modoActualizar === false){
          //si no estamos actualizando creamos un nuevo producto
        let rpta = await crearProducto(nuevoProducto)
        // console.log(rpta) 
        formCrear.reset() //Limpio de formulario
        bsModalCrear.hide()  //escondo el modal
        getProductos() //obtengo los productos actualizados 
      }else{
          let rpta = await actualizarProducto(productoEditado)
          formCrear.reset()
          bsModalCrear.hide()
          getProductos()
          modoActualizar = false  //como ya temrinamos de actualizar regresa a su modo original
      }
    
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
        boton.addEventListener("click", async() => {
            const id = boton.getAttribute("data-id")
            const productoObtenido = await obtenerProductosPorId(id)
            // console.log(productoObtenido)
            let {prod_nombre, prod_descripcion, prod_stock, prod_precio, prod_oferta} = productoObtenido

            formCrear.prod_nombre.value = prod_nombre
            formCrear.prod_descripcion.value = prod_descripcion
            formCrear.prod_stock.value = prod_stock  
            formCrear.prod_precio.value = prod_precio
            formCrear.prod_oferta.value = prod_oferta

            productoActualizar = id
            modoActualizar = true

            bsModalCrear.show()
        })
    })
}