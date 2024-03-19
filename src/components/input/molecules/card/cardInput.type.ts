import { InputType } from '@/components/input/input.type';
import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';
import { FormMethodsProps } from '@/hooks/useForm/useForm';

export interface InputField
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: InputType;
  validate?: (field: string) => boolean;
  defaultValue?: string;
  autoFocusIndex?: number;
}

export interface InputFields {
  FIELDS: Record<string, InputField>;
  TITLE: string;
}

export interface CardInputProps extends FormMethodsProps {
  fields: InputFields;
  autoFocusMethods: ReturnType<typeof useAutoFocus>;
}
