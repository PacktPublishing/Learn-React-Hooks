import React, { useState } from 'react'
import { useTimeout } from 'react-hookedup'

export default function UseTimeout () {
  const [ ready, setReady ] = useState(false)
  useTimeout(() => setReady(true), 10000)

  return <div>{ready ? 'ready' : 'waiting...'}</div>
}
