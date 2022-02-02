import { useContext } from 'react'
import { cardContext, cardDispatcherContext } from '../CardContext'

function useCardState() {
  const state = useContext(cardContext)
  if (!state) throw new Error('State Not Found!')
  return state
}

function useCardDispatch() {
  const dispatch = useContext(cardDispatcherContext)
  if (!dispatch) throw new Error('Dispatcher Not Founct!')
  return dispatch
}

export { useCardState, useCardDispatch }
