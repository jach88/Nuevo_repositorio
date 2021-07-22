const alumnos =["Jose","Fernando","Christian","Sabiel","Katherine"]

const buscarAlumno = (nombre, callback) =>{
    //esta funcion simula la busqueda de un alumno en una base de datos
    //como va a buscar en una BD, esto tambien demora
    setTimeout(() =>{
        for(let i=0; i < alumnos.length; i++){
            if(alumnos[i] === nombre){
                callback(true)
                return; //cuando hacemos un return, se corta la ejecucion
            }
        }
        callback(false)
    },1000)
}

buscarAlumno("Christian",(existe) =>{
    if(existe === true){
        console.log("El alumno esta dentro de la db")
    }else{
        console.log("alumno no encontrado")
    }
})