import React from 'react'

export default function Register () {
  return (
    <div>
      Username: <input type="text" />
      Password: <input type="password" />
      Repeat password: <input type="password" />
      <input type="submit" value="Register" />
    </div>
  )
}
