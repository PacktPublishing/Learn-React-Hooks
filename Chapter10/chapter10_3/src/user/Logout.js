import React from 'react'
import { useDispatch, useUserState } from '../hooks'

export default function Logout () {
  const dispatch = useDispatch()
  const user = useUserState()
  
  return (
    <div>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" onClick={() => dispatch({ type: 'LOGOUT' })} />
    </div>
  )
}
