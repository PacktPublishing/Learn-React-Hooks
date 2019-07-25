import React, { useContext } from 'react'

import TodoItem from './TodoItem'
import StateContext from './StateContext'

export default function TodoList (props) {
  const items = useContext(StateContext)
  
  return items.map(item =>
    <TodoItem {...item} {...props} key={item.id} />
  )
}
