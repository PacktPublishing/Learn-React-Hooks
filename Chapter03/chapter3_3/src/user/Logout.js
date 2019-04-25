import React from 'react'

export default function Logout ({ user, setUser }) {
  return (
    <div>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" onClick={() => setUser(false)} />
    </div>
  )
}
