import React, { useReducer, useEffect, useState } from 'react'

import HeaderBar from './pages/HeaderBar'
import PostPage from './pages/PostPage'
import { ThemeContext, StateContext } from './contexts'

function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        
        case 'LOGOUT':
            return ''
        
        default:
            return state
    }
}

function postsReducer (state, action) {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.posts

        case 'CREATE_POST':
            const newPost = { title: action.title, content: action.content, author: action.author }
            return [ newPost, ...state ]
        
        default:
            return state
    }
}

function errorReducer (state, action) {
    switch (action.type) {
        case 'POSTS_ERROR':
            return 'Failed to fetch posts'

        default:
            return state
    }
}

function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        posts: postsReducer(state.posts, action),
        error: errorReducer(state.error, action)
    }
}

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
