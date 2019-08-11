import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import TodoItem from './TodoItem'

const todosSelector = state => state.todos
const filterSelector = state => state.filter

const selectFilteredTodos = createSelector(
  todosSelector,
  filterSelector,
  (todos, filter) => {
    switch (filter) {
      case 'active':
        return todos.filter(t => t.completed === false)
      
      case 'completed':
        return todos.filter(t => t.completed === true)
      
      default:
      case 'all':
        return todos
    }
  }
)

export default function TodoList () {
  const filteredTodos = useSelector(selectFilteredTodos)

  return filteredTodos.map(item =>
    <TodoItem {...item} key={item.id} />
  )
}
