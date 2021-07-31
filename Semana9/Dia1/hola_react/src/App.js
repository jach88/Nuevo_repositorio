import {useState, useEffect } from 'react'
import Footer from './components/Footer'
import ListaTareas from './components/ListaTareas'
import InputTarea from './components/InputTarea'


export default function App() {
  //conts [estado, funcDelEstado] = useState(estadoInicial)
  const [tareas, setTareas] = useState(["pasear al perro"])
  const [texto, setTexto] = useState("ordenar")

  const anadirTarea = () =>{
    setTareas([...tareas, texto])
  }

  const manejarTexto = (nuevoTexto) =>{
    setTexto(nuevoTexto)
  }

  const eliminarTarea = (indice) =>{
    // console.log(indice)
    //crear arreglo temporal por spread operador
    let tareasTmp =[...tareas]
    tareasTmp.slice(indice, 1)
    //ya con el item elimninado en mi temporal
    setTareas(tareasTmp) 
  }

  const miTitulo = "Mi app"

  useEffect(()=>{
    setTexto("")
  },[tareas])  //cada vez que tarea cambia es porque se creó un elimino una tarea


  return (
    <div>
      <h1>{miTitulo}</h1>     
      <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea}/>
      <hr />
      <InputTarea 
      texto={texto}
      manejarTexto={manejarTexto}
      anadirTarea={anadirTarea}
      />
      <Footer mensaje={"Empresa1"}/>
      <Footer mensaje={"Empresa2"}/> 
    
    </div>
  )
}
