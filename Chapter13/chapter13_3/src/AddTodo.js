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

  return useObserver(() => (
    <form onSubmit={e => { e.preventDefault(); handleAdd() }}>
      <input
        type="text"
        placeholder="enter new task..."
        style={{ width: 350, height: 15 }}
        value={inputStore.value}
        onChange={handleInput}
      />
      <input
        type="submit"
        style={{ float: 'right', marginTop: 2 }}
        disabled={inputStore.disabled}
        value="add"
      />
    </form>
  ))
}
