import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'

export function useStores () {
  return useContext(MobXProviderContext)
}

export function useTodoStore () {
  const { todoStore } = useStores()
  return todoStore
}
