import React from 'react'

import { useTodoStore } from './hooks'

export default function TodoItem ({ title, completed, id }) {
  const todoStore = useTodoStore()
  
  function handleToggle () {
    todoStore.toggleTodo(id)
  }

  function handleRemove () {
    todoStore.removeTodo(id)
  }

  return (
    <div style={{ width: 400, height: 25 }}>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      {title}
      <button style={{ float: 'right' }} onClick={handleRemove}>x</button>
    </div>
  )
}
