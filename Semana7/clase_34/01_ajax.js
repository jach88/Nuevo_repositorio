let btnGet = document.getElementById("btnGet")

btnGet.addEventListener("click", () =>{
    // el cartero se encarga de hacer las peticiones
        let cartero = new XMLHttpRequest()

        // para saber la situacion o el estado del cartero
        cartero.addEventListener("readystatechange",() =>{
                //cartero.readyState, esta es la propiedad  que se dice cual es la situacion, como cuando hacemos un seguimiento y nos dice salio a destino, esta en x avion, y lo hara mediante numeros del 1 al 4
                switch(cartero.readyState){
                    case 1:
                        //rotular nuestra carta
                        console.log("OPEN",cartero.readyState)
                        break;
                    case 2:
                        //rotular nuestra carta
                        console.log("SEND",cartero.readyState)
                        break;
                    case 3:
                        //rotular nuestra carta
                        console.log("DATA",cartero.readyState)
                        break;
                    case 4:
                         //rotular nuestra carta
                        console.log("RPTA",cartero.readyState)
                        let respuesta = cartero.responseText
                        console.log(respuesta)
                        break;                  
                }
        })
        //yo rotulo mi carta, GET estoy pidiendo datos
        cartero.open("GET","https://reqres.in/api/users?page=2") //aqui pegamos el api de reqrest de ejemplo
        
        //aqui lanzamos nuestra carta al buzon
        cartero.send(null)
})