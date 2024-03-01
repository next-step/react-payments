import { Input } from '@/components/input/Input';
import { INPUT } from '@/components/input/input.constant';
import { INPUT_FIELDS, useInputFields } from '@/hooks/useInputFields';

const EXPIRE_DATE = {
  FIELDS: {
    MONTH: {
      ID: 'expire-date-month',
      TYPE: INPUT.TYPE.TEXT,
      PLACEHOLDER: 'MM',
    },
    YEAR: {
      ID: 'expire-date-year',
      TYPE: INPUT.TYPE.TEXT,
      PLACEHOLDER: 'YY',
    },
  },
  TITLE: '만료일',
  TYPE: INPUT_FIELDS.NUMBER.TYPE,
  MAX_LENGTH: 2,
};

export const ExpireDate = () => {
  const { fields, autoFocusRef, onFieldChange, fulfilled } = useInputFields({
    fieldAmount: Object.values(EXPIRE_DATE.FIELDS).length,
    type: EXPIRE_DATE.TYPE,
    maxLength: EXPIRE_DATE.MAX_LENGTH,
  });

  const optionalClassName = fulfilled ? 'text-fulfilled' : '';

  const eachFieldFulfilled = fields.map(
    (field) => field.length === EXPIRE_DATE.MAX_LENGTH
  );

  return (
    <Input.Container>
      <Input.Title>만료일</Input.Title>
      <Input.Box
        separator={{
          symbol: INPUT.BOX.SEPARATOR.SLASH,
          eachFieldFulfilled: eachFieldFulfilled,
        }}
        className='w-50'
      >
        {Object.values(EXPIRE_DATE.FIELDS).map((field, fieldIndex) => (
          <Input
            key={field.ID}
            type={field.TYPE}
            ref={autoFocusRef[fieldIndex]}
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
