const hornearTorta= () =>{
    //como mi torta no se como ira resolve bien reject mal
  return new Promise((resolve, reject) =>{
      //dentro de la promesa ejecutamos nuestra tarea asincrona
      //la tarea que demora
      setTimeout(() =>{
          if(true){
              resolve("La torta esta lista")
          }else{
              reject("la torta se quemo :/")
          }
      },5000)
  })
}

//para saber si fue bien - then()
hornearTorta()
.then((resultado) =>{
    console.log(resultado)   //resolve
})
.catch((error) =>{
    console.log(error)
})