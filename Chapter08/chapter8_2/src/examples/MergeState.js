import React, { useState } from 'react'

export default function MergeState () {
  const [ state, setState ] = useState({ loaded: true, counter: 0 })
  
  function handleClick () {
    setState({ ...state, counter: state.counter + 1 })
  }

  return (
    <div>
      Count: {state.counter}
      <button onClick={handleClick} disabled={!state.loaded}>+1</button>
    </div>
  )
}
