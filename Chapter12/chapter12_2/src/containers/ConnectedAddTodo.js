import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
