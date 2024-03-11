import { useFormContext } from '@/context/Form';
import { FormType } from '@/type/formType';
import { Input } from '../atoms/Input';

export default function ExpirationDate() {
  const { getFieldProps, touched, errors } = useFormContext<FormType>();

  return (
    <>
      <Input.Container>
        <Input.Title>만료일</Input.Title>
        <Input.Box className='w-50'>
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
        </Input.Box>
      </Input.Container>

      {errors.expirationMonth && touched.expirationMonth && (
        <span>{errors.expirationMonth}</span>
      )}
    </>
  );
}
