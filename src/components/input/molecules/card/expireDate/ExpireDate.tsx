import { Input } from '@/components/input/Input';
import { INPUT } from '@/components/input/input.constant';
import { CardInputProps } from '../cardInput.type';
import { EXPIRE_DATE } from './expireDate.constant';

export const ExpireDate = ({
  formMethods,
  autoFocusMethods,
}: CardInputProps) => {
  const { register, errors } = formMethods;
  const { autoFocusRefs, handleAutoFocus } = autoFocusMethods;

  const fieldKeys = Object.values(EXPIRE_DATE.FIELDS).map(({ name }) => name);
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
        title={EXPIRE_DATE.TITLE}
        hasError={fieldErrors.length > 0}
        errorMessage={errorMessage}
      />

      <Input.Box
        separator={{
          symbol: INPUT.BOX.SEPARATOR.SLASH,
          fieldsFulfilled,
        }}
        className='w-50'
      >
        {Object.values(EXPIRE_DATE.FIELDS).map(
          ({
            name,
            type,
            validate,
            maxLength,
            placeholder,
            autoFocusIndex,
          }) => (
            <Input
              key={name}
              type={type}
              ref={autoFocusIndex ? autoFocusRefs[autoFocusIndex] : null}
              placeholder={placeholder}
              className={optionalClassName}
              {...register(name, {
                maxLength,
                validate,
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
            />
          )
        )}
      </Input.Box>
    </Input.Container>
  );
};
