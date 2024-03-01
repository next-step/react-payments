import { Input } from '@/components/input/Input';
import { INPUT } from '@/components/input/input.constant';
import { useInputFields } from '@/hooks/useInputFields';
import { CARD_NUMBER } from './cardNumber.constant';

export const CardNumber = () => {
  const {
    value: numberFields,
    inputRefs,
    onFieldChange,
  } = useInputFields({
    amount: Object.values(CARD_NUMBER.FIELDS).length,
    type: CARD_NUMBER.TYPE,
    maxLength: CARD_NUMBER.MAX_LENGTH,
  });

  return (
    <Input.Container>
      <Input.Title>{CARD_NUMBER.TITLE}</Input.Title>
      <Input.Box separator={INPUT.BOX.SEPARATOR.SLASH}>
        {Object.values(CARD_NUMBER.FIELDS).map((field, fieldIndex) => (
          <Input
            key={field.ID}
            type={field.TYPE}
            ref={inputRefs[fieldIndex]}
            value={numberFields[fieldIndex]}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onFieldChange(event, fieldIndex)
            }
            className='w-25'
          />
        ))}
      </Input.Box>
    </Input.Container>
  );
};
