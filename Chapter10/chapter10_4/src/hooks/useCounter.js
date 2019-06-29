import { useState, useCallback } from 'react'

export default function useCounter (initialCount = 0) {
  const [ count, setCount ] = useState(initialCount)
  const increment = useCallback(() => setCount(count + 1), [])
  const reset = useCallback(() => setCount(initialCount), [initialCount])
  return { count, increment, reset }
}
