import { InputType } from '@/components/input/input.type';

interface InputField extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: InputType;
  validate?: (field: string) => boolean;
  defaultValue?: string;
}

export interface InputFields {
  FIELDS: Record<string, InputField>;
  TITLE: string;
}
