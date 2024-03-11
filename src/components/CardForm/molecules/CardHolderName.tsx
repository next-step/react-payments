import { FormType } from '@/type/formType';
import { useFormContext } from '@/context/Form';
import { CARD_HOLDER_NAEM_MAX_LENGTH } from '@/utils/cardValidations';
import { Input } from '../atoms/Input';

export default function CardHolderName() {
  const {
    getFieldProps,
    errors,
    touched,
    values: { cardHolderName },
  } = useFormContext<FormType>();

  return (
    <>
      <Input.Container>
        <div className='input-space-between'>
          <Input.Title>카드 소유자 이름(선택)</Input.Title>
          <Input.Title>{`${cardHolderName.length}/${CARD_HOLDER_NAEM_MAX_LENGTH}`}</Input.Title>
        </div>
        <Input
          type='text'
          maxLength={CARD_HOLDER_NAEM_MAX_LENGTH}
          placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
          {...getFieldProps('cardHolderName')}
        />
      </Input.Container>

      {errors.cardHolderName && touched.cardHolderName && (
        <span>{errors.cardHolderName}</span>
      )}
    </>
  );
}
