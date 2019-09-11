import React from 'react'

export default function Logout ({ user, dispatch }) {
  return (
    <form onSubmit={e => { e.preventDefault(); dispatch({ type: 'LOGOUT' }) }}>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  )
}
