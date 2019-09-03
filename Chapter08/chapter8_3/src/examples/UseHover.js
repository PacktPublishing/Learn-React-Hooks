import React from 'react'
import { useHover } from 'react-hookedup'

export default function UseHover () {
  const { hovered, bind } = useHover()

  return (
    <div {...bind}>Hover me {hovered && 'THANKS!!!'}</div>
  )
}
