import React, { useState } from 'react'

export default function Register ({ dispatch }) {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordRepeat, setPasswordRepeat ] = useState('')

    function handleUsername (evt) {
        setUsername(evt.target.value)
    }

    function handlePassword (evt) {
      setPassword(evt.target.value)
    }
    
    function handlePasswordRepeat (evt) {
        setPasswordRepeat(evt.target.value)
    }

    return (
        <div>
            Username: <input type="text" value={username} onChange={handleUsername} />
            Password: <input type="password" value={password} onChange={handlePassword} />
            Repeat password: <input type="password" value={passwordRepeat} onChange={handlePasswordRepeat} />
            <input type="submit" value="Register" onClick={() => dispatch({ type: 'REGISTER', username })} disabled={username.length === 0 || password.length === 0 || password !== passwordRepeat} />
        </div>
    )
}
