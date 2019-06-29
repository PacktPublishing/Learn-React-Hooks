import { useContext } from 'react'
import { StateContext } from '../contexts'

export default function useUserState () {
  const { state } = useContext(StateContext)
  return state.user
}
