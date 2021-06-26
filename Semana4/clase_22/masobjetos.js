let perrete={
    nombre:"Backus",
    edad:15,
    color:"blanco",
    habitos:["escarbar","ladrar","dormir"],

    ladrar:function(){
        console.log("guau guau guau")
    }
}

perrete.ladrar()
perrete.color="blanco con gris"

console.log(perrete.color)

//entonces no solamente vamos a pdoer referenciar y cambar las propiedades de un objeto, tambien podemos agregar propiedades
perrete.tamanio = "pequeño"
console.log(perrete.tamanio)

delete perrete.edad  //Eliminar una propiedad

console.log(perrete.edad) //undefined