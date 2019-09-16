import React, { useReducer, useEffect, useState } from 'react'

import HeaderBar from './pages/HeaderBar'
import PostPage from './pages/PostPage'
import { ThemeContext, StateContext } from './contexts'
import appReducer from './reducers'

export default function App () {
    const [ theme, setTheme ] = useState({
        primaryColor: 'deepskyblue',
        secondaryColor: 'coral'
    })

    const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: [], error: '' })
    const { user } = state

    useEffect(() => {
        if (user) {
            document.title = `${user} - React Hooks Blog`
        } else {
            document.title = 'React Hooks Blog'
        }
    }, [user])

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            <ThemeContext.Provider value={theme}>
                <div style={{ padding: 8 }}>
                    <HeaderBar setTheme={setTheme} />
                    <hr />
                    <PostPage id={'react-hooks'} />
                </div>
            </ThemeContext.Provider>
        </StateContext.Provider>
    )
}
