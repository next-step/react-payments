import { AddPaymentCard, AddPaymentCardKeys } from 'constants/card'
import { createContext, useContext } from 'react'

export type FormChangeParams = {
  key: AddPaymentCardKeys
  value: string
  name?: string
}

type FormContextType = {
  state: AddPaymentCard
  handleChange: (payload: FormChangeParams) => void
}

export const FormContext = createContext<FormContextType | null>(null)

export const FormProvider = FormContext.Provider

export function useFormContext() {
  const context = useContext(FormContext)
  if (!context) {
    throw Error('useFormContext needs FormProviders')
  }
  return context
}
