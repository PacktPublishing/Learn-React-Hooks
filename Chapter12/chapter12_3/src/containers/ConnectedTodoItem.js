import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleTodo, removeTodo } from '../actions'
import TodoItem from '../components/TodoItem'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ toggleTodo, removeTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
