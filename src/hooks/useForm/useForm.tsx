import { useCallback, useRef, useState } from 'react';
import {
  Errors,
  FieldRef,
  OnSubmitCallback,
  RegisterConfig,
  Values,
} from './useForm.type';

export const useForm = <T extends object>() => {
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
        readOnly,
        required,
        onChange,
      }: Partial<RegisterConfig> = {}
    ) => {
      if (readOnly) {
        fieldsRef.current[name] = {
          value: defaultValue || '',
          error: false,
        };

        return {
          name,
          value: fieldsRef.current[name].value,
          readOnly: true,
        };
      }
      const field = fieldsRef.current[name];

      if (!field) {
        fieldsRef.current[name] = {
          value: defaultValue || '',
          error: validate
            ? validate(defaultValue || '')
            : 'should not be empty',
        };
      }

      return {
        name,
        minLength,
        maxLength,
        readOnly,
        required,
        value: fieldsRef.current[name].value,
        onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => {
          const onChangeValue = onChange && onChange(target.value);
          const value =
            onChangeValue === undefined ? target.value : onChangeValue;

          fieldsRef.current[name] = {
            ...fieldsRef.current[name],
            value: value,
            error: validate ? validate(value) : false,
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
    ({ values, errors }: { values: Values<T>; errors: Errors<T> }) => {
      const hasError = Object.keys(errors).some(
        (name) => errors[name as keyof T]
      );

      if (hasError) {
        console.log('error!');

        return false;
      }

      const hasRequiredButEmpty = Object.keys(values).some(
        (name) => fieldsRef.current[name].required && !values[name as keyof T]
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

      valuesAcc[name as keyof T] = field.value as T[keyof T];

      return valuesAcc;
    }, {} as Values<T>);
  }, []);

  const getErrors = useCallback(() => {
    return Object.keys(fieldsRef.current).reduce((acc, name) => {
      const field = fieldsRef.current[name];

      acc[name as keyof T] = field.error;

      return acc;
    }, {} as Errors<T>);
  }, []);

  return { register, handleSubmit, values: getValues(), errors: getErrors() };
};
