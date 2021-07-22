//get para pedir cosas

//fetch("url de la api")    
fetch("https://reqres.in/api/users?page=2")
.then((respuesta) =>{
    console.log(respuesta) //informacion del response
    return respuesta.json()
})
.then((datos) => {
    console.log(datos)
})