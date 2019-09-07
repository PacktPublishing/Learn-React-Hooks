import React from 'react'
import { inject, observer } from 'mobx-react'

import TodoItem from './TodoItem'

export default inject('todoStore')(observer(function TodoList ({ todoStore }) {
  return todoStore.filteredTodos.map(item =>
    <TodoItem key={item.id} item={item} />
  )
}))
