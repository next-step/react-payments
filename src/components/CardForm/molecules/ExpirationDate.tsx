import { useFormContext } from '@/context/Form';
import Input from '../atoms/Input';
import InputBox from '../atoms/InputBox';
import InputContainer from '../atoms/InputContainer';
import InputTitle from '../atoms/InputTitle';
import { FormType } from '@/type/formType';

export default function ExpirationDate() {
  const { getFieldProps, touched, errors } = useFormContext<FormType>();

  return (
    <>
      <InputContainer>
        <InputTitle>만료일</InputTitle>
        <InputBox className='w-50'>
          <Input
            type='text'
            placeholder='MM'
            maxLength={2}
            {...getFieldProps('expirationMonth')}
          />
          <span>/</span>
          <Input
            type='text'
            placeholder='YY'
            maxLength={2}
            {...getFieldProps('expirationYear')}
          />
        </InputBox>
      </InputContainer>

      {errors.expirationMonth && touched.expirationMonth && (
        <span>{errors.expirationMonth}</span>
      )}
    </>
  );
}
