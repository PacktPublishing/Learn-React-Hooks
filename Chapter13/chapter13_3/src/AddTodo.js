import React from 'react'
import { useLocalStore, useObserver } from 'mobx-react'

import { useTodoStore } from './hooks'

export default function AddTodo () {
  const todoStore = useTodoStore()
  const inputStore = useLocalStore(() => ({
    value: '',
    get disabled () {
      return !this.value
    },
    updateFromInput (e) {
      this.value = e.target.value
    },
    update (val) {
      this.value = val
    }
  }))

  function handleInput (e) {
    inputStore.updateFromInput(e)
  }

  function handleAdd () {
    if (inputStore.value) {
      todoStore.addTodo(inputStore.value)
      inputStore.update('')
    }
  }

  function handleKeyDown (e) {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return useObserver(() => (
    <div>
      <input
        type="text"
        placeholder="enter new task..."
        style={{ width: 350, height: 15 }}
        value={inputStore.value}
        onKeyDown={handleKeyDown}
        onChange={handleInput}
      />
      <button
        style={{ float: 'right', marginTop: 2 }}
        disabled={inputStore.disabled}
        onClick={handleAdd}
      >
        add
      </button>
    </div>
  ))
}
