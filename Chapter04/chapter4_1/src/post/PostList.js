import React from 'react'

import Post from './Post'

export default function PostList ({ posts = [] }) {
  return (
    <div>
      {posts.map(p => (
        <React.Fragment>
          <Post {...p} />
          <hr />
        </React.Fragment>
      ))}
    </div>
  )
}
