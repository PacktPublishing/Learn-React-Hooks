import React from 'react'

export default function CreatePost ({ user }) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div>Author: <b>{user}</b></div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" name="create-title" id="create-title" />
      </div>
      <textarea />
      <input type="submit" value="Create" />
    </form>
  )
}
