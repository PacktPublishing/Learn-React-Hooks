import React, { useContext, useEffect } from 'react'
import { useInput } from 'react-hookedup-fork'
import { useNavigation } from 'react-navi'
import { useResource } from 'react-request-hook'
import { StateContext } from '../contexts'

export default function CreatePost () {
  const { state, dispatch } = useContext(StateContext)
  const { user } = state

  const { value: title, bindToInput: bindTitle } = useInput('')
  const { value: content, bindToInput: bindContent } = useInput('')

  const [ post, createPost ] = useResource(({ title, content, author }) => ({
    url: '/posts',
    method: 'post',
    data: { title, content, author }
  }))

  const navigation = useNavigation()

  useEffect(() => {
    if (post && post.data) {
      navigation.navigate(`/view/${post.data.id}`)
    }
  }, [post])

  function handleCreate () {
    createPost({ title, content, author: user })
    dispatch({ type: 'CREATE_POST', title, content, author: user })
  }

  return (
    <div>
      <div>Author: <b>{user}</b></div>
      <div>Title: <input type="text" value={title} {...bindTitle} /></div>
      <textarea value={content} {...bindContent} />
      <input type="submit" value="Create" onClick={handleCreate} />
    </div>
  )
}
