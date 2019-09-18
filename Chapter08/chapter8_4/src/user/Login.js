import React, { useState, useContext, useEffect } from 'react'
import { useInput } from 'react-hookedup'
import { useResource } from 'react-request-hook'
import { StateContext } from '../contexts'

export default function Login () {
  const { dispatch } = useContext(StateContext)
  
  const { value: username, bindToInput: bindUsername } = useInput('')
  const [ loginFailed, setLoginFailed ] = useState(false)
  const { value: password, bindToInput: bindPassword } = useInput('')

  const [ user, login ] = useResource((username, password) => ({
    url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
    method: 'get'
  }))

  useEffect(() => {
    if (user && user.data) {
      if ( user.data.length > 0) {
        setLoginFailed(false)
        dispatch({ type: 'LOGIN', username: user.data[0].username })
      } else {
        setLoginFailed(true)
      }
    }
    if (user && user.error) {
      setLoginFailed(true)
    }
  }, [user])

  return (
    <form onSubmit={e => { e.preventDefault(); login(username, password) }}>
      <label htmlFor="login-username">Username:</label>
      <input type="text" value={username} {...bindUsername} name="login-username" id="login-username" />
      <label htmlFor="login-password">Password:</label>
      <input type="password" value={password} {...bindPassword} name="login-password" id="login-password" />
      <input type="submit" value="Login" disabled={username.length === 0} />
      {loginFailed && <span style={{ color: 'red' }}>Invalid username or password</span>}
    </form>
  )
}
