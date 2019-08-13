import React from 'react'
import { useObserver } from 'mobx-react'

import { useTodoStore } from './hooks'

import TodoItem from './TodoItem'

export default function TodoList () {
  const todoStore = useTodoStore()

  return useObserver(() =>
    todoStore.filteredTodos.map(item =>
      <TodoItem {...item} key={item.id} />
    )
  )
}
