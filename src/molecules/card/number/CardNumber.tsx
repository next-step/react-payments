import { Input } from '@/components/input/Input';
import { CARD_NUMBER } from './cardNumber.constant';
import { INPUT } from '@/components/input/input.constant';
import { formMethodsProps } from '@/hooks/useForm/useForm';
import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';

export const CardNumber = ({ formMethods }: formMethodsProps) => {
  const { register, errors } = formMethods;
  const { autoFocusRefs, handleAutoFocus } = useAutoFocus({
    amount: Object.values(CARD_NUMBER.FIELDS).length,
  });

  const allFieldsFulfilled = Object.values(errors).every((error) => !error);

  const optionalClassName = allFieldsFulfilled ? 'text-fulfilled' : '';

  return (
    <Input.Container>
      <Input.Title>{CARD_NUMBER.TITLE}</Input.Title>
      <Input.Box
        separator={{
          symbol: INPUT.BOX.SEPARATOR.HYPHEN,
          fieldsFulfilled: Array.from({ length: 4 }, () => allFieldsFulfilled),
        }}
      >
        {Object.values(CARD_NUMBER.FIELDS).map(
          ({ ID, TYPE, validate, maxLength }, fieldIndex) => (
            <Input
              key={`${ID}_${fieldIndex}`}
              type={TYPE}
              className={`w-25 ${optionalClassName}`}
              ref={autoFocusRefs[fieldIndex]}
              {...register(ID, {
                maxLength,
                validate,
                onChange: (value: string) => {
                  const parsedValue = value.replace(INPUT.REGEX.DIGIT, '');

                  handleAutoFocus({
                    value: parsedValue,
                    index: fieldIndex,
                    maxLength: maxLength,
                  });
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
