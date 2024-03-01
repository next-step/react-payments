import { Input } from '@/components/input/Input';
import { useInputFields } from '@/hooks/useInputFields';
import { OWNER_NAME } from './ownerName.constant';

export const OwnerName = () => {
  const { fields, autoFocusRefs, onFieldChange, fieldsFulfilled } =
    useInputFields(Object.values(OWNER_NAME.FIELDS));

  const optionalClassName = fieldsFulfilled.every((field) => field)
    ? 'text-fulfilled'
    : '';

  return (
    <Input.Container>
      <Input.Title>{OWNER_NAME.TITLE}</Input.Title>
      <Input.Box>
        {Object.values(OWNER_NAME.FIELDS).map((field, fieldIndex) => (
          <Input
            key={field.ID}
            type={field.TYPE}
            ref={autoFocusRefs[fieldIndex]}
            value={fields[fieldIndex]}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onFieldChange(event, fieldIndex)
            }
            placeholder={field.PLACEHOLDER}
            className={optionalClassName}
          />
        ))}
      </Input.Box>
    </Input.Container>
  );
};
