import { useInputFields } from '@/hooks/useInputFields';
import { PASSWORD } from './password.constant';
import { Input } from '@/components/input/Input';

export const Password = () => {
  const {
    fields: passwordFields,
    autoFocusRefs,
    onFieldChange,
    fieldsFulfilled,
  } = useInputFields(Object.values(PASSWORD.FIELDS));

  const optionalClassName = fieldsFulfilled.every((field) => field)
    ? 'text-fulfilled'
    : '';

  return (
    <Input.Container>
      <Input.Title>{PASSWORD.TITLE}</Input.Title>
      {Object.values(PASSWORD.FIELDS).map((field, fieldIndex) => (
        <Input
          key={field.ID}
          type={field.TYPE}
          ref={autoFocusRefs[fieldIndex]}
          value={passwordFields[fieldIndex]}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onFieldChange(event, fieldIndex)
          }
          className={`w-15 ${optionalClassName}`}
        />
      ))}
    </Input.Container>
  );
};
