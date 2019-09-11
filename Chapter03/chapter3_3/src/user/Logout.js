import React from 'react'

export default function Logout ({ user, setUser }) {
  return (
    <form onSubmit={e => { e.preventDefault(); setUser('') }}>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  )
}
