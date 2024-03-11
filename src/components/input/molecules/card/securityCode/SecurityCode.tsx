import { Input } from '@/components/input/Input';
import { FormMethodsProps } from '@/hooks/useForm/useForm';
import { SECURITY_CODE } from './securityCode.constant';

export const SecurityCode = ({ formMethods }: FormMethodsProps) => {
  const { register, errors } = formMethods;

  const fieldKeys = Object.values(SECURITY_CODE.FIELDS).map(({ name }) => name);
  const fieldsFulfilled = Object.values(fieldKeys).map((key) => !errors[key]);
  const allFieldsFulfilled = fieldsFulfilled.every((field) => field);
  const optionalClassName = allFieldsFulfilled ? 'text-fulfilled' : '';

  return (
    <Input.Container>
      <Input.Title>{SECURITY_CODE.TITLE}</Input.Title>
      {Object.values(SECURITY_CODE.FIELDS).map(
        ({ name, type, validate, maxLength, placeholder }) => (
          <Input
            key={name}
            type={type}
            placeholder={placeholder}
            className={`w-25 ${optionalClassName}`}
            {...register(name, {
              maxLength,
              validate,
            })}
          />
        )
      )}
    </Input.Container>
  );
};
