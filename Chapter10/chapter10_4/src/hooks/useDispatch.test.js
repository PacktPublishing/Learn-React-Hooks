import { renderHook } from '@testing-library/react-hooks'
import { StateContextWrapper } from './testUtils'
import useDispatch from './useDispatch'

test('should use dispatch', () => {
  const { result } = renderHook(
    () => useDispatch(),
    { wrapper: StateContextWrapper }
  )

  expect(typeof result.current).toBe('function')
})
