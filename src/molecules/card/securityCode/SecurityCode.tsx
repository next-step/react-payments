import { useInputFields } from '@/hooks/useInputFields';
import { SECURITY_CODE } from './securityCode.constant';
import { Input } from '@/components/input/Input';
import { useEffect } from 'react';
import {
  CardFulfilledAction,
  CardFulfilledForm,
} from '@/pages/Payments/funnel';

export const SecurityCode = ({
  onFulfilled,
}: {
  onFulfilled: CardFulfilledAction;
}) => {
  const { fields, autoFocusRefs, onFieldChange, fieldsFulfilled } =
    useInputFields(Object.values(SECURITY_CODE.FIELDS));

  const allFieldsFulfilled = fieldsFulfilled.every((field) => field);

  useEffect(() => {
    onFulfilled((fields: CardFulfilledForm) => {
      return {
        ...fields,
        securityCode: allFieldsFulfilled,
      };
    });
  }, [allFieldsFulfilled]);

  const optionalClassName = allFieldsFulfilled ? 'text-fulfilled' : '';

  return (
    <Input.Container>
      <Input.Title>{SECURITY_CODE.TITLE}</Input.Title>
      {Object.values(SECURITY_CODE.FIELDS).map((field, fieldIndex) => (
        <Input
          key={field.ID}
          type={field.TYPE}
          ref={autoFocusRefs[fieldIndex]}
          value={fields[fieldIndex]}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onFieldChange(event, fieldIndex)
          }
          placeholder={field.PLACEHOLDER}
          className={`w-25 ${optionalClassName}`}
        />
      ))}
    </Input.Container>
  );
};
