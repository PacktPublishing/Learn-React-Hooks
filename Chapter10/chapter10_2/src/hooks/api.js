import { useResource } from 'react-request-hook'

export function useAPILogin () {
  return useResource((username, password) => ({
    url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
    method: 'get'
  }))
}

export function useAPIRegister () {
  return useResource((username, password) => ({
    url: '/users',
    method: 'post',
    data: { username, password }
  }))
}

export function useAPICreatePost () {
  return useResource(({ title, content, author }) => ({
    url: '/posts',
    method: 'post',
    data: { title, content, author }
  }))
}

export function useAPIThemes () {
  return useResource(() => ({
    url: '/themes',
    method: 'get'
  }))
}
