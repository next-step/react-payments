import { useCallback, useRef, useState } from 'react';

export interface formMethodsProps {
  formMethods: ReturnType<typeof useForm>;
}

type OnSubmitCallback = (values: Values) => void;
type SubmitEvent = React.FormEvent<HTMLFormElement>;

interface Field {
  value: string;
  error: boolean; // 추후 에러메시지 추가
  readonly?: string;
  required?: boolean;
}

type Values = { [key: string]: string };
type Errors = { [key: string]: boolean };

interface RegisterConfig {
  defaultValue: string;
  readonly: boolean;
  required: boolean;
  validate: (value: string) => boolean;
}

interface FieldRef {
  [key: string]: Field;
}

export const useForm = () => {
  const fieldsRef = useRef<FieldRef>({});
  const [, forceUpdate] = useState({});

  const register = useCallback(
    (
      name: string,
      {
        defaultValue,
        validate,
        readonly,
        required,
      }: Partial<RegisterConfig> = {}
    ) => {
      const field = fieldsRef.current[name];
      if (!field) {
        fieldsRef.current[name] = {
          value: defaultValue || '',
          // FIXME: validate 함수가 반환하는 값이 true면 유효한 값임. 헷갈리니 message로 변경
          error: validate ? !validate(defaultValue || '') : true, // customErroor {@link https://developer.mozilla.org/en-US/docs/Web/API/ValidityState#customerror}
          readonly: readonly ? 'readonly' : '',
          required: required || false,
        };
      }

      return {
        name,
        onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => {
          const { value } = target;

          const error = validate ? !validate(value) : true;
          fieldsRef.current[name] = { value, error };
          forceUpdate({});
        },
        readOnly: readonly ? 'readonly' : undefined,
      };
    },
    []
  );

  const handleSubmit = useCallback(
    (onSubmitCallback: OnSubmitCallback) => (event: SubmitEvent) => {
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

// 최적화 이전 코드
// export const useForm = () => {
//   const [fields, setFields] = useState<{ [key: string]: Field }>({});

//   const register = useCallback(
//     (name: string, config: Partial<RegisterConfig> = {}) => {
//       if (!fields[name]) {
//         setFields((prevFields) => ({
//           ...prevFields,
//           [name]: {
//             value: config.defaultValue || '',
//             error: config?.validate ? !config.validate('') : false,
//           },
//         }));
//       }

//       const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
//         const { value } = target;
//         const error = config.validate ? !config.validate(value) : false;

//         setFields((prevFields) => ({
//           ...prevFields,
//           [name]: { value, error },
//         }));
//       };

//       return {
//         name,
//         onChange,
//         readOnly: config.readonly ? 'readonly' : undefined,
//       };
//     },
//     [fields]
//   );

//   const handleSubmit = useCallback(
//     (onSubmitCallback: OnSubmitCallback) => (event: SubmitEvent) => {
//       event.preventDefault();
//       const hasError = Object.values(fields).some((field) => field.error);

//       if (!hasError) {
//         onSubmitCallback(
//           Object.entries(fields).reduce(
//             (acc, [name, field]) => ({
//               ...acc,
//               [name]: field.value,
//             }),
//             {}
//           )
//         );
//       }
//     },
//     [fields]
//   );

//   const values = Object.entries(fields).reduce(
//     (acc, [name, field]) => ({ ...acc, [name]: field.value }),
//     {}
//   );
//   const errors = Object.entries(fields).reduce(
//     (acc, [name, field]) => ({ ...acc, [name]: field.error }),
//     {}
//   );

//   return { register, handleSubmit, values, errors };
// };
