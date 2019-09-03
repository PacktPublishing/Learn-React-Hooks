import React from 'react'
import { useCounter } from 'react-hookedup'

export default function UseCounter () {
  const { value, increase, decrease } = useCounter(0, { upperLimit: 3, lowerLimit: 0, loop: true })

  return (
    <div>
        <b>{value}</b>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </div>
  )
}
