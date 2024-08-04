import { Dispatch, SetStateAction } from 'react';
import useForm from '@/hooks/useForm';
import { useAutoFocus } from '@/hooks/useAutoFocus';
import { initialFormData } from '@/constants/form';

export type FormType = typeof initialFormData;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FormValues = Record<string, any>;

export type FormErrors<T extends FormValues> = {
  [P in keyof T]: string;
};

export type FormTouched<T extends FormValues> = {
  [P in keyof T]: boolean;
};

export interface UseFormProps<T extends FormValues> {
  values: T;
  setValues: Dispatch<SetStateAction<T>>;
  validate: (values: T) => FormErrors<T>;
  autoFocusMethods: ReturnType<typeof useAutoFocus>;
  onSubmit: () => void;
}

export type CardFormProps = {
  getFieldProps: ReturnType<typeof useForm>['getFieldProps'];
  touched: ReturnType<typeof useForm>['touched'];
  errors: ReturnType<typeof useForm>['errors'];
  autoFocusMethods: ReturnType<typeof useAutoFocus>;
};
