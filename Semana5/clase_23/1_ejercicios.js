// for(let i=0; i < peliculas.length;i++){
//     if(peliculas[i].vote_average >5 ){
//     console.log(`Esta pelicula debe ser buena ${peliculas[i].title}`)
//     }
// }


//funcion que me retorne las peliculas por idoma

// let peliculasPorIdioma=(idioma) =>{
//     for(let peli of peliculas){
//         console.log(`Esta pelicula debe ser buena ${peliculas[i].title}`)
//     }
// }


// let peliculasPorIdioma =(idioma) =>{
//     let peliculasSeleccionadas=[]

//     for(let peli of peliculas){
//         if(peli.original_language === idioma){
//             peliculasSeleccionadas.push(peli.title)
//         }
//     }
//     return peliculasSeleccionadas;
// }

// console.table(peliculasPorIdioma("en"))



let peliculasPorGenero =(genero) =>{
    let peliculasSeleccionadas=[]

    for(let peli of peliculas){
        if(peli.genre_ids[i] === genero){
            peliculasSeleccionadas.push(peli.title)
        }

    }
    return peliculasSeleccionadas;
}
console.table(peliculasPorGenero("16"))