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
  initialValue: T;
  validate: (values: T) => FormErrors<T>;
  onSubmit: (values: T) => void;
}
