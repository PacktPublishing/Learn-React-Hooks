import React from 'react'

export default function CreatePost ({ user }) {
  return (
    <form>
      <div>Author: <b>{user}</b></div>
      <div>Title: <input type="text" /></div>
      <textarea />
    </form>
  )
}
