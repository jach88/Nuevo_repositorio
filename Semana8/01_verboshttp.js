const obtenerEstudiantes = () =>{
    //GET 
    fetch("https://60f60ddf18254c00176e0104.mockapi.io/estudiantes")

    .then((respuesta) => {
        console.log("respuesta")
        return  respuesta.json()
    })
    .then((datos) =>{
        console.log(datos)
    })
    .catch((error) =>{
        console.log(error)
    })
}

obtenerEstudiantes()

const crearEstudiante = () =>{
    const nuevoEstudiante ={
        nombres:"Natasha",
        apellidos:"Rommanoff",
        telefono:70979038
    }

    const cabecera ={
        method:'POST', //PUT DELETE
        Headers:{
            'Content-Type':'application/json'            
        },
        body:JSON.stringify(nuevoEstudiante)

    }

    fetch("https://60f60ddf18254c00176e0104.mockapi.io/estudiantes", cabecera)
    .then((respuesta) => {
        //info del response
        console.log(respuesta)
        return respuesta.json() //la respuesta la convierte a JS
    })
    .then((estudianteCreado) => {
        console.log(estudianteCreado)
    })
    .catch((err) => {
        console.error(err)
    })
}

//crearEstudiante()

// const actualizarEstudiante =(id) =>{
//     const estudianteModificado = {
//         nombres:"Antonio"
//     }
//     const configuracion ={
//         method:'PUT',
//         Headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(estudianteModificado)
//     }
//     fetch(`https://60f60ddf18254c00176e0104.mockapi.io/estudiantes/${id}`, configuracion)
//     .then((respuesta) => {
//         console.log
//     })
// }


//

const eliminarEstudiante = (id) => {
    cont configuracion = {
        method:"DELETE"
    }
}
