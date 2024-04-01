interface InputErrorProps {
  hasError: boolean;
  errorMessage: string;
}

export const InputError = ({ hasError, errorMessage }: InputErrorProps) => {
  return <>{hasError && <span className='text-error'>{errorMessage}</span>}</>;
};
