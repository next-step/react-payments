import { useFormContext } from '@/context/Form';
import { FormType } from '@/type/formType';
import { Input } from '../atoms/Input';

export default function PinNumber() {
  const { getFieldProps, touched, errors } = useFormContext<FormType>();

  return (
    <>
      <Input.Container>
        <Input.Title>카드 비밀번호</Input.Title>
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
      </Input.Container>

      {errors.pinNumber1 && touched.pinNumber1 && (
        <span>{errors.pinNumber1}</span>
      )}
    </>
  );
}
