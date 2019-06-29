import { useState, useEffect } from 'react'
import useUndo from 'use-undo'
import { useDebouncedCallback } from 'use-debounce'

export default function useDebouncedUndo (timeout = 200) {
  const [ content, setInput ] = useState('')
  const [ undoContent, { set: setContent, ...undoRest } ] = useUndo('')

  const [ setDebounce, cancelDebounce ] = useDebouncedCallback(
    (value) => {
      setContent(value)
    },
    timeout
  )
  useEffect(() => {
    cancelDebounce()
    setInput(undoContent.present)
  }, [cancelDebounce, undoContent])

  function setter (value) {
    setInput(value)
    setDebounce(value)
  }

  return [ content, setter, undoRest ]
}
