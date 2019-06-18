import React from 'react'
import { useBoolean } from 'react-hookedup-fork'

export default function UseBoolean () {
  const { toggle, value } = useBoolean(false)

  return (
    <div>
      <button onClick={toggle}>{value ? 'on' : 'off'}</button>
    </div>
  )
}
