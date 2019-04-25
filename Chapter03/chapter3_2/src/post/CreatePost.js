import React from 'react'

export default function CreatePost ({ user }) {
  return (
    <div>
      <div>Author: <b>{user}</b></div>
      <div>Title: <input type="text" /></div>
      <textarea />
    </div>
  )
}
