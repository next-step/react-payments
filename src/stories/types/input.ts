export interface InputBoxWithUseFormProps {
  type: string;
  amount: number;
  maxLength: number;
}

export interface Field {
  name: string;
  type: string;
  maxLength: number;
  validate: (field: string) => boolean;
}
