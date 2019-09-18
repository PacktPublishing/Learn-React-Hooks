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
        <form onSubmit={e => { e.preventDefault(); register(username, password) }}>
            <label htmlFor="register-username">Username:</label>
            <input type="text" value={username} {...bindUsername} name="register-username" id="register-username" />
            <label htmlFor="register-password">Password:</label>
            <input type="password" value={password} {...bindPassword} name="register-password" id="register-password" />
            <label htmlFor="register-password-repeat">Repeat password:</label>
            <input type="password" value={passwordRepeat} {...bindPasswordRepeat} name="register-password-repeat" id="register-password-repeat" />
            <input type="submit" value="Register" disabled={username.length === 0 || password.length === 0 || password !== passwordRepeat} />
        </form>
    )
}
