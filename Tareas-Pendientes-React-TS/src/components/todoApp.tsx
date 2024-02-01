import { useState } from "react"
import { ListaTareas } from "./ListaTareas"
export const TodoApp = () => {
  
  const [nuevaTarea,setTarea] = useState<string>('')
  const [listaTareas,setListaTarea] = useState<string[]>([])
  const handleAddTask = () => {
    if (nuevaTarea.trim() === '') return
    setListaTarea(tareaAnterior => [...tareaAnterior, nuevaTarea])
    setTarea('')
  }
  const handleBorrarTarea = (index:number) => {
    setListaTarea(Tareas => Tareas.filter((_, i) => i !== index))
  }
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input type="text" 
        value={nuevaTarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Nueva Tarea"/>
      </div>
      <button onClick={handleAddTask} >Agregar Tarea</button>
    <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </div>
  )
}