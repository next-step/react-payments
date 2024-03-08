import { FormType } from '@/type/formType';
import Input from '../atoms/Input';
import InputContainer from '../atoms/InputContainer';
import InputTitle from '../atoms/InputTitle';
import { useFormContext } from '@/context/Form';
import { CARD_HOLDER_NAEM_MAX_LENGTH } from '@/utils/cardValidations';

export default function CardHolderName() {
  const {
    getFieldProps,
    errors,
    touched,
    values: { cardHolderName },
  } = useFormContext<FormType>();

  return (
    <>
      <InputContainer>
        <div className='input-space-between'>
          <InputTitle>카드 소유자 이름(선택)</InputTitle>
          <InputTitle>{`${cardHolderName.length}/${CARD_HOLDER_NAEM_MAX_LENGTH}`}</InputTitle>
        </div>
        <Input
          type='text'
          maxLength={CARD_HOLDER_NAEM_MAX_LENGTH}
          placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
          {...getFieldProps('cardHolderName')}
        />
      </InputContainer>

      {errors.cardHolderName && touched.cardHolderName && (
        <span>{errors.cardHolderName}</span>
      )}
    </>
  );
}
