import { ChangeEvent, FormEvent, FunctionComponent, ReactNode } from 'react';

type FormProps = {
  action?: string;
  children: ReactNode;
  onChange?: (e: ChangeEvent<HTMLFormElement>) => void;
  onSubmit: (data: FormData) => void;
};

const Form: FunctionComponent<FormProps> = ({ action, children, onChange, onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const isValid = formElement.checkValidity();

    // focusing the first invalid field
    const firstInvalidField = formElement.querySelector(':invalid') as HTMLInputElement;

    firstInvalidField?.focus();

    // submit the dataObject if isValid===true
    if (isValid) {
      const dataObject = new FormData(formElement);
      onSubmit(dataObject);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    onChange && onChange(e);
  };

  return (
    <form action={action} onSubmit={handleSubmit} onChange={handleChange} noValidate>
      {children}
    </form>
  );
};

export default Form;
