import React from 'react'
import { inject, observer } from 'mobx-react'

const TodoFilterItem = inject('todoStore')(observer(function TodoFilterItemWrapped ({ name, todoStore }) {
  function handleFilter () {
    todoStore.filterTodos(name)
  }

  const style = {
    color: 'blue',
    cursor: 'pointer',
    fontWeight: (todoStore.filter === name) ? 'bold' : 'normal'
  }

  return <span style={style} onClick={handleFilter}>{name}</span>
}))

export default function TodoFilter (props) {
  return (
    <div>
      <TodoFilterItem {...props} name="all" />{' / '}
      <TodoFilterItem {...props} name="active" />{' / '}
      <TodoFilterItem {...props} name="completed" />
    </div>
  )
}
