import { Input } from '@components/molecules/Input/Input';
import { CardFormProps } from '@/type/formType';
import { allTouched, findErrorMessage, hasErrors } from '@/utils/form';

export default function CardNumber({
  getFieldProps,
  touched,
  errors,
  autoFocusMethods,
}: CardFormProps) {
  const { autoFocusRefs } = autoFocusMethods;

  const cardNumberErrors = [
    errors.cardNumber1,
    errors.cardNumber2,
    errors.cardNumber3,
    errors.cardNumber4,
  ];
  const cardNumberTouched = [
    touched.cardNumber1,
    touched.cardNumber2,
    touched.cardNumber3,
    touched.cardNumber4,
  ];

  const hasCardNumberErrors = hasErrors(cardNumberErrors);
  const allCardNumberTouched = allTouched(cardNumberTouched);
  const cardNumberErrorMessage = findErrorMessage(cardNumberErrors);

  return (
    <>
      <Input.Container>
        <Input.Header>
          <Input.Title>카드 번호</Input.Title>
          {hasCardNumberErrors && allCardNumberTouched && (
            <Input.ErrorMessage errorMessage={cardNumberErrorMessage} />
          )}
        </Input.Header>

        <Input.Box>
          <Input
            type='text'
            maxLength={4}
            ref={autoFocusRefs[1] ?? null}
            {...getFieldProps('cardNumber1')}
          />
          <div>-</div>
          <Input
            type='text'
            maxLength={4}
            ref={autoFocusRefs[2] ?? null}
            {...getFieldProps('cardNumber2')}
          />
          <div>-</div>
          <Input
            type='password'
            maxLength={4}
            ref={autoFocusRefs[3] ?? null}
            {...getFieldProps('cardNumber3')}
          />
          <div>-</div>
          <Input
            type='password'
            maxLength={4}
            ref={autoFocusRefs[4] ?? null}
            {...getFieldProps('cardNumber4')}
          />
        </Input.Box>
      </Input.Container>
    </>
  );
}
