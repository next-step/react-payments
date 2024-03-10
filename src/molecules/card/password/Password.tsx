import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';
import { PASSWORD } from './password.constant';
import { Input } from '@/components/input/Input';
import { FormMethodsProps } from '@/hooks/useForm/useForm';
import { INPUT } from '@/components/input/input.constant';

export const Password = ({ formMethods }: FormMethodsProps) => {
  const { register, errors } = formMethods;
  const { autoFocusRefs, handleAutoFocus } = useAutoFocus({
    amount: Object.values(PASSWORD.FIELDS).length,
  });

  const fieldKeys = Object.values(PASSWORD.FIELDS)
    .filter(({ readOnly }) => !readOnly)
    .map(({ name }) => name);
  const fieldsFulfilled = Object.values(fieldKeys).map((key) => !errors[key]);
  const allFieldsFulfilled = fieldsFulfilled.every((field) => field);
  const optionalClassName = allFieldsFulfilled ? 'text-fulfilled' : '';

  return (
    <Input.Container>
      <Input.Title>{PASSWORD.TITLE}</Input.Title>
      {Object.values(PASSWORD.FIELDS).map(
        (
          { name, type, validate, maxLength, readOnly, defaultValue },
          fieldIndex
        ) => (
          <Input
            key={name}
            type={type}
            ref={autoFocusRefs[fieldIndex]}
            {...register(name, {
              maxLength,
              validate,
              readOnly,
              defaultValue,
              onChange: (value: string) => {
                const parsedValue = value.replace(INPUT.REGEX.DIGIT, '');

                if (maxLength) {
                  handleAutoFocus({
                    value: parsedValue,
                    index: fieldIndex,
                    maxLength,
                  });
                }

                return parsedValue;
              },
            })}
            className={`w-15 ${optionalClassName} ${
              readOnly ? 'input-readonly' : ''
            }`}
          />
        )
      )}
    </Input.Container>
  );
};
