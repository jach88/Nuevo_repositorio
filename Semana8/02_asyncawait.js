const traerData = () => {
    return new Promise((resolve, reject) =>{
        resolve("Datos Obtenidos")
    })
}

const traerData = async () =>{
    //return "Datos obtenidos"  // resolve
    throw "Error al obtener Data"  //reject
}

// traerData()
// .then((rpta) => {
//     console.log(rpta)
// })

// .catch((err) =>{
//     console.error(err)
// })

//para utiliza await tengo que utilizarlo dentro de un bloque que sea async

const usarData = async () =>{
    try{
        let rpta = await traerData() //el await dice espera 
        console.log(rpta)
    } catch (error){ //si hay errores captura ese error
        console.error(err)
    }

}
usarData()


//el async y await son promesas  nos permiten escribir codigo de 