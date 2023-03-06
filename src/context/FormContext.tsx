import { createContext, PropsWithChildren, useContext } from 'react'

export const FormContext = createContext<any>(null)

export const FormProvider = FormContext.Provider

export function useFormContext() {
  const context = useContext(FormContext)
  if (!context) {
    throw Error('useFormContext needs FormProviders')
  }
  return context
}
