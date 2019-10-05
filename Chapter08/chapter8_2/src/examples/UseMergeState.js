import React from 'react'
import { useMergeState } from 'react-hookedup'

export default function UseMergeState () {
  const { state, setState } = useMergeState({ loaded: true, counter: 0 })
  
  function handleClick () {
    setState({ counter: state.counter + 1 })
  }

  return (
    <div>
      Count: {state.counter}
      <button onClick={handleClick} disabled={!state.loaded}>+1</button>
    </div>
  )
}
