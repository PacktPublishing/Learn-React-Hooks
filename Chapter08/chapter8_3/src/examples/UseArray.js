import React from 'react'
import { useArray } from 'react-hookedup'

export default function UseArray () {
  const { value, add, clear, removeIndex } = useArray(['one', 'two', 'three'])

  return (
    <div>
        <p>current array: {JSON.stringify(value)}</p>
        <button onClick={() => add('test')}>add element</button>
        <button onClick={() => removeIndex(0)}>remove first element</button>
        <button onClick={clear}>clear elements</button>
    </div>
  )
}
