import { useContext } from 'react'
import {
  formChangedContext,
  formChangeedDispatcherContext,
} from '../FormChangeContext'

function useFormChangedState() {
  const state = useContext(formChangedContext)
  if (!state) throw new Error('State Not Found!')
  return state
}

function useFormChangedDispatch() {
  const dispatch = useContext(formChangeedDispatcherContext)
  if (!dispatch) throw new Error('Dispatcher Not Founct!')
  return dispatch
}

export { useFormChangedDispatch, useFormChangedState }
