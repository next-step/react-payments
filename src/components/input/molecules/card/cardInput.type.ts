import { InputType } from '@/components/input/input.type';
import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';
import { useForm } from '@/hooks/useForm/useForm';
import { ValidateResult } from '@/hooks/useForm/useForm.type';
import { CardForm } from '@/pages/Payments/payments.type';

export interface InputField<T>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: keyof T;
  type: InputType;
  validate?: (field: string) => ValidateResult;
  defaultValue?: string;
  autoFocusIndex?: number;
}

export interface InputFields<T> {
  FIELDS: Record<string, InputField<T>>;
  TITLE: string;
}

export type CardInputFormMethods = ReturnType<typeof useForm<CardForm>>;

export interface CardInputProps {
  formMethods: CardInputFormMethods;
  autoFocusMethods: ReturnType<typeof useAutoFocus>;
}
