import { Input } from '@/components/input/Input';
import { INPUT } from '@/components/input/input.constant';
import { CardInputProps } from '../cardInput.type';
import { PASSWORD } from './password.constant';

export const Password = ({ formMethods, autoFocusMethods }: CardInputProps) => {
  const { register, errors } = formMethods;
  const { autoFocusRefs, handleAutoFocus } = autoFocusMethods;

  const fieldKeys = Object.values(PASSWORD.FIELDS)
    .filter(({ readOnly }) => !readOnly)
    .map(({ name }) => name);
  const fieldsFulfilled = Object.values(fieldKeys).map((key) => !errors[key]);
  const fieldErrors = Object.values(fieldKeys)
    .map((key) => errors[key])
    .filter((error) => error);
  const allFieldsFulfilled = fieldsFulfilled.every((field) => field);
  const optionalClassName = allFieldsFulfilled ? 'text-fulfilled' : '';
  const errorMessage = fieldErrors.filter((error) => error)[0] as string;

  return (
    <Input.Container>
      <Input.Header
        title={PASSWORD.TITLE}
        hasError={fieldErrors.length > 0}
        errorMessage={errorMessage}
      />

      {Object.values(PASSWORD.FIELDS).map(
        ({
          name,
          type,
          validate,
          maxLength,
          readOnly,
          defaultValue,
          autoFocusIndex,
        }) => (
          <Input
            key={name}
            type={type}
            ref={autoFocusIndex ? autoFocusRefs[autoFocusIndex] : null}
            {...register(name, {
              maxLength,
              validate,
              readOnly,
              defaultValue,
              onChange: (value: string) => {
                const parsedValue = value.replace(INPUT.REGEX.DIGIT, '');

                if (maxLength && autoFocusIndex) {
                  handleAutoFocus({
                    value: parsedValue,
                    index: autoFocusIndex,
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
