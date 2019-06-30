import { renderHook } from '@testing-library/react-hooks'
import { themeContextWrapper } from './testUtils'
import useTheme from './useTheme'

test('should use theme', () => {
  const { result } = renderHook(
    () => useTheme(),
    { wrapper: themeContextWrapper }
  )

  expect(result.current.primaryColor).toBe('deepskyblue')
  expect(result.current.secondaryColor).toBe('coral')
})
