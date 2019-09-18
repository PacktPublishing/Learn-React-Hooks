import React, { useState } from 'react'

export default function AddTodo ({ addTodo }) {
  const [ input, setInput ] = useState('')

  function handleInput (e) {
    setInput(e.target.value)
  }

  function handleAdd () {
    if (input) {
      addTodo(input)
      setInput('')
    }
  }

  return (
    <form onSubmit={e => { e.preventDefault(); handleAdd() }}>
      <input
        type="text"
        placeholder="enter new task..."
        style={{ width: 350, height: 15 }}
        value={input}
        onChange={handleInput}
      />
      <input
        type="submit"
        style={{ float: 'right', marginTop: 2 }}
        disabled={!input}
        value="add"
      />
    </form>
  )
}
