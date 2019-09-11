import React from 'react'

export default function Logout ({ user }) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  )
}
