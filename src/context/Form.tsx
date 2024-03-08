import useForm from '@/hooks/useForm';
import { createContext, ReactNode, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FormValues = Record<string, any>;

type FormErrors<T extends FormValues> = {
  [P in keyof T]: string;
};

export interface UseFormProps<T extends FormValues> {
  initialValue: T;
  validate: (values: T) => FormErrors<T>;
  onSubmit: (values: T) => void;
}

const FormContext = createContext({});

FormContext.displayName = 'FormContext';

interface FormProps<T extends FormValues> extends UseFormProps<T> {
  children: ReactNode;
}

export const Form = <T extends FormValues>({
  children,
  ...props
}: FormProps<T>) => {
  const formValue = useForm(props);

  return (
    <FormContext.Provider value={formValue}>
      <form onSubmit={formValue.handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

export const useFormContext = <T extends FormValues>() => {
  const context = useContext(FormContext) as ReturnType<typeof useForm<T>>;

  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }

  return context;
};
