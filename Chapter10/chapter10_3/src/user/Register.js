import React, { useEffect } from 'react'
import { useInput } from 'react-hookedup'
import { useDispatch, useAPIRegister } from '../hooks'

function useRegisterEffect (user, dispatch) {
    useEffect(() => {
        if (user && user.data) {
            dispatch({ type: 'REGISTER', username: user.data.username })
        }
    }, [dispatch, user])
}

export default function Register () {
    const dispatch = useDispatch()
    
    const { value: username, bindToInput: bindUsername } = useInput('')
    const { value: password, bindToInput: bindPassword } = useInput('')
    const { value: passwordRepeat, bindToInput: bindPasswordRepeat } = useInput('')

    const [ user, register ] = useAPIRegister()
    useRegisterEffect(user, dispatch)

    return (
        <div>
            Username: <input type="text" value={username} {...bindUsername} />
            Password: <input type="password" value={password} {...bindPassword} />
            Repeat password: <input type="password" value={passwordRepeat} {...bindPasswordRepeat} />
            <input type="submit" value="Register" onClick={() => register(username, password)} disabled={username.length === 0 || password.length === 0 || password !== passwordRepeat} />
        </div>
    )
}
