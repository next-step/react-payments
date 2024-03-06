import { Input } from '@/components/input/Input';
import { CARD_NUMBER } from './cardNumber.constant';
import { INPUT } from '@/components/input/input.constant';
import { formMethodsProps } from '@/hooks/useForm/useForm';

export const INPUT_FIELDS = {
  NUMBER: {
    TYPE: 'number',
    REGEX: /\D/g,
  },
  STRING: {
    TYPE: 'string',
    REGEX: /[^a-zA-Z]/g,
  },
} as const;

type InputFieldType = (typeof INPUT_FIELDS)[keyof typeof INPUT_FIELDS]['TYPE'];

const getRegex = (inputType: InputFieldType) => {
  return inputType === INPUT_FIELDS.NUMBER.TYPE
    ? INPUT_FIELDS.NUMBER.REGEX
    : INPUT_FIELDS.STRING.REGEX;
};

export const CardNumber = ({ formMethods }: formMethodsProps) => {
  const { register, errors, values, handleSubmit } = formMethods;

  console.log('CardNumber', values, errors);
  const allFieldsFulfilled = Object.values(errors).every((error) => !error);

  const optionalClassName = allFieldsFulfilled ? 'text-fulfilled' : '';

  const onSubmit = () => console.log('onSubmitCallback!');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button type='submit'>submit</button>
      <Input.Container>
        <Input.Title>{CARD_NUMBER.TITLE}</Input.Title>
        <Input.Box
          separator={{
            symbol: INPUT.BOX.SEPARATOR.HYPHEN,
            fieldsFulfilled: Array.from(
              { length: 4 },
              () => allFieldsFulfilled
            ),
          }}
        >
          {Object.values(CARD_NUMBER.FIELDS).map(
            ({ ID, TYPE, fieldType, validate, maxLength }, fieldIndex) => (
              <Input
                key={`${ID}_${fieldIndex}`}
                type={TYPE}
                className={`w-25 ${optionalClassName}`}
                {...register(ID, {
                  maxLength,
                  validate,
                  onChange: (value: string) => {
                    return value.replace(getRegex(fieldType), '');
                  },
                })}
              />
            )
          )}
        </Input.Box>
      </Input.Container>
    </form>
  );
};
