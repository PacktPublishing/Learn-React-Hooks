import { useContext } from 'react'
import { StateContext } from '../contexts'

export default function useDispatch (context = StateContext) {
  const { dispatch } = useContext(context)
  return dispatch
}
