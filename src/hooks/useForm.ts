import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import {
  FormErrors,
  FormTouched,
  FormValues,
  UseFormProps,
} from '@/type/formType';
import { FIELD_INDEX_MAP } from '@/constants/form';

export default function useForm<T extends FormValues>({
  values,
  setValues,
  validate,
  autoFocusMethods,
  onSubmit,
}: UseFormProps<T>) {
  const [errors, setErrors] = useState<FormErrors<T>>({} as FormErrors<T>);
  const [touched, setTouched] = useState<FormTouched<T>>({} as FormTouched<T>);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name, maxLength } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    const fieldName = name;
    const fieldErrors = validate({
      ...values,
      [fieldName]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: fieldErrors[fieldName],
    }));

    autoFocusMethods.handleAutoFocus({
      index: FIELD_INDEX_MAP[name],
      value,
      maxLength,
    });
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement>,
    options?: {
      formatter?: (value: string) => string;
    }
  ) => {
    // eslint-disable-next-line prefer-const
    let { value, name, maxLength } = e.target;
    const { formatter } = options ?? {};

    if (formatter) {
      value = formatter(value);
    }

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    autoFocusMethods.handleAutoFocus({
      index: FIELD_INDEX_MAP[name],
      value,
      maxLength,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

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

    onSubmit();
  };

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
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    getFieldProps,
    autoFocusMethods,
  };
}
