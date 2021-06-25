/*
Ejercicio1
todos los trajes que cuesten de que S/800

*/

// let precio =+prompt("Ingrese el precio del traje")
// let preciofinal=precio-(precio*0.15)
// let preciofinal2=precio-(precio*0.08)

// if(precio>800) {
//     console.log("El precio final es "+preciofinal)
// }else{
//     console.log("El precio final es "+preciofinal2)
// }


/*
Ejercicio2
toppings añadidos

*/

// let p_helado=5
// let p_oreo=1.50
// let p_sublime=2.5
// let p_chispitas=0.5
// let p_aguaymnanto=4
// let p_ositos=3

// let topping=+prompt("Elige tu topping favorito: \n1.Oreo \n2.Sublime \n3.Chispitas \n4.Aguaymanto \n5.Ositos")

// if(topping==1){
//     precio=p_helado+p_oreo
// } else if (topping==2){
//     precio=p_helado+p_sublime
// } else if (topping==3){
//     precio=p_helado+p_chispitas
// } else if (topping==4){
//     precio=p_helado+p_aguaymnanto
// } else if (topping==5){
//     precio=p_helado+p_ositos
// }
// console.log("El precio del helado y su topping es de "+precio)


plato=+prompt("Ingrese la cantidad de platos/ personas que necesitaras")

if(plato>300){
    preciofinal=plato*75
} else if(plato>200 && plato<300){
    preciofinal=plato*85
} else if(plato>100 && plato<200){
    preciofinal=plato*88
} else if(plato<100){
    preciofinal=plato*90
}
console.log("El precio final es de "+ preciofinal)