import { useInputFields } from '@/hooks/useInputFields';
import { PASSWORD } from './password.constant';
import { Input } from '@/components/input/Input';
import { useEffect } from 'react';
import {
  CardFulfilledAction,
  CardFulfilledForm,
} from '@/pages/Payments/funnel';

export const Password = ({
  onFulfilled,
}: {
  onFulfilled: CardFulfilledAction;
}) => {
  const {
    fields: passwordFields,
    autoFocusRefs,
    onFieldChange,
    fieldsFulfilled,
  } = useInputFields(Object.values(PASSWORD.FIELDS));

  const allFieldsFulfilled = fieldsFulfilled.every((field) => field);

  useEffect(() => {
    onFulfilled((fields: CardFulfilledForm) => {
      return {
        ...fields,
        password: allFieldsFulfilled,
      };
    });
  }, [allFieldsFulfilled]);

  const optionalClassName = allFieldsFulfilled ? 'text-fulfilled' : '';

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
