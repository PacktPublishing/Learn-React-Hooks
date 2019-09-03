import React, { useState } from 'react'
import { usePrevious } from 'react-hookedup'

export default function UsePrevious () {
  const [ count, setCount ] = useState(0)
  const prevCount = usePrevious(count)

  function handleClick () {
    setCount(count + 1)
  }

  return (
    <div>
        Count was {prevCount} and is {count} now.
        <button onClick={handleClick}>+1</button>
    </div>
  )
}
