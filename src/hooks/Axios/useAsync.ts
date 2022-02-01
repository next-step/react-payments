import { DependencyList, useEffect, useReducer } from 'react'

const reducer =
  <T>() =>
  (_: StateType<T>, action: Action<T>) => {
    switch (action.type) {
      case 'LOADING':
        return {
          loading: true,
          data: null,
        }
      case 'FULFILLED':
        return {
          loading: false,
          data: action.data,
        }
      default:
        throw new Error(`Unhandled action type: ${action.type}`)
    }
  }

function useAsync<T>({ callback, deps = [] }: UseAsyncProps<T>) {
  const dataReducer = reducer<T>()

  const [state, dispatch] = useReducer(dataReducer, {
    loading: false,
    data: null,
  })

  const fetchData = async () => {
    dispatch({ type: 'LOADING', data: null })
    try {
      const data = await callback()
      dispatch({ type: 'FULFILLED', data })
    } catch (e) {
      dispatch({ type: 'FULFILLED', data: null })
    }
  }

  useEffect(() => {
    fetchData()

    // eslint-disable-next-line
  }, deps)

  return { state, fetchData }
}

export { useAsync }

type ActionType = 'LOADING' | 'FULFILLED'
type Action<T> = { type: ActionType; data: T | null }

type StateType<T> = {
  loading: boolean
  data: T | null
}

interface UseAsyncProps<T> {
  callback: () => Promise<T>
  deps?: DependencyList
}
