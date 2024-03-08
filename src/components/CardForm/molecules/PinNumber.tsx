import { useFormContext } from '@/context/Form';
import Input from '../atoms/Input';
import InputContainer from '../atoms/InputContainer';
import InputTitle from '../atoms/InputTitle';
import { FormType } from '@/type/formType';

export default function PinNumber() {
  const { getFieldProps, touched, errors } = useFormContext<FormType>();

  return (
    <>
      <InputContainer>
        <InputTitle>카드 비밀번호</InputTitle>
        <Input
          type='text'
          className='w-15'
          maxLength={1}
          {...getFieldProps('pinNumber1')}
        />
        <Input
          type='text'
          className='w-15'
          maxLength={1}
          {...getFieldProps('pinNumber2')}
        />
        <Input type='password' className='w-15' value={0} readOnly />
        <Input type='password' className='w-15' value={0} readOnly />
      </InputContainer>

      {errors.pinNumber1 && touched.pinNumber1 && (
        <span>{errors.pinNumber1}</span>
      )}
    </>
  );
}
