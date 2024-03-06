import { Input } from '@/components/input/Input';
import { CARD_NUMBER } from './cardNumber.constant';
import { INPUT } from '@/components/input/input.constant';
import { formMethodsProps } from '@/hooks/useForm/useForm';

export const CardNumber = ({ formMethods }: formMethodsProps) => {
  const { register, errors } = formMethods;

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
              {...register(ID, {
                maxLength,
                validate,
                onChange: (value: string) => {
                  return value.replace(INPUT.REGEX.DIGIT, '');
                },
              })}
            />
          )
        )}
      </Input.Box>
    </Input.Container>
  );
};
