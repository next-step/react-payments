import { ChangeEvent, InputHTMLAttributes, useCallback, useState } from 'react';
import { TextFieldProps } from '../components/common/input/Input.tsx';

function useForm<T extends NonNullable<unknown>>({
  initialValue,
}: {
  initialValue: T;
}): {
  form: T;
  regis: (name: keyof T, props?: TextFieldProps) => InputHTMLAttributes<HTMLInputElement>;
  setValue: (name: keyof T, value: T[keyof T]) => void;
} {
  const [form, setForm] = useState(initialValue);

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setValue(name as keyof T, value as T[keyof T]);
    },
    [form],
  );

  const setValue = (name: keyof T, value: T[keyof T]) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const regis = (name: keyof T, props?: TextFieldProps): InputHTMLAttributes<HTMLInputElement> => {
    return {
      ...props,
      name: name as string,
      value: form[name] as string,
      onChange: props?.onChange ? props?.onChange : handleOnChange,
    };
  };

  return { form, setValue, regis };
}

export default useForm;
