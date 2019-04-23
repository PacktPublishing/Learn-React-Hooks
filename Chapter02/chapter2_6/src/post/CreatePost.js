import React, { useState } from 'react'

export default function CreatePost ({ user, posts, setPosts }) {
  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')

  function handleTitle (evt) {
    setTitle(evt.target.value)
  }

  function handleContent (evt) {
    setContent(evt.target.value)
  }

  function handleCreate () {
    const newPost = { title, content, author: user }
    setPosts([ newPost, ...posts ])
  }

  return (
    <div>
      <div>Author: <b>{user}</b></div>
      <div>Title: <input type="text" value={title} onChange={handleTitle} /></div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" onClick={handleCreate} />
    </div>
  )
}
