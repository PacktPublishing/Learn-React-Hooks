import React, { useState, useEffect } from 'react'
import { useInput } from 'react-hookedup'
import { useDispatch, useAPILogin } from '../hooks'

export default function Login () {
  const dispatch = useDispatch()
  
  const { value: username, bindToInput: bindUsername } = useInput('')
  const [ loginFailed, setLoginFailed ] = useState(false)
  const { value: password, bindToInput: bindPassword } = useInput('')

  const [ user, login ] = useAPILogin()

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
  }, [dispatch, user])

  return (
    <div>
      Username: <input type="text" value={username} {...bindUsername} />
      Password: <input type="password" value={password} {...bindPassword} />
      <input type="submit" value="Login" onClick={() => login(username, password)} disabled={username.length === 0} />
      {loginFailed && <span style={{ color: 'red' }}>Invalid username or password</span>}
    </div>
  )
}
