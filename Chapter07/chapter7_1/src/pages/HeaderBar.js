import React from 'react'

import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'
import Header from './Header'
import ChangeTheme from './ChangeTheme'

export default function HeaderBar ({ state, theme, setTheme }) {
  const { user } = state
    return (
        <div>
            <Header text="React Hooks Blog" />
            <ChangeTheme theme={theme} setTheme={setTheme} />
            <br />
            <React.Suspense fallback={"Loading..."}>
                <UserBar />
            </React.Suspense>
            <br />
            {user && <CreatePost />}
        </div>
    )
}
