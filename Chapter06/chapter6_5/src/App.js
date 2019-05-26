import React, { useReducer, useEffect, useState } from 'react'
import { useResource } from 'react-request-hook'

import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'
import Header from './Header'
import { ThemeContext, StateContext } from './contexts'
import ChangeTheme from './ChangeTheme'

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
    const { user, error } = state
    
    const [ posts, getPosts ] = useResource(() => ({
        url: '/posts',
        method: 'get'
    }))
    useEffect(getPosts, [])
    useEffect(() => {
        if (posts && posts.error) {
            dispatch({ type: 'POSTS_ERROR' })
        }
        if (posts && posts.data) {
            dispatch({ type: 'FETCH_POSTS', posts: posts.data })
        }
    }, [posts])

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
                    <Header text="React Hooks Blog" />
                    <ChangeTheme theme={theme} setTheme={setTheme} />
                    <br />
                    <React.Suspense fallback={"Loading..."}>
                        <UserBar />
                    </React.Suspense>
                    <br />
                    {user && <CreatePost />}
                    <br />
                    <hr />
                    {error && <b>{error}</b>}
                    <PostList />
                </div>
            </ThemeContext.Provider>
        </StateContext.Provider>
    )
}
