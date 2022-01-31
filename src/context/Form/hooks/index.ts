import { useContext } from 'react'
import { cardFormContext, cardFormDispatcherContext } from '../CardFormContext'
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

function useCardFormState() {
  const state = useContext(cardFormContext)
  if (!state) throw new Error('State Not Found!')
  return state
}

function useCardFormDispatch() {
  const dispatch = useContext(cardFormDispatcherContext)
  if (!dispatch) throw new Error('Dispatcher Not Founct!')
  return dispatch
}

export {
  useFormChangedDispatch,
  useFormChangedState,
  useCardFormState,
  useCardFormDispatch,
}
