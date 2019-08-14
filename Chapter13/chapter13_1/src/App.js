import React, { useEffect } from 'react'
import { inject } from 'mobx-react'

import Header from './Header'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

export default inject('todoStore')(function App ({ todoStore }) {
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
})
