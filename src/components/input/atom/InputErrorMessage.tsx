import { ValidateResult } from '@/hooks/useForm/useForm.type';

interface InputErrorProps {
  errors: ValidateResult[];
}

export const InputError = ({ errors }: InputErrorProps) => {
  const errorMessages = errors.filter((error) => error);
  const hasError = errors.length > 0;

  return (
    <>{hasError && <span className='text-error'>{errorMessages[0]}</span>}</>
  );
};
