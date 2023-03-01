import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';

import useFormData from '@/hooks/formHook';

import type { FormProps } from './type';

const FormContext = createContext<FormProps | null>(null);

export const FormProvider = ({ children }: PropsWithChildren) => {
  const { getFormData, handleFormInput, handleInputChange } = useFormData();
  const [dispatchCount, dispatch] = useReducer((state: number) => {
    return state + 1;
  }, 0);

  const value = {
    getFormData,
    handleFormInput,
    handleInputChange,
    dispatchCount,
    dispatch,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
