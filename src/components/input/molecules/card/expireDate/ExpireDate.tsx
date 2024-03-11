import { Input } from '@/components/input/Input';
import { INPUT } from '@/components/input/input.constant';
import { FormMethodsProps } from '@/hooks/useForm/useForm';
import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';
import { EXPIRE_DATE } from './expireDate.constant';

export const ExpireDate = ({ formMethods }: FormMethodsProps) => {
  const { register, errors } = formMethods;
  const { autoFocusRefs, handleAutoFocus } = useAutoFocus({
    amount: Object.values(EXPIRE_DATE.FIELDS).length,
  });

  const fieldKeys = Object.values(EXPIRE_DATE.FIELDS).map(({ name }) => name);
  const fieldsFulfilled = Object.values(fieldKeys).map((key) => !errors[key]);
  const allFieldsFulfilled = fieldsFulfilled.every((field) => field);
  const optionalClassName = allFieldsFulfilled ? 'text-fulfilled' : '';

  return (
    <Input.Container>
      <Input.Title>{EXPIRE_DATE.TITLE}</Input.Title>
      <Input.Box
        separator={{
          symbol: INPUT.BOX.SEPARATOR.SLASH,
          fieldsFulfilled,
        }}
        className='w-50'
      >
        {Object.values(EXPIRE_DATE.FIELDS).map(
          ({ name, type, validate, maxLength, placeholder }, fieldIndex) => (
            <Input
              key={name}
              type={type}
              ref={autoFocusRefs[fieldIndex]}
              placeholder={placeholder}
              className={optionalClassName}
              {...register(name, {
                maxLength,
                validate,
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
            />
          )
        )}
      </Input.Box>
    </Input.Container>
  );
};
