//como se trabaja con fechas
//El objeto Date va a obtener la fecha de sus computadoras
let ahora = new Date()

console.log(ahora)

let anioActual =ahora.getFullYear()
console.log(anioActual)

//Ojo: Para jS Enero es 0 y Diciembre es 11
let mesActual = ahora.getMonth()
console.log(mesActual)


//getDate() nos devuelve el día
let diaCalendario = ahora.getDate()
console.log(diaCalendario)

//getDAy(), me da el valor del dia de la semana en un numero contando desde el domingo como 0

let diaSemana =ahora.getDay()
console.log(diaSemana)

//creo una nueva fecha
//new Date(año, mes<11>,dia)
let diaVacuna = new Date(2021, 8, 30)
console.log(diaVacuna)

//TIMESTAMP
//get_time()
//me devuelve el timestamp (tiempo desde el 01/01/1970 a medianoche)en milisegundos

let timeStampAhora = ahora.getTime()

console.log("ahora",timeStampAhora)
let navidad = new Date(2021, 11, 25)

let diasNavidad = navidad - ahora
console.log(diasNavidad/1000/86400)