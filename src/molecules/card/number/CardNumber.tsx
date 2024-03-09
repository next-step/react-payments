import { Input } from '@/components/input/Input';
import { INPUT } from '@/components/input/input.constant';
import { FormMethodsProps } from '@/hooks/useForm/useForm';
import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';
import { CARD_NUMBER } from './cardNumber.constant';

export const CardNumber = ({ formMethods }: FormMethodsProps) => {
  const { register, errors } = formMethods;
  const { autoFocusRefs, handleAutoFocus } = useAutoFocus({
    amount: Object.values(CARD_NUMBER.FIELDS).length,
  });

  const fieldKeys = Object.values(CARD_NUMBER.FIELDS).map(({ name }) => name);
  const fieldsFulfilled = Object.values(fieldKeys).map((key) => !errors[key]);
  const allFieldsFulfilled = fieldsFulfilled.every((field) => field);
  const optionalClassName = allFieldsFulfilled ? 'text-fulfilled' : '';

  return (
    <Input.Container>
      <Input.Title>{CARD_NUMBER.TITLE}</Input.Title>
      <Input.Box
        separator={{
          symbol: INPUT.BOX.SEPARATOR.HYPHEN,
          fieldsFulfilled,
        }}
      >
        {Object.values(CARD_NUMBER.FIELDS).map(
          ({ name, type, validate, maxLength }, fieldIndex) => (
            <Input
              key={name}
              type={type}
              className={`w-25 ${optionalClassName}`}
              ref={autoFocusRefs[fieldIndex]}
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
