import React, { useState } from 'react'
import { useTimeout } from 'react-hookedup-fork'

export default function UseTimeout () {
  const [ ready, setReady ] = useState(false)
  useTimeout(() => setReady(true), 10000)

  return <div>{ready ? 'ready' : 'waiting...'}</div>
}
