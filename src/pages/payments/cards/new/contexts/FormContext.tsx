import { createContext, ReactNode, useContext } from 'react'

import { FormValues, useForm, UseFormProps } from '@/hooks/useForm'

const FormContext = createContext({})

FormContext.displayName = 'FormContext'

interface FormProps<T extends FormValues> extends UseFormProps<T> {
  children: ReactNode
}

export const Form = <T extends FormValues>({ children, ...props }: FormProps<T>) => {
  const formValue = useForm(props)

  return <FormContext.Provider value={formValue}>{children}</FormContext.Provider>
}

export const useFormContext = <T extends FormValues>() => {
  const context = useContext(FormContext) as ReturnType<typeof useForm<T>>

  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }

  return context
}
