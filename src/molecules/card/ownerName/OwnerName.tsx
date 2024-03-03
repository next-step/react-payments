import { Input } from '@/components/input/Input';
import { useInputFields } from '@/hooks/useInputFields';
import { OWNER_NAME } from './ownerName.constant';
import { useEffect } from 'react';
import {
  CardFulfilledAction,
  CardFulfilledForm,
} from '@/pages/Payments/funnel';

export const OwnerName = ({
  onFulfilled,
}: {
  onFulfilled: CardFulfilledAction;
}) => {
  const { fields, autoFocusRefs, onFieldChange, fieldsFulfilled } =
    useInputFields(Object.values(OWNER_NAME.FIELDS));

  const allFieldsFulfilled = fieldsFulfilled.every((field) => field);

  useEffect(() => {
    onFulfilled((fields: CardFulfilledForm) => {
      return {
        ...fields,
        ownerName: allFieldsFulfilled,
      };
    });
  }, [allFieldsFulfilled]);

  const optionalClassName = allFieldsFulfilled ? 'text-fulfilled' : '';

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
