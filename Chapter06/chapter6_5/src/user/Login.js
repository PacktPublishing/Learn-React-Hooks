import React, { useState, useContext } from 'react'
import { StateContext } from '../contexts'

export default function Login () {
  const { dispatch } = useContext(StateContext)
  
  const [ username, setUsername ] = useState('')

  function handleUsername (evt) {
    setUsername(evt.target.value)
  }

  return (
    <div>
      Username: <input type="text" value={username} onChange={handleUsername} />
      Password: <input type="password" />
      <input type="submit" value="Login" onClick={() => dispatch({ type: 'LOGIN', username })} disabled={username.length === 0} />
    </div>
  )
}
