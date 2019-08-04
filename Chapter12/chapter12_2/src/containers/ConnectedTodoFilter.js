import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { filterTodos } from '../actions'
import TodoFilter from '../components/TodoFilter'

function mapStateToProps (state) {
  const { filter } = state
  return { filter }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ filterTodos }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)
