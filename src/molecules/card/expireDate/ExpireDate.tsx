import { Input } from '@/components/input/Input';
import { INPUT } from '@/components/input/input.constant';
import { useInputFields } from '@/hooks/useInputFields';
import { EXPIRE_DATE } from './expireDate.constant';
import {
  CardFulfilledAction,
  CardFulfilledForm,
} from '@/pages/Payments/funnel';
import { useEffect } from 'react';

export const ExpireDate = ({
  onFulfilled,
}: {
  onFulfilled: CardFulfilledAction;
}) => {
  const { fields, autoFocusRefs, onFieldChange, fieldsFulfilled } =
    useInputFields(Object.values(EXPIRE_DATE.FIELDS));

  const allFieldsFulfilled = fieldsFulfilled.every((field) => field);

  useEffect(() => {
    onFulfilled((fields: CardFulfilledForm) => {
      return {
        ...fields,
        expireDate: allFieldsFulfilled,
      };
    });
  }, [allFieldsFulfilled]);

  const optionalClassName = allFieldsFulfilled ? 'text-fulfilled' : '';

  return (
    <Input.Container>
      <Input.Title>{EXPIRE_DATE.TITLE}</Input.Title>
      <Input.Box
        separator={{
          symbol: INPUT.BOX.SEPARATOR.SLASH,
          fieldsFulfilled,
        }}
        className='w-50'
      >
        {Object.values(EXPIRE_DATE.FIELDS).map((field, fieldIndex) => (
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
