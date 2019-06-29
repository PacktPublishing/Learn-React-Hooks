import { useContext } from 'react'
import { StateContext } from '../contexts'

export default function usePostsState () {
  const { state } = useContext(StateContext)
  return state.posts
}
