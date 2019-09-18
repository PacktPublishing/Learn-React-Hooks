import React from 'react'

export default function Login () {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="login-username">Username:</label>
      <input type="text" name="login-username" id="login-username" />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Login" />
    </form>
  )
}
