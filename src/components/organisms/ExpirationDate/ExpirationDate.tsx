import { FocusEvent } from 'react';
import { Input } from '@components/molecules/Input/Input';
import { CardFormProps } from '@/type/formType';
import { allTouched, findErrorMessage, hasErrors } from '@/utils/form';
import { formatMonth } from '@/utils/formatter';

export default function ExpirationDate({
  getFieldProps,
  touched,
  errors,
  autoFocusMethods,
}: CardFormProps) {
  const { autoFocusRefs } = autoFocusMethods;

  const expirationDateErrors = [errors.expirationMonth, errors.expirationYear];
  const expirationDateTouched = [
    touched.expirationMonth,
    touched.expirationYear,
  ];

  const handleExpirationMonthBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { onBlur } = { ...getFieldProps('expirationMonth') };

    onBlur(e, { formatter: formatMonth });
  };

  const hasExpirationDateErrors = hasErrors(expirationDateErrors);
  const allExpirationDateTouched = allTouched(expirationDateTouched);
  const expirationDateErrorMessage = findErrorMessage(expirationDateErrors);

  return (
    <Input.Container>
      <Input.Header>
        <Input.Title>만료일</Input.Title>
        {hasExpirationDateErrors && allExpirationDateTouched && (
          <Input.ErrorMessage errorMessage={expirationDateErrorMessage} />
        )}
      </Input.Header>

      <Input.Box className='w-50'>
        <Input
          type='text'
          placeholder='MM'
          maxLength={2}
          ref={autoFocusRefs[5] ?? null}
          {...getFieldProps('expirationMonth')}
        />
        <span>/</span>
        <Input
          type='text'
          placeholder='YY'
          maxLength={2}
          ref={autoFocusRefs[6] ?? null}
          {...getFieldProps('expirationYear')}
          onBlur={handleExpirationMonthBlur}
        />
      </Input.Box>
    </Input.Container>
  );
}
