import { renderHook, act } from '@testing-library/react-hooks'
import useDebouncedUndo from './useDebouncedUndo'

test('should use debounced undo', () => {
  const { result } = renderHook(() => useDebouncedUndo())
  const [ content, setter, undoRest ] = result.current

  expect(content).toBe('')
  expect(typeof setter).toBe('function')
  expect(typeof undoRest.undo).toBe('function')
  expect(typeof undoRest.redo).toBe('function')
  expect(undoRest.canUndo).toBe(false)
  expect(undoRest.canRedo).toBe(false)
})

test('should update content immediately', () => {
  const { result } = renderHook(() => useDebouncedUndo())
  const [ content, setter ] = result.current

  expect(content).toBe('')
  act(() => setter('test'))
  const [ newContent ] = result.current
  expect(newContent).toBe('test')
})

test('should debounce undo history update', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useDebouncedUndo())
  const [ , setter ] = result.current

  act(() => setter('test'))

  const [ , , undoRest ] = result.current
  expect(undoRest.canUndo).toBe(false)

  await act(async () => await waitForNextUpdate())
  
  const [ , , newUndoRest ] = result.current
  expect(newUndoRest.canUndo).toBe(true)
})
