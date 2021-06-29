let nombres = ["Juan","Maria","Diana","Gaby ","Jacky","Diego","Marcos","Danny"]

// nombres.forEach(function(name){
//     console.log(name)
// })


// nombres.forEach(function(name,indice){   //el for_each podría recibir una variable el indice como posicion y el arreglo completo 
//     console.log(`${indice} - ${name}` )
// })



// //map
// //El map lo que hace es transformar los elementos del arrglo y los estan enviando a otra variable ya tranformados
// let numeros = [100,200,500,90,800]

// let cuenta = numeros.map((monto,indice) => {
//     return `Cuenta ${indice} - ${monto * 1.05}`;
// })
// console.log(cuenta)

//filter  filtra en base a una condicion dada
//
let peliculasBuenas = peliculas.filter((peli) =>{
    return peli.vote_average > 5
})
console.table(peliculasBuenas)
