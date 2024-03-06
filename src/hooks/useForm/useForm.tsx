import { useCallback, useRef, useState } from 'react';
import {
  Errors,
  FieldRef,
  OnSubmitCallback,
  RegisterConfig,
  Values,
} from './useForm.type';

export interface formMethodsProps {
  formMethods: ReturnType<typeof useForm>;
}

// Auto Focus 핸들링 => useAutoFocus 커스텀 훅으로 분리
// type에 맞지 않는 값이 들어오면 입력 제한 => 내부에 추상화하면 너무 복잡도가 올라감 => 사용처에서 추상화!(callback으로 처리)

export const useForm = () => {
  const fieldsRef = useRef<FieldRef>({});
  const [, forceUpdate] = useState({});

  const register = useCallback(
    (
      name: string,
      {
        defaultValue,
        validate,
        minLength,
        maxLength,
        readonly,
        required,
        onChange,
      }: Partial<RegisterConfig> = {}
    ) => {
      const field = fieldsRef.current[name];

      if (!field) {
        fieldsRef.current[name] = {
          value: defaultValue || '',
          error: validate ? !validate(defaultValue || '') : true,
          readonly: readonly ? 'readonly' : '',
          required: required || false,
        };
      }

      return {
        name,
        minLength,
        maxLength,
        readonly: readonly || false,
        required: required || false,
        value: fieldsRef.current[name].value,
        onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => {
          const onChangeValue = onChange && onChange(target.value);
          const value = onChangeValue || target.value;

          fieldsRef.current[name] = {
            ...fieldsRef.current[name],
            value: value,
            error: validate ? !validate(value) : false,
          };

          forceUpdate({});
        },
      };
    },
    []
  );

  const handleSubmit = useCallback(
    (onSubmitCallback: OnSubmitCallback) =>
      (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const values = getValues();
        const errors = getErrors();

        const isValid = validateFields({
          values,
          errors,
        });

        if (!isValid) return;

        onSubmitCallback(values);
      },
    []
  );

  const validateFields = useCallback(
    ({ values, errors }: { values: Values; errors: Errors }) => {
      const hasError = Object.keys(errors).some((name) => errors[name]);

      if (hasError) {
        console.log('error!');

        return false;
      }

      const hasRequiredButEmpty = Object.keys(values).some(
        (name) => fieldsRef.current[name].required && !values[name]
      );

      if (hasRequiredButEmpty) {
        console.log('required!');

        return false;
      }

      return true;
    },
    []
  );

  const getValues = useCallback(() => {
    return Object.keys(fieldsRef.current).reduce((valuesAcc, name) => {
      const field = fieldsRef.current[name];

      valuesAcc[name] = field.value;

      return valuesAcc;
    }, {} as Values);
  }, []);

  const getErrors = useCallback(() => {
    return Object.keys(fieldsRef.current).reduce((acc, name) => {
      const field = fieldsRef.current[name];

      acc[name] = field.error;

      return acc;
    }, {} as Errors);
  }, []);

  return { register, handleSubmit, values: getValues(), errors: getErrors() };
};
