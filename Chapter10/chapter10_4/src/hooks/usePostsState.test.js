import { renderHook, act } from '@testing-library/react-hooks'
import { stateContextWrapper } from './testUtils'
import useDispatch from './useDispatch'
import usePostsState from './usePostsState'

test('should use posts state', () => {
  const { result } = renderHook(
    () => usePostsState(),
    { wrapper: stateContextWrapper }
  )

  expect(result.current).toEqual([])
})

test('should update posts state on fetch action', () => {
  const { result } = renderHook(
    () => ({ state: usePostsState(), dispatch: useDispatch() }),
    { wrapper: stateContextWrapper }
  )

  const samplePosts = [{ id: 'test' }, { id: 'test2' }]
  act(() => result.current.dispatch({ type: 'FETCH_POSTS', posts: [{ id: 'test' }, { id: 'test2' }] }))
  expect(result.current.state).toEqual(samplePosts)
})

test('should update posts state on insert action', () => {
  const { result } = renderHook(
    () => ({ state: usePostsState(), dispatch: useDispatch() }),
    { wrapper: stateContextWrapper }
  )

  const post = { title: 'Hello World', content: 'This is a test', author: 'Test User' }
  act(() => result.current.dispatch({ type: 'CREATE_POST', ...post }))
  expect(result.current.state[0]).toEqual(post)
})
