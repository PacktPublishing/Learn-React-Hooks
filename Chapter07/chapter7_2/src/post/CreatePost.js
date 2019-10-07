import React, { useState, useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from '../contexts'

export default function CreatePost () {
  const { state, dispatch } = useContext(StateContext)
  const { user } = state

  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')

  const [ post, createPost ] = useResource(({ title, content, author }) => ({
    url: '/posts',
    method: 'post',
    data: { title, content, author }
  }))

  useEffect(() => {
    if (post && post.data) {
      dispatch({ type: 'CREATE_POST', ...post.data })
    }
  }, [post])

  function handleTitle (evt) {
    setTitle(evt.target.value)
  }

  function handleContent (evt) {
    setContent(evt.target.value)
  }

  function handleCreate () {
    createPost({ title, content, author: user })
  }

  return (
    <form onSubmit={e => { e.preventDefault(); handleCreate() }}>
      <div>Author: <b>{user}</b></div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
  )
}
