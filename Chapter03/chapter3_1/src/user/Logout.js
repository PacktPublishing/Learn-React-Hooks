import React from 'react'

export default function Logout ({ user }) {
  return (
    <div>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </div>
  )
}
