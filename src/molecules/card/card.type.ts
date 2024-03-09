import { InputType } from '@/components/input/input.type';

interface InputField {
  id: string;
  type: InputType;
  validate?: (field: string) => boolean;
  maxLength?: number;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  defaultValue?: string;
}

export interface InputFields {
  FIELDS: Record<string, InputField>;
  TITLE: string;
}
