import { createContext, Dispatch, ReactNode, useMemo, useReducer } from 'react'

function getInitialValue(): CardFormContextState {
  return {
    renderedCount: 0,
  }
}

export const cardFormContext = createContext<CardFormContextValue | undefined>(
  undefined
)

type CardFormContextState = { renderedCount: number }
export const cardFormDispatcherContext = createContext<
  CardFormDispatcher | undefined
>(undefined)

function cardFormReducer(
  state: CardFormContextState,
  action: Action
): CardFormContextState {
  switch (action.type) {
    case 'RERENDER':
      return { renderedCount: state.renderedCount + 1 }
  }
}

export default function CardFormContextProvider({
  children,
  formRef,
}: CardFormContextProviderProps) {
  const [state, dispatch] = useReducer(cardFormReducer, getInitialValue())

  const formValue: CardFormContextValue = useMemo(() => {
    const { cardNumber1, cardNumber2, cardNumber3, cardNumber4 } =
      formRef.current?.cardNumber() ?? {
        cardNumber1: '',
        cardNumber2: '',
        cardNumber3: '',
        cardNumber4: '',
      }
    const { password1, password2 } = formRef.current?.password() ?? {
      password1: '',
      password2: '',
    }
    const { expireAtMonth, expireAtYear } = formRef.current?.cardExpire() ?? {
      expireAtMonth: '',
      expireAtYear: '',
    }
    const cvc = formRef.current?.cvc() ?? ''
    const owner = formRef.current?.owner() ?? ''

    return {
      cardNumber: {
        cardNumber1,
        cardNumber2,
        cardNumber3,
        cardNumber4,
      },
      password: {
        password1,
        password2,
      },
      cardExpire: {
        expireAtMonth,
        expireAtYear,
      },
      owner,
      cvc,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formRef, state])
  return (
    <cardFormDispatcherContext.Provider value={dispatch}>
      <cardFormContext.Provider value={formValue}>
        {children}
      </cardFormContext.Provider>
    </cardFormDispatcherContext.Provider>
  )
}

interface CardFormContextProviderProps {
  children: ReactNode
  formRef: React.RefObject<CardFormProps>
}

type Action = { type: 'RERENDER' }
type CardFormDispatcher = Dispatch<Action>

interface CardFormContextValue {
  cardNumber: CardNumberType
  cardExpire: CardExpireType
  owner: string
  cvc: string
  password: CardPasswordType
}

export type CardNumberType = {
  cardNumber1: string
  cardNumber2: string
  cardNumber3: string
  cardNumber4: string
}

export type CardExpireType = {
  expireAtMonth: string
  expireAtYear: string
}
export type CardPasswordType = {
  password1: string
  password2: string
}
export interface CardFormProps {
  cardNumber: () => CardNumberType
  cardExpire: () => CardExpireType
  password: () => CardPasswordType
  owner: () => string
  cvc: () => string
}
