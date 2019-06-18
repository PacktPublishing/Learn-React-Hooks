import React from 'react'
import { useFocus } from 'react-hookedup-fork'

export default function UseFocus () {
  const { focused, bind } = useFocus()

  return (
    <div>
      <input {...bind} value={focused ? 'focused' : 'not focused'} />
    </div>
  )
}
