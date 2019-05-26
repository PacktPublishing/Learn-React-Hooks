import React, { useState, useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from '../contexts'

export default function Login () {
  const { dispatch } = useContext(StateContext)
  
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const [ user, login ] = useResource((username, password) => ({
    url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
    method: 'get',
  }))

  useEffect(() => {
    if (user && user.data && user.data.length > 0) {
      dispatch({ type: 'LOGIN', username: user.data[0].username })
    }
  }, [user])

  function handleUsername (evt) {
    setUsername(evt.target.value)
  }

  function handlePassword (evt) {
    setPassword(evt.target.value)
  }

  return (
    <div>
      Username: <input type="text" value={username} onChange={handleUsername} />
      Password: <input type="password" value={password} onChange={handlePassword} />
      <input type="submit" value="Login" onClick={() => login(username, password)} disabled={username.length === 0} />
    </div>
  )
}
