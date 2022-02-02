import { useContext } from 'react'
import { cardFormContext, cardFormDispatcherContext } from '../CardFormContext'

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

export { useCardFormState, useCardFormDispatch }
