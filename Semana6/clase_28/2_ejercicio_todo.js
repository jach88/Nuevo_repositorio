/***
 * 1.Obtener los elementos element  del DOM y referenciarlos ✔
 * 1.1 Form y al input ✔
 * 2. Obtener el value del input y agregarlo a un arreglo
 * 3. Mostrar las tareas en el ul
 * 
 */

let formTarea = document.getElementById("formTarea")

let ulPendientes = document.getElementById("pendientes")

let arregloPendientes = []

formTarea.addEventListener("submit",(evento) =>{
    evento.preventDefault()
    // para hacer referencia a un input que este dentro de un formulario
    // nombreVariableForm["name_input"].value
    // console.log(formTarea["tarea"].value )

    let nuevaTarea = formTarea["tarea"].value
    arregloPendientes.push(nuevaTarea)
    console.log(arregloPendientes)
    // formTarea["tarea"].value = "" 
    formTarea.reset()   //aplica a todos los inputs dentro de un formulario
    dibujarPendientes()
 })

 let dibujarPendientes = () =>{
     //item hace cada tarea que tenga en mi arregloPendientes
    arregloPendientes.forEach((item) => {
        //creo un elemento <li>
        let li = document.createElement("li")
        //le agrego el texto del item
        li.innerHTML = item
        ulPendientes.appendChild(li)
    });

    // let li = document.createElement("li")
    // li.innerHTML = arregloPendientes[arregloPendientes.length - 1] //ultimo elemento
    // ulPendientes.appendChild(li)
    
 }
