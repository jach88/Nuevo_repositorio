import { useState } from 'react'
import Footer from './components/Footer'
import ListaTareas from './components/ListaTareas'

export default function App() {
  const [tareas, setTareas] = useState(["pasear al perro"])

  const anadirTarea = () =>{
    setTareas([...tareas,"lavar la ropa"])
  }

  const miTitulo = "Mi app"

  return (
    <div>
      <h1>{miTitulo}</h1>     
      <ListaTareas tareas={tareas}/>
      <hr />
      <button onClick={anadirTarea}>
        Anadir Tarea
      </button>
          <Footer mensaje={"Empresa1"}/>
          <Footer mensaje={"Empresa2"}/>

    </div>
  )
}
