import React from 'react'
import { usePostsState } from '../hooks'

import Post from './Post'

export default function PostList () {
  const posts = usePostsState()
  
  return (
    <div>
      {posts.map((p, i) => (
        <React.Fragment key={i}>
          <Post {...p} short={true} />
          <hr />
        </React.Fragment>
      ))}
    </div>
  )
}
