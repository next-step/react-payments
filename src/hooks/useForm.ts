import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import {
  FormErrors,
  FormTouched,
  FormValues,
  UseFormProps,
} from '@/type/formType';

export default function useForm<T extends FormValues>({
  initialValue,
  validate,
  onSubmit,
}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValue);
  const [errors, setErrors] = useState<FormErrors<T>>({} as FormErrors<T>);
  const [touched, setTouched] = useState<FormTouched<T>>({} as FormTouched<T>);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    const fieldName = name;
    const fieldErrors = validate({
      ...values,
      [fieldName]: value,
    });

    setErrors({
      ...errors,
      [fieldName]: fieldErrors[fieldName],
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
