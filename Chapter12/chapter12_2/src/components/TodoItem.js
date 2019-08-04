import React from 'react'

export default function TodoItem ({ title, completed, id, toggleTodo, removeTodo }) {
  function handleToggle () {
    toggleTodo(id)
  }

  function handleRemove () {
    removeTodo(id)
  }

  return (
    <div style={{ width: 400, height: 25 }}>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      {title}
      <button style={{ float: 'right' }} onClick={handleRemove}>x</button>
    </div>
  )
}
