import { renderHook } from '@testing-library/react-hooks'
import { stateContextWrapper } from './testUtils'
import useDispatch from './useDispatch'

test('should use dispatch', () => {
  const { result } = renderHook(
    () => useDispatch(),
    { wrapper: stateContextWrapper }
  )

  expect(typeof result.current).toBe('function')
})
