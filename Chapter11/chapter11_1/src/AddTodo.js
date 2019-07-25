import React from 'react'

export default class AddTodo extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      input: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleInput (e) {
    this.setState({ input: e.target.value })
  }

  handleAdd () {
    const { input } = this.state
    const { addTodo } = this.props

    if (input) {
      addTodo(input)
      this.setState({ input: '' })
    }
  }

  handleKeyDown (e) {
    if (e.key === 'Enter') {
      this.handleAdd()
    }
  }

  render () {
    const { input } = this.state

    return (
      <div>
        <input
          type="text"
          placeholder="enter new task..."
          style={{ width: 350, height: 15 }}
          value={input}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleInput}
        />
        <button
          style={{ float: 'right', marginTop: 2 }}
          disabled={!input}
          onClick={this.handleAdd} 
        >
          add
        </button>
      </div>
    )
  }
}
