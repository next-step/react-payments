export type OnSubmitCallback = (values: Values) => void;

export interface Field {
  value: string;
  error: boolean;
  readonly?: boolean;
  required?: boolean;
}

export type Values = { [key: string]: string };
export type Errors = { [key: string]: boolean };

export interface RegisterConfig {
  defaultValue: string;
  minLength: number;
  maxLength: number;
  readOnly: boolean;
  required: boolean;
  validate: (value: string) => boolean;
  onChange: (value: string) => string | void;
}

export interface FieldRef {
  [key: string]: Field;
}
