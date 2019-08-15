import React from 'react'
import { useObserver } from 'mobx-react'

import { useTodoStore } from './hooks'

function TodoFilterItem ({ name }) {
  const todoStore = useTodoStore()
  
  function handleFilter () {
    todoStore.filterTodos(name)
  }

  const style = useObserver(() => ({
    color: 'blue',
    cursor: 'pointer',
    fontWeight: (todoStore.filter === name) ? 'bold' : 'normal'
  }))

  return <span style={style} onClick={handleFilter}>{name}</span>
}

export default function TodoFilter () {
  return (
    <div>
      <TodoFilterItem name="all" />{' / '}
      <TodoFilterItem name="active" />{' / '}
      <TodoFilterItem name="completed" />
    </div>
  )
}
