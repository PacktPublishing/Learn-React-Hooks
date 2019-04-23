import React, { useState } from 'react'

export default function Login ({ setUser }) {
  const [ username, setUsername ] = useState('')

  function handleUsername (evt) {
    setUsername(evt.target.value)
  }

  return (
    <div>
      Username: <input type="text" value={username} onChange={handleUsername} />
      Password: <input type="password" />
      <input type="submit" value="Login" onClick={() => setUser(username)} disabled={username.length === 0} />
    </div>
  )
}
