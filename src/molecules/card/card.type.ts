interface InputField {
  id: string;
  type: string;
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
