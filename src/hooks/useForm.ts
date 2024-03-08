import { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FormValues = Record<string, any>;

type FormErrors<T extends FormValues> = {
  [P in keyof T]: string;
};

export type FormTouched<T extends FormValues> = {
  [P in keyof T]: boolean;
};

export interface UseFormProps<T extends FormValues> {
  initialValue: T;
  validate: (values: T) => FormErrors<T>;
  onSubmit: (values: T) => void;
}

export default function useForm<T extends FormValues>({
  initialValue,
  validate,
  onSubmit,
}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValue);
  const [errors, setErrors] = useState<FormErrors<T>>({} as FormErrors<T>);
  const [touched, setTouched] = useState<FormTouched<T>>({} as FormTouched<T>);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log('UseForm@@@', e);

    // 필드 방문 표시
    const nextTouched = Object.keys(values).reduce(
      (touched: FormTouched<T>, field: keyof T) => {
        touched[field] = true;

        return touched;
      },
      {} as FormTouched<T>
    );
    setTouched(nextTouched);

    const errors = validate(values);
    setErrors(errors);

    if (Object.values(errors).some(Boolean)) {
      return;
    }

    onSubmit(values);
  };

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  const getFieldProps = (name: keyof T) => {
    const value = values[name];
    const onBlur = handleBlur;
    const onChange = handleChange;

    return {
      name,
      value,
      onBlur,
      onChange,
    };
  };

  return {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    getFieldProps,
  };
}
