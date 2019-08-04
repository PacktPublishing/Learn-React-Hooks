import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchTodos } from '../actions'
import App from '../components/App'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchTodos }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
