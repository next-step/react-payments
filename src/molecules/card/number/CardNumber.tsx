import { Input } from '@/components/input/Input';
import { useInputFields } from '@/hooks/useInputFields';
import { CARD_NUMBER } from './cardNumber.constant';
import { INPUT } from '@/components/input/input.constant';

export const CardNumber = () => {
  const {
    fields: numberFields,
    autoFocusRefs,
    onFieldChange,
    fieldsFulfilled,
  } = useInputFields([
    CARD_NUMBER.FIELDS.FIRST,
    CARD_NUMBER.FIELDS.SECOND,
    CARD_NUMBER.FIELDS.THIRD,
    CARD_NUMBER.FIELDS.FOURTH,
  ]);

  const optionalClassName = fieldsFulfilled.every((field) => field)
    ? 'text-fulfilled'
    : '';

  const eachFieldFulfilled = numberFields.map((field) => field.length === 4);

  return (
    <Input.Container>
      <Input.Title>{CARD_NUMBER.TITLE}</Input.Title>
      <Input.Box
        separator={{
          symbol: INPUT.BOX.SEPARATOR.HYPHEN,
          eachFieldFulfilled,
        }}
      >
        {Object.values(CARD_NUMBER.FIELDS).map((field, fieldIndex) => (
          <Input
            key={field.ID}
            type={field.TYPE}
            ref={autoFocusRefs[fieldIndex]}
            value={numberFields[fieldIndex]}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onFieldChange(event, fieldIndex)
            }
            className={`w-25 ${optionalClassName}`}
          />
        ))}
      </Input.Box>
    </Input.Container>
  );
};
