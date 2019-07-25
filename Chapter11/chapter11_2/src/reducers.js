import { generateID } from './api'

function filterReducer (state, action) {
  if (action.type === 'FILTER_TODOS') {
    return action.filter
  } else {
    return state
  }
}

function todosReducer (state, action) {
  switch (action.type) {
    case 'FETCH_TODOS':
      return action.todos

    case 'ADD_TODO':
      const newTodo = {
        id: generateID(),
        title: action.title,
        completed: false
      }
      return [ newTodo, ...state ]

    case 'TOGGLE_TODO':
      return state.map(t => {
        if (t.id === action.id) {
          return { ...t, completed: !t.completed }
        }
        return t
      }, [])

    case 'REMOVE_TODO':
      return state.filter(t => {
        if (t.id === action.id) {
          return false
        }
        return true
      })

    default:
      return state
  }
}

export default function appReducer (state, action) {
  return {
    todos: todosReducer(state.todos, action),
    filter: filterReducer(state.filter, action)
  }
}
