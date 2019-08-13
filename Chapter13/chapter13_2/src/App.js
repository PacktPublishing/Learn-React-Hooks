import React, { useEffect } from 'react'

import { useTodoStore } from './hooks'

import Header from './Header'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

export default function App () {
  const todoStore = useTodoStore()
  useEffect(() => {
    todoStore.fetch()
  }, [ todoStore ])

  return (
    <div style={{ width: 400 }}>
      <Header />
      <AddTodo />
      <hr />
      <TodoList />
      <hr />
      <TodoFilter />
    </div>
  )
}
