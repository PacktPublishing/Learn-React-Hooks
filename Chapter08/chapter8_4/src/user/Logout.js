import React, { useContext } from 'react'
import { StateContext } from '../contexts'

export default function Logout () {
  const { state, dispatch } = useContext(StateContext)
  const { user } = state
  
  return (
    <div>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" onClick={() => dispatch({ type: 'LOGOUT' })} />
    </div>
  )
}
