import React, { useContext, useEffect } from 'react'
import { useInput } from 'react-hookedup'
import { useResource } from 'react-request-hook'
import { StateContext } from '../contexts'

export default function Register () {
    const { dispatch } = useContext(StateContext)
    
    const { value: username, bindToInput: bindUsername } = useInput('')
    const { value: password, bindToInput: bindPassword } = useInput('')
    const { value: passwordRepeat, bindToInput: bindPasswordRepeat } = useInput('')

    const [ user, register ] = useResource((username, password) => ({
        url: '/users',
        method: 'post',
        data: { username, password }
    }))

    useEffect(() => {
        if (user && user.data) {
            dispatch({ type: 'REGISTER', username: user.data.username })
        }
    }, [dispatch, user])

    return (
        <div>
            Username: <input type="text" value={username} {...bindUsername} />
            Password: <input type="password" value={password} {...bindPassword} />
            Repeat password: <input type="password" value={passwordRepeat} {...bindPasswordRepeat} />
            <input type="submit" value="Register" onClick={() => register(username, password)} disabled={username.length === 0 || password.length === 0 || password !== passwordRepeat} />
        </div>
    )
}
