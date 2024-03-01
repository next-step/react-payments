import { Input } from '@/components/input/Input';
import { useInputFields } from '@/hooks/useInputFields';
import { CARD_NUMBER } from './cardNumber.constant';
import { INPUT } from '@/components/input/input.constant';

export const CardNumber = () => {
  const {
    fields: numberFields,
    autoFocusRef,
    onFieldChange,
    fulfilled,
  } = useInputFields({
    fieldAmount: Object.values(CARD_NUMBER.FIELDS).length,
    type: CARD_NUMBER.TYPE,
    maxLength: CARD_NUMBER.MAX_LENGTH,
  });

  const optionalClassName = fulfilled ? 'text-fulfilled' : '';

  const eachFieldFulfilled = numberFields.map(
    (field) => field.length === CARD_NUMBER.MAX_LENGTH
  );

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
            ref={autoFocusRef[fieldIndex]}
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
