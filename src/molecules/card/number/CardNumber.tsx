import { Input } from '@/components/input/Input';
import { CARD_NUMBER } from './cardNumber.constant';
import { INPUT } from '@/components/input/input.constant';
import { formMethodsProps } from '@/hooks/useForm';

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
          {Object.values(CARD_NUMBER.FIELDS).map((field, fieldIndex) => (
            <Input
              key={`${field.ID}_${fieldIndex}`}
              type={field.TYPE}
              className={`w-25 ${optionalClassName}`}
              {...register(field.ID, {
                validate: field.validation,
              })}
            />
          ))}
        </Input.Box>
      </Input.Container>
    </form>
  );
};
