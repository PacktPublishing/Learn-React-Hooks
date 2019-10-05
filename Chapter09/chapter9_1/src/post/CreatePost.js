import React, { useState, useContext, useEffect } from 'react'
import { useInput } from 'react-hookedup'
import useUndo from 'use-undo'
import { useDebouncedCallback } from 'use-debounce'
import { useNavigation } from 'react-navi'
import { useResource } from 'react-request-hook'
import { StateContext } from '../contexts'

export default function CreatePost () {
  const { state, dispatch } = useContext(StateContext)
  const { user } = state

  const { value: title, bindToInput: bindTitle } = useInput('')
  const [ content, setInput ] = useState('')
  const [ undoContent, {
    set: setContent,
    undo,
    redo,
    canUndo,
    canRedo
  } ] = useUndo('')

  const [ setDebounce, cancelDebounce ] = useDebouncedCallback(
    (value) => {
      setContent(value)
    },
    200
  )
  useEffect(() => {
    cancelDebounce()
    setInput(undoContent.present)
  }, [undoContent])

  const [ post, createPost ] = useResource(({ title, content, author }) => ({
    url: '/posts',
    method: 'post',
    data: { title, content, author }
  }))

  const navigation = useNavigation()

  useEffect(() => {
    if (post && post.data) {
      dispatch({ type: 'CREATE_POST', ...post.data })
      navigation.navigate(`/view/${post.data.id}`)
    }
  }, [post])

  function handleContent (e) {
    const { value } = e.target
    setInput(value)
    setDebounce(value)
  }

  function handleCreate () {
    createPost({ title, content, author: user })
  }

  return (
    <form onSubmit={e => { e.preventDefault(); handleCreate() }}>
      <div>Author: <b>{user}</b></div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} {...bindTitle} name="create-title" id="create-title" />
      </div>
      <textarea value={content} onChange={handleContent} />
      <button type="button" onClick={undo} disabled={!canUndo}>Undo</button>
      <button type="button" onClick={redo} disabled={!canRedo}>Redo</button>
      <input type="submit" value="Create" />
    </form>
  )
}
