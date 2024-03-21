export type OnSubmitCallback = (values: Values) => void;

type ErrorMessage = string;
export type ValidateResult = false | ErrorMessage;

export interface Field {
  value: string;
  error: ValidateResult;
  readonly?: boolean;
  required?: boolean;
}

export type Values = { [key: string]: string };
export type Errors = { [key: string]: ValidateResult };

export interface RegisterConfig {
  defaultValue: string;
  minLength: number;
  maxLength: number;
  readOnly: boolean;
  required: boolean;
  validate: (value: string) => ValidateResult;
  onChange: (value: string) => string | void;
}

export interface FieldRef {
  [key: string]: Field;
}
