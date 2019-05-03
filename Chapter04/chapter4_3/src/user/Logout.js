import React from 'react'

export default function Logout ({ user, dispatch }) {
  return (
    <div>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" onClick={() => dispatch({ type: 'LOGOUT' })} />
    </div>
  )
}
