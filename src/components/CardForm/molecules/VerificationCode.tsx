import { useFormContext } from '@/context/Form';
import Input from '../atoms/Input';
import InputContainer from '../atoms/InputContainer';
import InputTitle from '../atoms/InputTitle';
import { FormType } from '@/type/formType';

export default function VerificationCode() {
  const { getFieldProps, touched, errors } = useFormContext<FormType>();

  return (
    <>
      <InputContainer>
        <InputTitle>보안코드(CVC/CVV)</InputTitle>
        <Input
          type='password'
          className='w-25'
          maxLength={3}
          {...getFieldProps('verificationCode')}
        />
      </InputContainer>

      {errors.verificationCode && touched.verificationCode && (
        <span>{errors.verificationCode}</span>
      )}
    </>
  );
}
