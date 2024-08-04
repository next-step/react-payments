import { Input } from '@components/molecules/Input/Input';
import { CardFormProps } from '@/type/formType';
import { allTouched, findErrorMessage, hasErrors } from '@/utils/form';

export default function VerificationCode({
  getFieldProps,
  touched,
  errors,
  autoFocusMethods,
}: CardFormProps) {
  const { autoFocusRefs } = autoFocusMethods;

  const verificationCodeErrors = [errors.verificationCode];
  const verificationCodeTouched = [touched.verificationCode];

  const hasVerificationCodeErrors = hasErrors(verificationCodeErrors);
  const allVerificationCodeTouched = allTouched(verificationCodeTouched);
  const verificationCodeErrorMessage = findErrorMessage(verificationCodeErrors);

  return (
    <Input.Container>
      <Input.Header>
        <Input.Title>보안코드(CVC/CVV)</Input.Title>
        {hasVerificationCodeErrors && allVerificationCodeTouched && (
          <Input.ErrorMessage errorMessage={verificationCodeErrorMessage} />
        )}
      </Input.Header>

      <Input
        type='password'
        className='w-25'
        maxLength={3}
        ref={autoFocusRefs[8] ?? null}
        {...getFieldProps('verificationCode')}
      />
    </Input.Container>
  );
}
