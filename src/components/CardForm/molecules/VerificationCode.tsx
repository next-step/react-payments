import { useFormContext } from '@/context/Form';
import { FormType } from '@/type/formType';
import { Input } from '../atoms/Input';

export default function VerificationCode() {
  const { getFieldProps, touched, errors } = useFormContext<FormType>();

  return (
    <>
      <Input.Container>
        <Input.Title>보안코드(CVC/CVV)</Input.Title>
        <Input
          type='password'
          className='w-25'
          maxLength={3}
          {...getFieldProps('verificationCode')}
        />
      </Input.Container>

      {errors.verificationCode && touched.verificationCode && (
        <span>{errors.verificationCode}</span>
      )}
    </>
  );
}
