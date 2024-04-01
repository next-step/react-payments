export type OnSubmitCallback = <T>(values: Values<T>) => void;

type ErrorMessage = string;
export type ValidateResult = false | ErrorMessage;

export interface Field {
  value: string;
  error: ValidateResult;
  readonly?: boolean;
  required?: boolean;
}

export type Values<T> = {
  [K in keyof T]: T[K];
};

export type Errors<T> = { [K in keyof T]: ValidateResult };

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
