import React, { useState } from 'react'
import { useInterval } from 'react-hookedup'

export default function UseInterval () {
  const [ count, setCount ] = useState(0)
  useInterval(() => setCount(count + 1), 1000)

  return <div>{count} seconds passed</div>
}
