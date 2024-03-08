import { useFormContext } from '@/context/Form';
import Input from '../atoms/Input';
import InputBox from '../atoms/InputBox';
import InputContainer from '../atoms/InputContainer';
import InputTitle from '../atoms/InputTitle';
import { FormType } from '@/type/formType';

export default function CardNumber() {
  const { getFieldProps, touched, errors } = useFormContext<FormType>();

  return (
    <>
      <InputContainer>
        <InputTitle>카드 번호</InputTitle>
        <InputBox>
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
        </InputBox>
      </InputContainer>

      {touched.cardNumber1 && errors.cardNumber1 && (
        <span>{errors.cardNumber1}</span>
      )}
    </>
  );
}
