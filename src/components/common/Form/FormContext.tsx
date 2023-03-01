import { createContext, useContext } from 'react';

interface FormHandler {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleReset: (e?: React.SyntheticEvent<any>) => void;
}
interface FormSharedConfig<Props> {
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export type FormProps<Values> = FormSharedConfig<Values> & FormHandler;
const FormContext = createContext<FormProps<any> | null>(null);

export const FormProvider = FormContext.Provider;
export const FormConsumer = FormContext.Consumer;

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
