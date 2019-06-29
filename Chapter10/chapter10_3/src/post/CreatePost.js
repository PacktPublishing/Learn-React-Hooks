import React, { useEffect } from 'react'
import { useInput } from 'react-hookedup-fork'
import { useNavigation } from 'react-navi'
import { useUserState, useDispatch, useDebouncedUndo, useAPICreatePost } from '../hooks'

export default function CreatePost () {
  const user = useUserState()
  const dispatch = useDispatch()

  const { value: title, bindToInput: bindTitle } = useInput('')
  const [ content, setContent, { undo, redo, canUndo, canRedo } ] = useDebouncedUndo()

  const [ post, createPost ] = useAPICreatePost()

  const navigation = useNavigation()

  useEffect(() => {
    if (post && post.data) {
      navigation.navigate(`/view/${post.data.id}`)
    }
  }, [navigation, post])

  function handleContent (e) {
    const { value } = e.target
    setContent(value)
  }

  function handleCreate () {
    createPost({ title, content, author: user })
    dispatch({ type: 'CREATE_POST', title, content, author: user })
  }

  return (
    <div>
      <div>Author: <b>{user}</b></div>
      <div>Title: <input type="text" value={title} {...bindTitle} /></div>
      <textarea value={content} onChange={handleContent} />
      <button onClick={undo} disabled={!canUndo}>Undo</button>
      <button onClick={redo} disabled={!canRedo}>Redo</button>
      <input type="submit" value="Create" onClick={handleCreate} />
    </div>
  )
}
