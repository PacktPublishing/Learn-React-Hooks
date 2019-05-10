import React, { useReducer, useEffect, useState } from 'react'

import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'
import Header from './Header'
import { ThemeContext } from './contexts'
import ChangeTheme from './ChangeTheme'

const defaultPosts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]

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
        case 'CREATE_POST':
            const newPost = { title: action.title, content: action.content, author: action.author }
            return [ newPost, ...state ]
        
        default:
            return state
    }
}

function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        posts: postsReducer(state.posts, action)
    }
}

export default function App () {
    const [ theme, setTheme ] = useState({
        primaryColor: 'deepskyblue',
        secondaryColor: 'coral'
    })
    console.log('theme', theme)

    const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: defaultPosts })
    const { user, posts } = state
    
    useEffect(() => {
        if (user) {
            document.title = `${user} - React Hooks Blog`
        } else {
            document.title = 'React Hooks Blog'
        }
    }, [user])

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ padding: 8 }}>
                <Header text="React Hooks Blog" />
                <ChangeTheme theme={theme} setTheme={setTheme} />
                <br />
                <UserBar user={user} dispatch={dispatch} />
                <br />
                {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
                <br />
                <hr />
                <PostList posts={posts} />
            </div>
        </ThemeContext.Provider>
    )
}
