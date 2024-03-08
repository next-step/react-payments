import { Input } from '@/components/input/Input';
import { OWNER_NAME } from './ownerName.constant';
import { FormMethodsProps } from '@/hooks/useForm/useForm';
import { INPUT } from '@/components/input/input.constant';

export const OwnerName = ({ formMethods }: FormMethodsProps) => {
  const { register, values, errors } = formMethods;

  const fieldKeys = Object.values(OWNER_NAME.FIELDS).map(({ id }) => id);
  const fieldsFulfilled = Object.values(fieldKeys).map((key) => !errors[key]);
  const allFieldsFulfilled = fieldsFulfilled.every((field) => field);
  const optionalClassName = allFieldsFulfilled ? 'text-fulfilled' : '';

  const ownerNameLength = values[OWNER_NAME.FIELDS.OWNER_NAME.id]?.length;

  return (
    <Input.Container>
      <div className='flex-row-between'>
        <Input.Title>{OWNER_NAME.TITLE}</Input.Title>
        {ownerNameLength > 0 && (
          <Input.Title>{`${ownerNameLength}/${OWNER_NAME.FIELDS.OWNER_NAME.maxLength}`}</Input.Title>
        )}
      </div>
      <Input.Box>
        {Object.values(OWNER_NAME.FIELDS).map(
          ({ id, type, placeholder, maxLength }) => (
            <Input
              key={id}
              type={type}
              placeholder={placeholder}
              className={optionalClassName}
              {...register(id, {
                maxLength,
                onChange: (value: string) =>
                  value.replace(INPUT.REGEX.ALPHABET, ''),
              })}
            />
          )
        )}
      </Input.Box>
    </Input.Container>
  );
};
