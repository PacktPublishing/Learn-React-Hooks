import React from 'react'

import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar ({ user, setUser }) {
  if (user) {
    return <Logout user={user} setUser={setUser} />
  } else {
    return (
        <React.Fragment>
            <Login setUser={setUser} />
            <Register setUser={setUser} />
        </React.Fragment>
    )
  }
}
