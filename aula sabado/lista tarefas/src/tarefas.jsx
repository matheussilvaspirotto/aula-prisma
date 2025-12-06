import React from 'react'

const Tarefas = ({nome,descricao,}) => {
  let nome = "Fazer dever de casa"
  
    return (
    <div className='Tarefa'>
        <h1 className='nome'>{nome}</h1>
        <p className='descricao'>{descricao}</p>
        <p className='status'>{status}</p>


    </div>
  )
}

export default Tarefas