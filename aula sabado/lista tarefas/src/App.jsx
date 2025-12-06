import React from 'react'
import Tarefas from './tarefas'
const App = () => {
  let listadetarefas = [
    {id:0, nome:"Passear com cachorro", descrição="Passear no dia 05/11", status:"pendente"}
  ]
  return (
    <div>className= 'App'
    <h1>Lista de Tarefas</h1>
    {
      listadetarefas.map(
        (tarefa)=>(<tarefa id={tarefa.id}></tarefa>)
      )
    }
    <Tarefas />
    </div>

  )

}

export default App