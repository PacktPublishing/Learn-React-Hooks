import React from 'react'
import { useObserver } from 'mobx-react'

import { useTodoStore } from './hooks'

export default function TodoItem ({ item }) {
  const todoStore = useTodoStore()
  
  function handleToggle () {
    todoStore.toggleTodo(item.id)
  }

  function handleRemove () {
    todoStore.removeTodo(item.id)
  }

  return useObserver(() => {
    const { title, completed } = item
    return (
      <div style={{ width: 400, height: 25 }}>
        <input type="checkbox" checked={completed} onChange={handleToggle} />
        {title}
        <button style={{ float: 'right' }} onClick={handleRemove}>x</button>
      </div>
    )
  })
}
