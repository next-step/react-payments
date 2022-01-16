import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { CardProps } from '../../components/Card'

type PropName = keyof CardProps
type Payload = { name: PropName }
type Action = { type: 'CHANGE'; payload: Payload }
type FormChangedContextProps = Record<PropName, boolean>
type FormDispatcher = Dispatch<Action>

export const formChangedContext = createContext<
  FormChangedContextProps | undefined
>(undefined)
export const formChangeedDispatcherContext = createContext<
  FormDispatcher | undefined
>(undefined)

function getInitialValue() {
  return {
    cvc: false,
    number1: false,
    number2: false,
    number3: false,
    number4: false,
    owner: false,
    password: false,
    type: false,
    validDate: false,
  }
}
function formReducer(
  state: FormChangedContextProps,
  action: Action
): FormChangedContextProps {
  switch (action.type) {
    case 'CHANGE':
      const newState = getInitialValue()
      newState[action.payload.name] = true
      return newState
  }
}

export default function FormContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [state, dispatch] = useReducer(formReducer, getInitialValue())

  return (
    <formChangeedDispatcherContext.Provider value={dispatch}>
      <formChangedContext.Provider value={state}>
        {children}
      </formChangedContext.Provider>
    </formChangeedDispatcherContext.Provider>
  )
}
