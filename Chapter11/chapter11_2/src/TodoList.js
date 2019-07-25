import React from 'react'

import TodoItem from './TodoItem'
import StateContext from './StateContext'

export default class TodoList extends React.Component {
  static contextType = StateContext

  render () {
    const items = this.context
    return items.map(item =>
      <TodoItem {...item} {...this.props} key={item.id} />
    )
  }
}
