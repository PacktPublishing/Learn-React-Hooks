import React from 'react'
import { inject, observer } from 'mobx-react'

export default inject('todoStore')(observer(function TodoItem ({ item, todoStore }) {
  const { title, completed, id } = item

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
}))
