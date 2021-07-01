
// let nombres = ["Juan","Maria","Diana","Gaby ","Jacky","Diego","Marcos","Danny"]
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
// let peliculasBuenas = peliculas.filter((peli) =>{
//     return peli.vote_average > 5
// })
// console.table(peliculasBuenas)


// let nombres = ["Juan","Maria","Diana","Gaby ","Jacky","Diego","Marcos","Danny"]

//index of Busca un elemento en mi arreglo y si existe me retorna su posicion, en caso contrario devuelve -1


// let position = nombres.indexOf(("Diana"))

// console.log(position)

// let position = nombres.indexOf(("Paolo"))

// console.log(position)

//SPLICE 
//sirve para eliminar elementos 

// nombres.splice(6, 1)
// //console.log(nombres)

// let notas =[14,17,20,11,7,9,13,16]

// for(let i = 0; i < notas.length; i++){
//     if(notas[i] < 12){
//         notas.splice(i,1)
//     }
// }

// console.log(notas)

// let nombres = ["Juan","Maria","Diana","Gaby ","Jacky","Diego","Marcos","Danny"]

// let convertido = nombres.toString()
// console.log(convertido)

let texto = new String("Hola")
console.log(texto)

//cadenas de texto

console.log(texto.length)
console.log(texto[1])