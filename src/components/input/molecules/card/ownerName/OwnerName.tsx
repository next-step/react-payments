import { Input } from '@/components/input/Input';
import { INPUT } from '@/components/input/input.constant';
import { CardInputProps } from '../cardInput.type';

export const OwnerName = ({
  formMethods,
  autoFocusMethods,
  fields,
}: CardInputProps) => {
  const { register, values, errors } = formMethods;
  const { autoFocusRefs } = autoFocusMethods;

  const fieldKeys = Object.values(fields.FIELDS).map(({ name }) => name);
  const fieldsFulfilled = Object.values(fieldKeys).map((key) => !errors[key]);
  const allFieldsFulfilled = fieldsFulfilled.every((field) => field);
  const optionalClassName = allFieldsFulfilled ? 'text-fulfilled' : '';

  const ownerNameLength = values[fields.FIELDS.OWNER_NAME.name]?.length;

  return (
    <Input.Container>
      <Input.Title>
        <span>{fields.TITLE}</span>
        {ownerNameLength > 0 && (
          <span className='input-title'>{`${ownerNameLength}/${fields.FIELDS.OWNER_NAME.maxLength}`}</span>
        )}
      </Input.Title>
      <Input.Box>
        {Object.values(fields.FIELDS).map(
          ({ name, type, placeholder, maxLength, autoFocusIndex }) => (
            <Input
              key={name}
              type={type}
              placeholder={placeholder}
              className={optionalClassName}
              ref={autoFocusIndex ? autoFocusRefs[autoFocusIndex] : null}
              {...register(name, {
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
