import { useFormContext } from '@/context/Form';
import { FormType } from '@/type/formType';
import { Input } from '../atoms/Input';

export default function CardNumber() {
  const { getFieldProps, touched, errors } = useFormContext<FormType>();

  return (
    <>
      <Input.Container>
        <Input.Title>카드 번호</Input.Title>
        <Input.Box>
          <Input type='text' maxLength={4} {...getFieldProps('cardNumber1')} />
          <div>-</div>
          <Input type='text' maxLength={4} {...getFieldProps('cardNumber2')} />
          <div>-</div>
          <Input
            type='password'
            maxLength={4}
            {...getFieldProps('cardNumber3')}
          />
          <div>-</div>
          <Input
            type='password'
            maxLength={4}
            {...getFieldProps('cardNumber4')}
          />
        </Input.Box>
      </Input.Container>

      {touched.cardNumber1 && errors.cardNumber1 && (
        <span>{errors.cardNumber1}</span>
      )}
    </>
  );
}
