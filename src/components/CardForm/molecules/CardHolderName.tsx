import { FormType } from '@/type/formType';
import Input from '../atoms/Input';
import InputContainer from '../atoms/InputContainer';
import InputTitle from '../atoms/InputTitle';
import { useFormContext } from '@/context/Form';

export default function CardHolderName() {
  const { getFieldProps, errors, touched } = useFormContext<FormType>();

  return (
    <>
      <InputContainer>
        <InputTitle>카드 소유자 이름(선택)</InputTitle>
        <Input
          type='text'
          maxLength={30}
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
