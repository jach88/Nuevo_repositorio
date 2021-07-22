const hornearTorta = () =>{
    return new  Promise((resolve, reject) => {
        setTimeout(() =>{
            if (true){
                resolve("Torta Horneada")
            }else{
                reject("Torta Quemada")
            }
        }, 5000)
    })
}

const prepararGlaseado = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Glaseado Listo")
            //reject ("Se quemó el microondas")
        }, 4000)
    })
}

const cubrirTorta = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Torta Decorada")
            //reject ("Pidamos Rappi no mas")
        },6000)
    })
}

hornearTorta()
.then((tortaHorneada) =>{
    console.log(tortaHorneada)
    //tenemos el resultado de exito de la torta y llamo a la siguiente promesa
    return prepararGlaseado() 
})
.then((glaseadoListo) =>{
    console.log(glaseadoListo)
    return cubrirTorta()
})
.then((tortaLista) =>{
    console.log(tortaLista)
})

.catch((tortaQuemada) =>{
    console.log(tortaQuemada)
})