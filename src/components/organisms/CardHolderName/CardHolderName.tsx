import HStack from '@components/atoms/HStack/HStack';
import { Input } from '@components/molecules/Input/Input';
import { CardFormProps, FormType } from '@/type/formType';
import { CARD_HOLDER_NAME_MAX_LENGTH } from '@/utils/cardValidations';
import { allTouched, findErrorMessage, hasErrors } from '@/utils/form';

type CardHolderNameProps = CardFormProps & {
  values: FormType;
};

export default function CardHolderName({
  getFieldProps,
  touched,
  errors,
  autoFocusMethods,
  values: { cardHolderName },
}: CardHolderNameProps) {
  const { autoFocusRefs } = autoFocusMethods;

  const cardHolderNameErrors = [errors.cardHolderName];
  const cardHolderNameTouched = [touched.cardHolderName];

  const hasCardHolderNameErrors = hasErrors(cardHolderNameErrors);
  const allCardHolderNameTouched = allTouched(cardHolderNameTouched);
  const cardHolderNameErrorMessage = findErrorMessage(cardHolderNameErrors);

  return (
    <Input.Container>
      <Input.Header>
        <Input.Title>카드 소유자 이름(선택)</Input.Title>
        <Input.Title>{`${cardHolderName.length}/${CARD_HOLDER_NAME_MAX_LENGTH}`}</Input.Title>
      </Input.Header>

      <HStack className='input-space-between'>
        {hasCardHolderNameErrors && allCardHolderNameTouched && (
          <Input.ErrorMessage errorMessage={cardHolderNameErrorMessage} />
        )}
      </HStack>

      <Input
        type='text'
        maxLength={CARD_HOLDER_NAME_MAX_LENGTH}
        ref={autoFocusRefs[7] ?? null}
        placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
        {...getFieldProps('cardHolderName')}
      />
    </Input.Container>
  );
}
