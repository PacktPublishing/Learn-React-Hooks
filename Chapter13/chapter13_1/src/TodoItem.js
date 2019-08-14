import React from 'react'
import { inject } from 'mobx-react'

export default inject('todoStore')(function TodoItem ({ title, completed, id, todoStore }) {
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
})
