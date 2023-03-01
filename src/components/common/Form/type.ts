export interface FormHandler {
  handleSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleFormInput: <T extends object>(
    formData: React.MutableRefObject<T>,
    key: string
  ) => (value: unknown) => void;
  getFormData: () => React.MutableRefObject<object>;
}
export interface InputHandler {
  handleInputChange: (
    input: React.Dispatch<React.SetStateAction<object>>
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface FormSharedConfig {
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  dispatchCount?: number;
  dispatch: () => void;
}

export type FormProps = FormSharedConfig & FormHandler & InputHandler;
