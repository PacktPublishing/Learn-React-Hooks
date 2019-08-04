import { connect } from 'react-redux'

import TodoList from '../components/TodoList'

function mapStateToProps (state) {
  const { filter, todos } = state
  return { filter, todos }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
