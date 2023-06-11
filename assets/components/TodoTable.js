import React,{useContext} from 'react'
import {TodoContext} from '../context/TodoContext'

function TodoTable() {

 const context = useContext(TodoContext)

  return (
    <div>TodoTable was</div>
  )
}

export default TodoTable